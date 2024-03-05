import { useState, useEffect } from 'react';
import { Select, MenuItem } from '@material-ui/core';
// @ts-ignore
import { Client, VeterinariansApiFactory } from '../json/api.ts';


interface Post {
    id: number;
    name: string;
}

// interface IVeterinariansInfo {
//     post: {
//         id : number;
//         name: string;
//         dateOfBirth: string;
//         phoneNumber: string;
//         education: string;
//     };
// }

interface ClientInfo {
    id: number;
    name: string;
    phoneNumber: string;
  }
  

const SelectVet: React.FC<ClientInfo> = (client) => {
    const [id, setId] = useState(0);
    const [veterinariansId, setVeterinariansId] = useState<number | undefined>();
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState();
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [education, setEducation] = useState('');
    const [data, setData]: any = useState<Post[]>([]);
    const [selectedName, setSelectedName] = useState<string | undefined>();
   

    const functionFromApi = VeterinariansApiFactory();

    const clientData: Client = {
        id: client.id,
        name: client.name,
        phoneNumber: client.phoneNumber,

    };

    const handlePutVetData = async (id) => {
        console.log(selectedName);
        try {
            const response = await functionFromApi.apiVeterinariansIdPut(id, clientData,  {});
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    async function getVetDataFromApi() {
        const response = await functionFromApi.apiVeterinariansGet();
        const { data } = response;
        setData(data);
    }

    useEffect(() => {
        getVetDataFromApi();
    }, []);

    return (
        <Select value={selectedName} onChange={(event) => 
        {
            setVeterinariansId(event.target.value as number)
            handlePutVetData(id);
        
        }
        } >
            {data.map((post) => (
                <MenuItem key={post.id} value={post.id}>{post.name}</MenuItem>
            ))}
        </Select>
    );
}

export default SelectVet;