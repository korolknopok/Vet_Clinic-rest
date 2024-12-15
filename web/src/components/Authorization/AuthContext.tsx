// @ts-ignore
import React, { createContext, useState, useContext, useEffect } from 'react';
import { Button, TextField, Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

interface AuthContextType {
    isLoggedIn: boolean;
    userName: string | null;
    login: (userName: string, token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const AuthProvider: React.FC = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState<string | null>(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        const storedUserName = localStorage.getItem('userName');
        if (token && storedUserName) {
            setIsLoggedIn(true);
            setUserName(storedUserName);
        }
    }, []);

    const login = (userName: string, token: string) => {
        localStorage.setItem('token', token);
        localStorage.setItem('userName', userName);
        setIsLoggedIn(true);
        setUserName(userName);
        setSnackbarMessage('Успешный вход!');
        setSnackbarOpen(true);
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        setIsLoggedIn(false);
        setUserName(null);
        setSnackbarMessage('Вы вышли из системы.');
        setSnackbarOpen(true);
    };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, userName, login, logout }}>
            {children}
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="success">
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

const LoginComponent: React.FC = () => {
    const { login } = useAuth();
    const [userName, setUserName] = useState('');
    const [token, setToken] = useState('');

    const handleLogin = () => {
        login(userName, token);
    };

    return (
        <div>
            <TextField
                label="Имя пользователя"
                variant="outlined"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
                label="Токен"
                variant="outlined"
                type="password"
                value={token}
                onChange={(e) => setToken(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleLogin}>
                Войти
            </Button>
        </div>
    );
};
