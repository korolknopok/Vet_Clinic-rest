// @ts-ignore
import React from 'react';
import { TiDelete } from 'react-icons/ti';
// @ts-ignore
import { useVeterinarians } from './FilesRelatedToVeterinarians/VeterinariansContext.tsx';
// @ts-ignore
import SelectVet from '../routes/SelectVet.tsx';

interface IClientInfo {
    handleDeleteData: (id: number) => void;
    post: {
        id: number;
        name: string;
        phoneNumber: string;
    };
}

const ClientInfo: React.FC<IClientInfo> = ({ handleDeleteData, post }) => {
    const { isLoggedIn } = useVeterinarians();

    const handleDelete = (id: number) => {
        if (isLoggedIn) {
            handleDeleteData(id);
        } else {
            console.error('Неавторизованные пользователи не могут удалять данные');
        }
    };

    return (
        <div>
            {post?.name}, {post?.phoneNumber}
            <SelectVet clientId={post.id} />
            <TiDelete className='styleIcons' onClick={() => handleDelete(post.id)} />
        </div>
    );
};

export default ClientInfo;