import React, { Component } from 'react'
import { TiDelete } from "react-icons/ti";
import { MdOutlineEdit } from "react-icons/md";

interface IVeterinariansInfo {
    handleDeleteVetData: (id: string) => void;
    
    post: {
        id : string;
        name: string;
        dateOfBirth: string;
        phoneNumber: string;
        education: string;
    };
}

const VeterinariansInfo: React.FC<IVeterinariansInfo> = ({handleDeleteVetData , post}) =>  {
        
        return (
            <div >
                {post.name}, {post.dateOfBirth} , {post.phoneNumber}, {post.education}
                <TiDelete className='styleIcons' onClick={() => {
                    handleDeleteVetData(post.id);
                    }}></TiDelete>
                <MdOutlineEdit className='styleIcons' onClick={() => {
                    handleDeleteVetData(post.id);
                }}></MdOutlineEdit>
                
            </div>
        );
    
};

export default VeterinariansInfo