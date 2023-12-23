import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import VeterinariansInfo from "./VeterinariansInfo.tsx";
import VeterInfoPut from './VeterInfoPut.tsx';
import {VeterinariansApiFactory} from '../json/api.ts';

function IVeterinarians() {
    const functionFromApi = VeterinariansApiFactory(); 
    const [open, setIsOpen] = useState('0');
    const [data, setData]: any  = useState([]);


    async function getVetDataFromApi() {
        const response = await functionFromApi.apiVeterinariansGet();
        const { data } = response;
        setData(data);
    }
    useEffect(() => {
        getVetDataFromApi();
    }, []);

    const handleDeleteVetData = (id) => {
        console.log(id);
        functionFromApi.apiVeterinariansIdDelete(id)
            .then(response => {
                if (response.status == 200) {
                    // Успешное удаление данных
                    console.log('Данные успешно удалены');
                    getVetDataFromApi();
                } else {
                    // Обработка ошибки, если требуется
                    console.log('Ошибка при удалении данных');
                }
            })
            .catch(error => {
                // Обработка ошибки, если требуется
                console.log('Ошибка при удалении данных:', error);
            });
    }

    return (
        <div>
            Список ветеринаров:
            <div>
                {data.map(post => 
                    <div key = {post.id}>
                        <VeterinariansInfo post = {post} handleDeleteVetData={handleDeleteVetData} setIsOpen={setIsOpen} open = {open}/>  
                        {open === post.id && (
                            <VeterInfoPut post = {post}/> 
                        )}  
                          
                    </div>
                    
                )}
                
            </div>
        </div>
    );
}

export default IVeterinarians
