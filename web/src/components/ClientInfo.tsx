import React from 'react'
import { TiDelete } from "react-icons/ti";
import SelectVeter from "../routes/SelectVeter";

interface IClientInfo {
    handleDeleteData: (id: number) => void;
    
    post: {
        id : number;
        name: string;
        phoneNumber: string;
        veterinariansId: number;
    };
}

const ClientInfo: React.FC<IClientInfo> = ({handleDeleteData , post}) =>  {
    return (
        <div >
            {post.name}, {post.phoneNumber} 
            <SelectVeter client={post.name}/>
            <TiDelete className='styleIcons' onClick={() => {
                handleDeleteData(post.id);
                }}></TiDelete> 
                
        </div>
    );
};

export default ClientInfo