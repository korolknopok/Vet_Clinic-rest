import React, { useState, useEffect } from 'react';
import { Select, MenuItem } from '@material-ui/core';
import { updateClientVet } from '../json/api.ts'; // Предполагается, что у вас есть функция для обновления клиента на сервере
import { Veterinarian } from "../json/api.ts";
interface SelectVetProps {
    veterinarians: Veterinarian[];
    clientId: number;
}

const SelectVet: React.FC<SelectVetProps> = ({ veterinarians, clientId, onSelect }) => {
    const savedId = `client_${clientId}_vetId`;
    const [selectedId, setSelectedId] = useState<number | undefined>(localStorage.getItem(savedId) ?
        parseInt(localStorage.getItem(savedId)!) : undefined);

    const handleSelectChange = async (event: React.ChangeEvent<{ value: unknown }>) => {
        const id = event.target.value as number;
        setSelectedId(id);
        onSelect(id);
        localStorage.setItem(savedId, id.toString());

        // Отправляем запрос на обновление клиента на сервере
        await updateClientVet(clientId, id);
    };

    return (
        <Select value={selectedId} onChange={handleSelectChange}>
            {veterinarians.map((vet) => (
                <MenuItem key={vet.id} value={vet.id}>
                    {vet.name}
                </MenuItem>
            ))}
        </Select>
    );
};

export default SelectVet;
