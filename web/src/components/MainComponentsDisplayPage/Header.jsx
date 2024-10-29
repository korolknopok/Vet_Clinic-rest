import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import {AppBar, Toolbar, Typography, Button, Box, TextField} from '@mui/material';
import { AiFillClockCircle, AiFillPhone, AiFillEnvironment } from 'react-icons/ai';
import Modal from './Modal';
import { useAuth } from "../Authorization/AuthContext.tsx";
import { AuthApi } from "../../json/api.ts";

export default function Header() {
    const authApi = new AuthApi();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);
    const { isLoggedIn, userName, login, logout } = useAuth();

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);
    const toggleRegistering = () => setIsRegistering(!isRegistering);

    const handleAuth = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const authData = {
            login: formData.get('login'),
            password: formData.get('password'),
        };
        try {
            let response;
            if (isRegistering) {
                response = await authApi.apiAuthRegisterPost(authData);
            } else {
                response = await authApi.apiAuthLoginPost(authData);
            }

            if (response.status === 200) {
                const data = response.data;
                if (!isRegistering) {
                    login(authData.login, data.token);
                }
                closeModal();
            } else {
                console.error(`Ошибка ${isRegistering ? 'регистрации' : 'входа'}`);
            }
        } catch (error) {
            console.error('Ошибка:', error);
        }
    };

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: 'rgb(19, 218, 191)' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px'}}>
                    <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', marginRight: 2, fontSize: '2.5rem' }}>
                        REKS
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Button color="inherit" component={NavLink} to="/" sx={{ fontSize: '1.25rem', marginRight: 3 }}>
                            Про нас
                        </Button>
                        <Button color="inherit" component={NavLink} to="/reviews" sx={{ fontSize: '1.25rem', marginRight: 3 }}>
                            Отзывы
                        </Button>
                        {isLoggedIn && (
                            <>
                                <Button color="inherit" component={NavLink} to="/veterinarians" sx={{ fontSize: '1.25rem', marginRight: 3 }}>
                                    Ветеринары
                                </Button>
                                <Button color="inherit" component={NavLink} to="/contact" sx={{ fontSize: '1.25rem', marginRight: 3 }}>
                                    Записи
                                </Button>
                            </>
                        )}
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '1rem', color: 'inherit' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 3, fontSize: '1.1rem' }}>
                            <AiFillEnvironment style={{ marginRight: '6px' }} /> Г.Томск ул.Елизаровых 74
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 3, fontSize: '1.1rem' }}>
                            <AiFillClockCircle style={{ marginRight: '6px' }} /> Работаем круглосуточно
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 3, fontSize: '1.1rem' }}>
                            <AiFillPhone style={{ marginRight: '6px' }} /> +7(950)-585-60-34
                        </Box>
                        <Button color="inherit" onClick={isLoggedIn ? logout : openModal} sx={{ fontSize: '1.25rem' }}>
                            {isLoggedIn ? userName : 'Вход'}
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            <Modal active={modalIsOpen} setActive={setModalIsOpen}>
                <Box
                    sx={{
                        width: 400,
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        boxShadow: 24,
                        p: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h5" component="h2" gutterBottom>
                        {isRegistering ? 'Регистрация' : 'Вход'}
                    </Typography>
                    <form onSubmit={handleAuth} style={{ width: '100%' }}>
                        <TextField
                            label="Логин"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="login"
                            required
                        />
                        <TextField
                            label="Пароль"
                            type="password"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="password"
                            required
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            fullWidth
                            sx={{ mt: 2 }}
                        >
                            {isRegistering ? 'Зарегистрироваться' : 'Войти'}
                        </Button>
                    </form>
                    <Button onClick={toggleRegistering} sx={{ mt: 2 }}>
                        {isRegistering ? 'Уже есть аккаунт? Войти' : 'Нет аккаунта? Зарегистрироваться'}
                    </Button>
                    <Button onClick={closeModal} sx={{ mt: 2 }}>
                        Закрыть
                    </Button>
                </Box>
            </Modal>
            <Outlet />
        </>
    );
}