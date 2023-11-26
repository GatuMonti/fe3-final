import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
    const param = useParams();
    const [dentista, setDentista] = useState({});

    // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
    const getDentista = async () => {
        const res = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${param.id}`
        );
        setDentista(res.data);
    };
    useState(() => {
        getDentista();
    }, [dentista]);

    return (
        <>
            <h1>Detail Dentist id {param.id}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img className="img-perfil-dentista"src="/images/doctor.jpg" alt="Foto del dentista" /></td>
                        <td>{dentista.name}</td>
                        <td>{dentista.email}</td>
                        <td>{dentista.phone}</td>
                        <td>{dentista.website}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default Detail;
