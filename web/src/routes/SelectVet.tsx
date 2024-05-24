import React, { useState, useEffect } from 'react';
import { Select, MenuItem } from '@material-ui/core';
import httpClient, { ClientApiAxiosParamCreator } from '../json/api.ts';
import { Veterinarian } from '../json/api.ts';
import axios from "axios";

interface SelectVetProps {
    veterinarians: Veterinarian[];
    clientId: number;
}

const SelectVet: React.FC<SelectVetProps> = ({ veterinarians, clientId }) => {
    const apiClient = ClientApiAxiosParamCreator();
    const [selectedVet, setSelectedVet] = useState<Veterinarian | undefined>(undefined);


    useEffect(() => {
        const fetchClientData = async () => {
            try {
                const { url, options } = await apiClient.apiClientIdGet(clientId.toString());
                const response = await httpClient.request(url, options);
                const clientData = response.data;
                if (clientData.veterinarians) {
                    setSelectedVet(clientData.veterinarians);
                }
            } catch (error) {
                console.error('Error fetching client data:', error);
            }
        };
        fetchClientData();
    }, [clientId]);

    const handleSelectChange = async (event: React.ChangeEvent<{ value: unknown }>) => {
        const vetId = event.target.value as number;
        const selected = veterinarians.find(vet => vet.id === vetId);
        if (selected) {
            setSelectedVet(selected);
            await apiClient.apiClientUpdateClientPost(clientId, vetId);
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
