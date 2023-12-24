import React, { useState, useEffect } from 'react';
import { Select, MenuItem } from '@material-ui/core';
import { VeterinariansApiFactory } from '../json/api.ts';

interface Post {
    id: string;
    name: string;
}

const SelectVeter: React.FC = () => {
    const [name, setName] = useState<string[]>([]);
    const [data, setData]: any = useState<Post[]>([]);
    const [selectedName, setSelectedName] = useState<string | undefined>();

    const functionFromApi = VeterinariansApiFactory();

    async function getVetDataFromApi() {
        const response = await functionFromApi.apiVeterinariansGet();
        const { data } = response;
        setData(data);
    }

    useEffect(() => {
        getVetDataFromApi();
    }, []);

    return (
        <Select value={selectedName} onChange={(event) => setSelectedName(event.target.value as string)}>
            {data.map((post) => (
                <MenuItem key={post.id} value={post.name}>{post.name}</MenuItem>
            ))}
        </Select>
    );
}

export default SelectVeter;