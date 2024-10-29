import React, { useState } from 'react';
import {Typography, Button, TextField, Modal, Paper, Stack } from '@mui/material';
import dog from '../../img/dogLast.jpeg';
import { ClientApiFactory } from '../../json/api.ts';

export default function Content() {
    const [modalActive, setModalActive] = useState(false);
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [veterinarianId, setVeterinarianId] = useState("");

    let f = ClientApiFactory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: name,
            phoneNumber: phoneNumber,
            vetId: veterinarianId,
            vet: {
                id: 0, // Здесь может быть динамическое значение или же передавайте 0
                name: "", // Добавьте имя или оставьте пустым
                dateOfBirth: "", // Можете указать примерную дату или оставить пустым
                phoneNumber: "", // Введите номер телефона или оставьте пустым
                education: "" // Можете указать или оставить пустым
            }
        };

        const options = {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(data),
        };

        f.apiClientPost(data)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        setModalActive(false);
    };

    return (
        <div className='content row' >
            <div className='presentation'>
                <img  src={dog}/>
            </div>
            <div className='blockright'>
                <label className='labelmetod'>
                    <ul>
                        NEW
                    </ul>
                    Современные методы обследования
                </label>
                <label className='labelvetclinic'>
                    <div>Круглосуточная</div>
                    <div>ветеринарная</div>
                    <div>клиника</div>
                </label>
                <label className='labeltext'>
                    <div>Работаем со всеми видами животных.</div>
                    <div>В штабе работают врачи с большим опытом работы с кошками, собаками, </div>
                    <div>а также экзотическими животными. </div>
                </label>
                <div className='RecordButton' onClick={() => setModalActive(true)}>
                    <div>
                        Записаться на приём
                    </div>
                </div>
                <Modal open={modalActive} onClose={() => setModalActive(false)}>
                    <Paper sx={{
                        width: 300,
                        p: 4,
                        m: 'auto',
                        mt: '15%',
                        borderRadius: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Typography variant="h5" sx={{ mb: 3 }}>Запись</Typography>
                        <form onSubmit={handleSubmit}>
                            <Stack spacing={2}>
                                <TextField
                                    label="Имя"
                                    required
                                    fullWidth
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <TextField
                                    label="Номер телефона"
                                    required
                                    fullWidth
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                                <TextField
                                    label="ID Ветеринара"
                                    required
                                    fullWidth
                                    value={veterinarianId}
                                    onChange={(e) => setVeterinarianId(e.target.value)}
                                />
                                <Button type="submit" variant="contained" fullWidth sx={{ backgroundColor: 'rgb(19, 218, 191)' }}>
                                    Записаться
                                </Button>
                            </Stack>
                        </form>
                    </Paper>
                </Modal>
            </div>
        </div>
    )
}