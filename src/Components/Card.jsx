import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Card = ({ id, name, username, handleButtonClick }) => {
    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favs")) || [];
        setIsFav(favorites.some((dentista) => dentista.id === id));
    }, [id]);

    const addFav = (e) => {
        e.preventDefault();
        let updatedFavs = JSON.parse(localStorage.getItem("favs")) || [];
        if (isFav) {
            updatedFavs = updatedFavs.filter((dentista) => dentista.id !== id);
        } else {
            updatedFavs = [
                ...updatedFavs,
                { id: id, name: name, username: username },
            ];
        }
        localStorage.setItem("favs", JSON.stringify(updatedFavs));
        setIsFav(!isFav);
        //Esto lo hago para poder eliminar los favoritos directamente de la ruta favs
        //Para hacerlo por locarStorage y no por context como lo pide la consigna
        if (handleButtonClick) {
            handleButtonClick();
        }
    };

    return (
        <Link className="card" to={`/detail/${id}`}>
            <img
                className="card-img"
                src="images/doctor.jpg"
                alt="Foto del dentista"
            />
            <h4>{name}</h4>
            <p>{username}</p>

            <button onClick={addFav} className="favButton">
                {isFav ? "Remove favs ❌" : "Add favs ⭐"}
            </button>
        </Link>
    );
};

export default Card;
