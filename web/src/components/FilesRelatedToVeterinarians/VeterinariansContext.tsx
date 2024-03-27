// @ts-ignore
import React, {createContext, useContext, useEffect, useState} from 'react';
// @ts-ignore
import {Veterinarians, VeterinariansApiFactory} from '../../json/api.ts';

// Создайте тип для контекста
type VeterinariansContextType = {
    veterinarians: Veterinarians[];
};

// Создайте контекст
const VeterinariansContext = createContext<VeterinariansContextType | undefined>(undefined);

var functionFromApi = VeterinariansApiFactory();

export const VeterinariansProvider: React.FC = ({ children }) => {
    const [veterinarians, setVeterinarians] = useState<Veterinarians[]>([]);

    useEffect(() => {
        const fetchVeterinarians = async () => {
            try {
                const response = await functionFromApi.apiVeterinariansGet();
                const data = response.data;
                setVeterinarians(data);
            } catch (error) {
                console.error('Ошибка при загрузке данных ветеринаров:', error);

            }
        };
        fetchVeterinarians();
    }, []);

    return (
        <VeterinariansContext.Provider value={{ veterinarians}}>
            {children}
        </VeterinariansContext.Provider>
    );
};

export const useVeterinarians = () => {
    const context = useContext(VeterinariansContext);
    if (!context) {
        throw new Error('useVeterinarians must be used within a VeterinariansProvider');
    }
    return context;
};
