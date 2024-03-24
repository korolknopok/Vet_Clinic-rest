import React, { useState } from 'react';
import { Select, MenuItem } from '@material-ui/core';
import { Veterinarian } from "../json/api.ts";

interface SelectVetProps {
    veterinarians: Veterinarian[];
    onSelect: (id: number) => void;
}

const SelectVet: React.FC<SelectVetProps> = ({ veterinarians, onSelect }) => {
    const [selectedId, setSelectedId] = useState<number | undefined>(undefined);

    const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const id = event.target.value as number;
        setSelectedId(id);
        onSelect(id);
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
