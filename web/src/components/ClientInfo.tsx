import React from 'react';
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

const ClientInfo: React.FC<IClientInfo> = ({ handleDeleteData, post}) => {
    const { veterinarians } = useVeterinarians();
    return (
        <div>
            {post?.name}, {post?.phoneNumber}
            <SelectVet veterinarians={veterinarians} clientId={post.id} onSelect = {() => 5}/>
            <TiDelete className='styleIcons' onClick={() => handleDeleteData(post.id)} />
        </div>
    );
};

export default ClientInfo;
