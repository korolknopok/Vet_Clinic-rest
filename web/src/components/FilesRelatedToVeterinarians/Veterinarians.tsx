// @ts-ignore
import React, {useEffect, useState} from 'react';
// @ts-ignore
import VeterinariansInfo from './VeterinariansInfo.tsx';
// @ts-ignore
import VeterInfoPost from "./VeterInfoPost.tsx";
// @ts-ignore
import VeterInfoPut from "./VeterInfoPut.tsx";
// @ts-ignore
import {Veterinarians, VeterinariansApi} from "../../json/api.ts";
// @ts-ignore
import {useAuth} from "../Authorization/AuthContext.tsx";

function IVeterinarians() {
    const api = new VeterinariansApi();
    const { isLoggedIn } = useAuth();
    const [open, setIsOpen] = useState<number | null>(null);
    const [data, setData] = useState<Veterinarians[]>([]);

    useEffect(() => {
        if (isLoggedIn) {
            getVetDataFromApi();
        }
    }, [isLoggedIn]);

    async function getVetDataFromApi() {
        const response = await api.apiVeterinariansGet();
        const { data: dataResponse } = response;
        setData(dataResponse);
    }

    const handleDeleteVetData = (id: number) => {
        api.apiVeterinariansIdDelete(id)
            .then(response => {
                if (response.status === 200) {
                    console.log('Данные успешно удалены');
                    getVetDataFromApi();
                } else {
                    console.log('Ошибка при удалении данных');
                }
            })
            .catch(error => {
                console.log('Ошибка при удалении данных:', error);
            });
    };

    return (
        <div>
            {isLoggedIn && <VeterInfoPost post={data} />}
            Список ветеринаров:
            <div>
                {data.map(post => (
                    <div key={post.id}>
                        <VeterinariansInfo post={post} handleDeleteVetData={handleDeleteVetData} setIsOpen={setIsOpen} open={open} />
                        {open === post.id && isLoggedIn && <VeterInfoPut post={post} />}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default IVeterinarians;