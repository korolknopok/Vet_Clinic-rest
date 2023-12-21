import React from 'react'
import {VeterinariansApiAxiosParamCreator, VeterinariansApiFactory} from '../json/api.ts';
import { useState } from 'react';
import { useEffect } from 'react';
import VeterinariansInfo from "../components/VeterinariansInfo.tsx";
import { error } from 'console';
import * as console from "console";


var functionFromApi = VeterinariansApiFactory(); 
function Veterinarians() {
    

    const [data, setData] = useState([]);

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

    const handlePutVetData = (id) => {
        
        functionFromApi.apiVeterinariansIdPut(id)
            .then(response => {
                if(response.status == 200) {
                    //Успешное изменение данных
                    console.log('Данные успешно обновлены');
                    getVetDataFromApi();
                } else {
                    // Обработка ошибки, если требуется
                    console.log('Ошибка при изменение данных');
                }
            })
            .catch(error => {
                //Обработка ошибки, если требуется
                console.log('Ошибка при изменение данных', error);
            });
    }


    

    return (
        <div>
            Список ветеринаров:
            <div>
                {data.map(post => 
                    <div key = {post.id}>
                        <VeterinariansInfo post = {post} handleDeleteVetData={handleDeleteVetData}/>    
                        {/* <VeterinariansInfo post = {post} handlePutVetData = {handlePutVetData}  />     */}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Veterinarians
