import React from 'react'
import { TiDelete } from "react-icons/ti";
import { MdOutlineEdit } from "react-icons/md";
import { Dispatch, SetStateAction } from 'react';

interface VeterinariansInfo {
    handleDeleteVetData: (id: string) => void;
    setIsOpen:  Dispatch<SetStateAction<string>>;
    open: string;
    post: {
        id : string;
        name: string;
        dateOfBirth: string;
        phoneNumber: string;
        education: string;
        
    };
}

const VeterinariansInfo: React.FC<VeterinariansInfo> = ({handleDeleteVetData , post, setIsOpen, open}) =>  {
    return (
        <div>
            {post.name}, {post.dateOfBirth}, {post.phoneNumber}, {post.education}
            <TiDelete className='styleIcons' onClick={() => {
                handleDeleteVetData(post.id);
            }}/>
            <MdOutlineEdit className='styleIcons' onClick={() => {
                if (open === post.id) {
                    setIsOpen('0');
                }
                else {
                    setIsOpen(post.id)
                }
            }}/>
            
        </div>
    );
    
};

export default VeterinariansInfo