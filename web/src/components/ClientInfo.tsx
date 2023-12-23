import React from 'react'
import { TiDelete } from "react-icons/ti";

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
                <TiDelete className='styleIcons' onClick={() => {
                    handleDeleteData(post.id);
                    }}></TiDelete>
            </div>
        );
    
};

export default ClientInfo