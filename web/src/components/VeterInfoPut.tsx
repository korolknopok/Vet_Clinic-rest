import React from "react";
import { useState } from 'react';
import { Veterinarians } from '../json/api.tsx';
import {VeterinariansApiFactory} from '../json/api.ts';

interface VeterinariansInfo {
    post: {
        id : number;
        name: string;
        dateOfBirth: string;
        phoneNumber: string;
        education: string;
    };
}

const VeterInfoPut: React.FC<VeterinariansInfo>  = ({post}) => {
    let functionFromApi = VeterinariansApiFactory(); 
    const [name, setName] = useState(post.name);
    const [phoneNumber, setPhoneNumber] = useState(post.phoneNumber);
    const [dateOfBirth, setDateOfBirth] = useState(post.dateOfBirth);
    const [education, setEducation] = useState(post.education);

    const veterinarian: Veterinarians = {
        name: name,
        phoneNumber: phoneNumber,
        dateOfBirth: dateOfBirth,
        education: education
    };

    const handlePutVetData = async (id : number) => {
        console.log(id);
        try {
            const response = await functionFromApi.apiVeterinariansIdPut(id, veterinarian,  {});
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <form >
            <label>Name: </label>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />

            <label>Phone Number: </label>
            <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

            <label>Date of Birth: </label>
            <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />

            <label>Education: </label>
            <input type="text" value={education} onChange={(e) => setEducation(e.target.value)} />
            
            <button type="submit" onClick={() => handlePutVetData(post.id)}>
                Изменить данные
            </button>
        </form>
    )
}

export default VeterInfoPut