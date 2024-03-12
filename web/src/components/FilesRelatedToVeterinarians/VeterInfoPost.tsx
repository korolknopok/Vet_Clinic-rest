//ts
// @ts-ignore
import React from "react";
import { useState } from 'react';
// @ts-ignore
import { Veterinarians } from '../../json/api.ts';
// @ts-ignore
import {VeterinariansApiFactory} from '../../json/api.ts';

interface VeterinariansInfo {
    post: Veterinarians;
}

const VeterInfoPost: React.FC<VeterinariansInfo>  = ({post}) => {
    var functionFromApi = VeterinariansApiFactory(); 
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

    const handlePostVetData = async () => {
        
        try {
            const response = await functionFromApi.apiVeterinariansPost(veterinarian,  {});
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