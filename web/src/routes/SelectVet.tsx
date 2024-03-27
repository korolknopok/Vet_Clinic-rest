import React, { useState, useEffect } from 'react';
import { Select, MenuItem } from '@material-ui/core';
import { Veterinarian } from "../json/api.ts";

interface SelectVetProps {
    veterinarians: Veterinarian[];
    clientId: number;
    onSelect: (id: number) => void;
}

const SelectVet: React.FC<SelectVetProps> = ({ veterinarians, clientId, onSelect }) => {
    const [selectedId, setSelectedId] = useState<number | undefined>(localStorage.getItem(`client_${clientId}_vetId`) ? parseInt(localStorage.getItem(`client_${clientId}_vetId`)!) : undefined);

    const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const id = event.target.value as number;
        setSelectedId(id);
        onSelect(id);
        localStorage.setItem(`client_${clientId}_vetId`, id.toString());
    };

    useEffect(() => {
        const savedId = localStorage.getItem(`client_${clientId}_vetId`);
        if (savedId) {
            setSelectedId(parseInt(savedId));
        }
    }, [clientId]);

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
