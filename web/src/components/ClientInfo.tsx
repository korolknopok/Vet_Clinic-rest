import React from 'react'
import { TiDelete } from "react-icons/ti";
import SelectVeter from "../routes/SelectVeter.tsx";

interface IClientInfo {
    handleDeleteData: (id: string) => void;
    post: {
        id : string;
        name: string;
        phoneNumber: string;
    };
}

const ClientInfo: React.FC<IClientInfo> = ({handleDeleteData , post}) =>  {
    return (
        <div >
            {post.name}, {post.phoneNumber} 
            <SelectVeter />
            <TiDelete className='styleIcons' onClick={() => {
                handleDeleteData(post.id);
                }}></TiDelete> 
                
        </div>
    );
};

export default ClientInfo