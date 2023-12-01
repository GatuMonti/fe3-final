import { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useGlobalData } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {    
    
    const { state } = useGlobalData();       

    return (
        <div className={state.theme}>
            <h1>Dentists Favs</h1>
            <div className="card-grid">
                {state.favs.length > 0 ? 
                    (state.favs.map((fav) => (<Card key={`fav${fav.id}`} {...fav} />)))
                    : 
                    (<h3>No tiene dentistas marcados como favoritos</h3>)
                }
            </div>
        </div>
    );
};

export default Favs;
