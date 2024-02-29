// @ts-ignore
import React from 'react'
import { TiDelete } from "react-icons/ti";
// @ts-ignore
import SelectVeter from "../routes/SelectVeter.tsx";
// @ts-ignore
import {Veterinarians} from "../json/api.ts";

interface IClientInfo {
    handleDeleteData: (id: number) => void;
    
    post: Veterinarians;
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