import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import VeterinariansInfo from "./VeterinariansInfo.tsx";
import VeterInfoPut from './VeterInfoPut.tsx';
import VeterInfoPost from './VeterInfoPost.tsx';
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
        functionFromApi.apiVeterinariansIdDelete(id)
            .then(response => {
                if (response.status == 200) {
                    console.log('Данные успешно удалены');
                    getVetDataFromApi();
                } else {
                    console.log('Ошибка при удалении данных');
                }
            })
            .catch(error => {
                console.log('Ошибка при удалении данных:', error);
            });
    }

    return (
        <div>
            Добавить ветеринара: 
            
            <VeterInfoPost post={data}/> 
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
