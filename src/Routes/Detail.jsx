import { useParams } from "react-router-dom";
import { useGlobalData } from "../Components/utils/global.context";
import { useEffect } from "react";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
    const param = useParams();
    
    const {dentista, setDentista} = useGlobalData();
    useEffect(()=>{
        setDentista(prev=>({...prev,paramDent:param.id}))        
    },[param])     
    

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
                        <td>{dentista.fav.name}</td>
                        <td>{dentista.fav.email}</td>
                        <td>{dentista.fav.phone}</td>
                        <td>{dentista.fav.website}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default Detail;
