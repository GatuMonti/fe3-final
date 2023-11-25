import { Link } from "react-router-dom";
import { useState, useEffect} from 'react'

const Card = ({ id, name, username}) => {    
  const [dentistasFavs,setDentistasFavs] = useState([]) //ACORDATEEEEEEEEEE
  const [isFav,setIsFav] = useState(false); //TIENEN QUE ESTAR EN USE CONTEXT
  
    const addFav = (e) => {
      e.preventDefault();
      if (isFav) {
          setIsFav(false)
      } else {               
        setDentistasFavs(prev=>([...prev, { "id": id, "name": name, "username": username }]));        
        setIsFav(true);        
      }      
  };
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(dentistasFavs));
}, [dentistasFavs]);

    return (
        <Link className="card" to={`/detail/${id}`}>
            <img className="card-img" src="images/doctor.jpg" alt="Foto del dentista" />
            <h4>{name}</h4>
            <p>{username}</p>

            
            <button onClick={addFav} className="favButton">
                {isFav?"Remove favs ❌":"Add favs ⭐"}
            </button>
        </Link>
    );
};

export default Card;
