import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ContextGlobal = createContext();

//export const initialState = {theme: "", data: []}

//export const ContextGlobal = createContext(undefined);

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [tema,setTema] = useState({theme: "", data:[]})  
  const [dentistas, setDentistas] = useState([])
  const [dentista, setDentista] = useState({
    fav:{},
    paramDent:1
  })  
  
  //Llamada a todos los dentistas-------------------------
  const getDentistas = async () =>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setDentistas(res.data)       
  }
  useEffect(() => {
    getDentistas()    
  }, [])


  //Llamada al detalle del dentista seleccionado--------------------
  const getDentistaFav = async () => {
        const res = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${dentista.paramDent}`
        );            
        setDentista(prev=>({...prev,fav:res.data}));        
    };
    useEffect(() => {
        getDentistaFav();        
    },[]);  


    
  return (
    <ContextGlobal.Provider value={{
      tema,setTema,  
      dentistas,
      dentista,setDentista  
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useGlobalData = () => useContext(ContextGlobal)