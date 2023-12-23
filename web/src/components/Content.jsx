import dog from '../img/dogLast.jpeg'
import { useState } from 'react';
import Modal from './Modal';
import React from 'react';
import { ClientApiFactory } from '../json/api.ts';

export default function Content() {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    var f = ClientApiFactory();
    const handleSubmit = (e) => {
        e.preventDefault();

        // Создание объекта с данными для отправки
        const data = {
            name: name,
            phoneNumber: phoneNumber,
        };

        // Опции для Fetch API
        const options = {
            
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            
            },
            body: JSON.stringify(data),
        };

        // Отправка запроса
        f.apiClientPost(data)
            .then(response => response.json())
            .then(data => {
            // Обработка ответа сервера
            console.log(data);
            })
            .catch(error => {
            // Обработка ошибок
            console.error('Error:', error);
            });

        setModalActive(false);
    };

    const [modalActive, setModalActive] = useState(false);
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
                
                <Modal active={modalActive} setActive={setModalActive}  >
                    <div className="conteiner">
                        <div className="form">
                        <h1>Запись</h1>
                        <form className='formRecord' onSubmit={handleSubmit}>
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
                            <button id="btn" type="submit" onClick={() => window.location.reload()}>Записаться</button>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    </div>
  )
}