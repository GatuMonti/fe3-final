import { Link } from "react-router-dom";
import { useGlobalData } from "./utils/global.context";

//En este componente utilizo locarStorage para agregay y quitar los favs por que lo pide la consigna lo pide
//Podria haber utilizado el contexto
const Card = ({ id, name, username}) => {    
    
    const {state, dispatch} = useGlobalData(); 
    const isFav = state.favs.some((dentista) => dentista.id === id);    
    
    const addFav = () => { 
        let update = JSON.parse(localStorage.getItem('favs')) || [];                             
        if (!isFav) {
            dispatch({type:"UPDATE_FAVS",payload:[...update,{id:id, name:name, username:username}]})
            localStorage.setItem("favs",JSON.stringify(state.favs))
        }else{
            update = update.filter((dentista) => dentista.id !== id)
            dispatch({type:"UPDATE_FAVS",payload:update})
        }
    };

    return (
        <div>
            <Link className={`card ${state.theme}`}  to={`/detail/${id}`}>
            <img
                className="card-img"
                src="/images/doctor.jpg"
                alt="Foto del dentista"
            />
            <h4>{name}</h4>
            <p>{username}</p>
            </Link>
            <button onClick={addFav} className={`favButton ${state.theme}`}>
                {isFav ? "Remove favs ❌" : "Add favs ⭐"}
            </button>
        </div>

        

            
        
    );
};

export default Card;
