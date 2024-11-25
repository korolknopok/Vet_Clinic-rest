// @ts-ignore
import React, { useState } from 'react';
import {Typography, Button, TextField, Modal, Paper, Stack, Dialog} from '@mui/material';
// @ts-ignore
import dog from '../../img/dogLast.jpeg';
// @ts-ignore
import { ClientApiFactory } from '../../json/api.ts';

export default function Content() {
    const [modalActive, setModalActive] = useState(false);
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [veterinarianId, setVeterinarianId] = useState(0);

    let f = ClientApiFactory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: name,
            phoneNumber: phoneNumber,
            vetId: veterinarianId,
            vet: {
                id: 0,
                name: "",
                dateOfBirth: "",
                phoneNumber: "",
                education: ""
            }
        };

        f.apiClientPost(data)
            .then(response => {
                console.log(response.data);
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
                <Dialog open={modalActive} onClose={() => setModalActive(false)}>
                    <Paper sx={{
                        width: 300,
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        borderRadius: '12px',
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
                                <Button type="submit" variant="contained" fullWidth
                                        sx={{backgroundColor: 'rgb(19, 218, 191)'}}>
                                    Записаться
                                </Button>
                            </Stack>
                        </form>
                    </Paper>
                </Dialog>
            </div>
        </div>
    )
}