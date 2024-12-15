// @ts-ignore
import React from "react";
import { useState } from 'react';
// @ts-ignore
import { Veterinarians } from '../../json/api.ts';
// @ts-ignore
import {VeterinariansApiFactory} from '../../json/api.ts';
import {Button, Container, TextField} from "@mui/material";

interface VeterinariansInfo {
    post: Veterinarians;
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

    const handlePutVetData = async (event: React.FormEvent) => {
        event.preventDefault();
        console.log(post.id);
        try {
            const response = await functionFromApi.apiVeterinariansIdPut(post.id, veterinarian,  {});
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container maxWidth="sm" style = {{marginLeft: 0}}>
            <form onSubmit={handlePutVetData} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <TextField
                    required
                    label="Имя"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    required
                    label="Номер телефона"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <TextField
                    required
                    label="Дата рождения"
                    type="date"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    required
                    label="Образование"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Изменить данные
                </Button>
            </form>
        </Container>
    )
}

export default VeterInfoPut