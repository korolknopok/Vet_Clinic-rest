import React, { useState, useEffect } from 'react';
import { TiDelete } from "react-icons/ti";
import { useVeterinarians } from "./FilesRelatedToVeterinarians/VeterinariansContext.tsx";
import SelectVet from "../routes/SelectVet.tsx";

interface IClientInfo {
    handleDeleteData: (id: number) => void;
    post: {
        id: number;
        name: string;
        phoneNumber: string;
    };
}

const handleSelect = (id: number) => {
    console.log(`Выбран ветеринар с id: ${id}`);
};

const ClientInfo: React.FC<IClientInfo> = ({ handleDeleteData, post }) => {
    const { veterinarians } = useVeterinarians();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleDelete = (id: number) => {
        if (isLoggedIn) {
            handleDeleteData(id);
        } else {
            console.error('Неавторизованные пользователи не могут удалять данные');
        }
    }

    return (
        <div>
            {post?.name}, {post?.phoneNumber}
            <SelectVet veterinarians={veterinarians} clientId={post.id} onSelect={handleSelect} />
            <TiDelete className='styleIcons' onClick={() => handleDelete(post.id)} />
        </div>
    );
};

export default ClientInfo;