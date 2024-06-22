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

    useEffect(() => {
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
        fetchClientData();
    }, [clientId]);

    const handleSelectChange = async (event: React.ChangeEvent<{ value: unknown }>) => {
        const vetId = event.target.value as number;
        const selected = veterinarians.find(vet => vet.id === vetId);
        if (selected) {
            setSelectedVet(selected);
            try {
                await clientApi.apiClientUpdateClientPost(clientId, vetId);
            } catch (error) {
                console.error('Error updating client veterinarian:', error.message);
            }
        }
    };

    return (
        <Select value={selectedVet ? selectedVet.id : ''} onChange={handleSelectChange}>
            {veterinarians.map((vet) => (
                <MenuItem key={vet.id} value={vet.id}>
                    {vet.name}
                </MenuItem>
            ))}
        </Select>
    );
};

export default SelectVet;
