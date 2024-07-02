// @ts-ignore
import React, { createContext, useState, useContext, useEffect } from 'react';

interface AuthContextType {
    isLoggedIn: boolean;
    userName: string | null;
    login: (userName: string, token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState<string | null>(null);

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
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        setIsLoggedIn(false);
        setUserName(null);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, userName, login, logout }}>
            {children}
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