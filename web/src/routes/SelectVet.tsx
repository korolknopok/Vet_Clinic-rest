import React, { useState, useEffect } from 'react';
import { Select, MenuItem } from '@material-ui/core';
import { ClientApi, Veterinarian } from '../json/api.ts';

interface SelectVetProps {
    veterinarians: Veterinarian[];
    clientId: number;
}

const SelectVet: React.FC<SelectVetProps> = ({ veterinarians, clientId }) => {
    const clientApi = new ClientApi();
    const [selectedVet, setSelectedVet] = useState<Veterinarian | undefined>(undefined);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
            fetchClientData();
        }
    }, [clientId]);

    const fetchClientData = async () => {
        try {
            const response = await clientApi.apiClientIdGet(clientId);
            const clientData = response.data;
            if (clientData.veterinarians) {
                setSelectedVet(clientData.veterinarians);
            }
        } catch (error) {
            console.error('Error fetching client data:', error.message);
        }
    };

    const handleSelectChange = async (event: React.ChangeEvent<{ value: unknown }>) => {
        if (isLoggedIn) {
            const vetId = event.target.value as number;
            const vet = veterinarians.find(vet => vet.id === vetId);
            if (vet) {
                setSelectedVet(vet);
                try {
                    await clientApi.apiClientUpdateClientPost(clientId, vetId);
                    console.log('Данные клиента успешно обновлены');
                } catch (error) {
                    console.error('Ошибка при обновлении данных клиента:', error.message);
                }
            }
        } else {
            console.error('Неавторизованные пользователи не могут изменять данные');
        }
    };

    return (
        <Select value={selectedVet?.id || ''} onChange={handleSelectChange}>
            {veterinarians.map((vet) => (
                <MenuItem key={vet.id} value={vet.id}>
                    {vet.name}
                </MenuItem>
            ))}
        </Select>
    );
};

export default SelectVet;
