// @ts-ignore
import React, { createContext, useState, useContext, useEffect } from 'react';
// @ts-ignore
import { Veterinarians, VeterinariansApiFactory } from '../../json/api.ts';
// @ts-ignore
import {useAuth} from "../Authorization/AuthContext.tsx";


type VeterinariansContextType = {
    veterinarians: Veterinarians[];
    isLoggedIn: boolean;
};

const VeterinariansContext = createContext<VeterinariansContextType | undefined>(undefined);

const api = VeterinariansApiFactory();

export const VeterinariansProvider: React.FC = ({ children }) => {
    const [veterinarians, setVeterinarians] = useState<Veterinarians[]>([]);
    const { isLoggedIn } = useAuth();

    useEffect(() => {
        const fetchVeterinarians = async () => {
            try {
                const response = await api.apiVeterinariansGet();
                const data = response.data;
                if (Array.isArray(data)) {
                    setVeterinarians(data);
                } else {
                    console.error('Данные о ветеринарах не являются массивом:', data);
                }
            } catch (error) {
                console.error('Ошибка при загрузке данных ветеринаров:', error);
            }
        };

        fetchVeterinarians();
    }, []);

    return (
        <VeterinariansContext.Provider value={{ veterinarians, isLoggedIn }}>
            {children}
        </VeterinariansContext.Provider>
    );
};

export const useVeterinarians = (): VeterinariansContextType => {
    const context = useContext(VeterinariansContext);
    if (!context) {
        throw new Error('useVeterinarians must be used within a VeterinariansProvider');
    }
    return context;
};