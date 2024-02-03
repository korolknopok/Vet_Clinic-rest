import React from "react";
import { useState } from 'react';
import { Veterinarians } from '../json/api.tsx';
import {VeterinariansApiFactory} from '../json/api.ts';

interface IVeterinariansInfo {
    post: {
        id : number;
        name: string;
        dateOfBirth: string;
        phoneNumber: string;
        education: string;
    };
}

const VeterInfoPost: React.FC<IVeterinariansInfo>  = ({post}) => {
    var functionFromApi = VeterinariansApiFactory(); 
    const [name, setName] = useState(post.name);
    const [phoneNumber, setPhoneNumber] = useState(post.phoneNumber);
    const [dateOfBirth, setDateOfBirth] = useState(post.dateOfBirth);
    const [education, setEducation] = useState(post.education);

    const veterinarians: Veterinarians = {
        name: name,
        phoneNumber: phoneNumber,
        dateOfBirth: dateOfBirth,
        education: education
    };

    const handlePostVetData = async () => {
        
        try {
            const response = await functionFromApi.apiVeterinariansPost(veterinarians,  {});
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <form className='formRecord' onSubmit={handlePostVetData}>
            <input
                type="text"
                required
                placeholder="Имя"
                id="name1"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                required
                placeholder="Номер телефона"
                id="tel"
                className="input"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
                type="text"
                required
                placeholder="Дата рождения"
                id="date"
                className="input"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
            />
            <input
                type="text"
                required
                placeholder="Образование"
                id="educ"
                className="input"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
            />
            <button type="submit" onClick={() => handlePostVetData()}>
                Добавить данные
            </button>
        </form>
    )
}

export default VeterInfoPost