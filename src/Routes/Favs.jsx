import { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useGlobalData } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
    const [favsArray, setFavsArray] = useState([]);
    const [fav, setFav] = useState(() => false);
    
    const { state } = useGlobalData();
    useEffect(() => {
        const favoritos = JSON.parse(localStorage.getItem("favs")) || [];
        setFavsArray(favoritos);
    }, [fav]);

    const handleButtonClick = () => {
        setFav(!fav); 
    };


    return (
        <div className={state.theme}>
            <h1>Dentists Favs</h1>
            <div className="card-grid">
                {favsArray.length > 0 ? (
                    favsArray.map((fav) => (
                        <Card
                            key={`fav${fav.id}`}
                            {...fav}
                            handleButtonClick={handleButtonClick}
                        />
                    ))
                ) : (
                    <h3>No tiene dentistas marcados como favoritos</h3>
                )}
            </div>
        </div>
    );
};

export default Favs;
