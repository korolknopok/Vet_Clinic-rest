// @ts-ignore
import React, { useEffect, useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, Box, Typography } from '@mui/material';
// @ts-ignore
import { ClientApi, Veterinarian } from '../json/api.ts';
// @ts-ignore
import { useVeterinarians } from "../components/FilesRelatedToVeterinarians/VeterinariansContext.tsx";

interface SelectVetProps {
    clientId: number;
}

const SelectVet: React.FC<SelectVetProps> = ({ clientId }) => {
    const { veterinarians, isLoggedIn } = useVeterinarians();
    const clientApi = new ClientApi();
    const [selectedVet, setSelectedVet] = useState<Veterinarian | undefined>(undefined);

    useEffect(() => {
        if (isLoggedIn) {
            fetchClientData();
        }
    }, [clientId, isLoggedIn]);

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

    if (veterinarians.length === 0) return null;

    return (
        <Box display="flex" alignItems="center">
            <FormControl variant="outlined" margin="normal" style={{ minWidth: 250 }}>
                <InputLabel id="select-vet-label">Выберите ветеринара</InputLabel>
                <Select
                    labelId="select-vet-label"
                    value={selectedVet?.id || ''}
                    onChange={handleSelectChange}
                    label="Выберите ветеринара"
                >
                    {veterinarians.map((vet) => (
                        <MenuItem key={vet.id} value={vet.id}>
                            {vet.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default SelectVet;
