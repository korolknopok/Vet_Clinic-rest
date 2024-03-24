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
        veterinariansId: number;
    };
    veterinarianId?: number;
    setVeterinarianId: (id: number | undefined) => void;
}

const ClientInfo: React.FC<IClientInfo> = ({ handleDeleteData, post, veterinarianId, setVeterinarianId }) => {
    const { veterinarians } = useVeterinarians();
    const [selectedVetId, setSelectedVetId] = useState<number | undefined>(post.veterinariansId);

    useEffect(() => {
        const storedVetId = localStorage.getItem(`selectedVetId_${post.id}`);
        if (storedVetId) {
            setSelectedVetId(parseInt(storedVetId));
            console.log(`Retrieved veterinarian ID for client ${post.id} from localStorage:`, storedVetId);
        }
    }, []);

    const handleSelectVet = (id: number) => {
        setSelectedVetId(id);
        localStorage.setItem(`selectedVetId_${post.id}`, id.toString());
        console.log(`Selected veterinarian ID for client ${post.id}:`, id);
    };

    return (
        <div>
            {post?.name}, {post?.phoneNumber}
            <SelectVet veterinarians={veterinarians} onSelect={handleSelectVet} value = {veterinarianId} />
            <TiDelete className='styleIcons' onClick={() => handleDeleteData(post.id)} />
        </div>
    );
};

export default ClientInfo;
