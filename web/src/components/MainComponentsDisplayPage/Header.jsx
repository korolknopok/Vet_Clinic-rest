import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { AiFillClockCircle, AiFillPhone, AiFillEnvironment } from 'react-icons/ai';
import Modal from './Modal';
import {useAuth} from "../Authorization/AuthContext.tsx";

export default function Header() {
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
            const response = await fetch(`https://localhost:7205/api/Auth/${isRegistering ? 'register' : 'login'}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(authData),
            });
            if (response.ok) {
                const data = await response.json();
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
        <div className="column">
            <div className="header row">
                <div className="headerleft">
                    <div className="logo">
                        <div>REKS</div>
                    </div>
                    <div className="flex-items item-1">
                        <div className="item">
                            <NavLink to="/">Про нас</NavLink>
                        </div>
                    </div>
                    <div className="flex-items item-2">Отзывы</div>
                    {isLoggedIn && (
                        <>
                            <div className="flex-items item-3">
                                <div className="item">
                                    <NavLink to="/veterinarians">Ветеринары</NavLink>
                                </div>
                            </div>
                            <div className="flex-items item-1">
                                <div className="item">
                                    <NavLink to="/contact">Записи</NavLink>
                                </div>
                            </div>
                        </>
                    )}
                    <div id="detail">
                        <Outlet />
                    </div>
                </div>
                <div className="headerright">
                    <div className="flex-navigation item-4">
                        <AiFillEnvironment className="styleIcons" /> Г.Томск ул.Елизаровых 74
                    </div>
                    <div className="flex-navigation item-5">
                        <AiFillClockCircle className="styleIcons" /> Работаем круглосуточно
                    </div>
                    <div className="flex-navigation item-6">
                        <AiFillPhone className="styleIcons" /> +7(950)-585-60-34
                    </div>
                    <div className="flex-navigation item-6">
                        <div className="flex-items item-1" onClick={isLoggedIn ? logout : openModal}>
                            {isLoggedIn ? `${userName}` : 'Вход'}
                        </div>
                    </div>
                </div>
            </div>
            <Modal active={modalIsOpen} setActive={setModalIsOpen}>
                <h2>{isRegistering ? 'Регистрация' : 'Вход'}</h2>
                <form onSubmit={handleAuth}>
                    <div>
                        <label htmlFor="login">Логин:</label>
                        <input type="text" id="login" name="login" required />
                    </div>
                    <div>
                        <label htmlFor="password">Пароль:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit">{isRegistering ? 'Зарегистрироваться' : 'Войти'}</button>
                </form>
                <button onClick={toggleRegistering}>
                    {isRegistering ? 'Уже есть аккаунт? Войти' : 'Нет аккаунта? Зарегистрироваться'}
                </button>
                <button onClick={closeModal}>Закрыть</button>
            </Modal>
        </div>
    );
}
