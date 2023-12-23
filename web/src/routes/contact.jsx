import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react'
import ClientInfo from "../components/ClientInfo.tsx";
import {ClientApiFactory } from '../json/api.ts';

var f = ClientApiFactory(); 

function List() {
    const [data, setData] = useState([]);

    async function getDataFromApi() {
        const response = await f.apiClientGet();
        const { data } = response;
        setData(data);
    }
    useEffect(() => {
        getDataFromApi();
    }, []);

    const handleDeleteData = (id) => {
        console.log(id);
        f.apiClientIdDelete(id)
            .then(response => {
                if (response.status == 200) {
                    // Успешное удаление данных
                    console.log('Данные успешно удалены');
                    getDataFromApi();
                } else {
                    // Обработка ошибки, если требуется
                    console.log('Ошибка при удалении данных');
                }
            })
            .catch(error => {
                // Обработка ошибки, если требуется
                console.log('Ошибка при удалении данных:', error);
            });
    };
    
    return (
        <div>
            {data.map(post => 
                <div key = {post.id}>
                    <ClientInfo post = {post} handleDeleteData={handleDeleteData}/>          
                </div>
            )}
        </div>
    );
}

export default List