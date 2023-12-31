import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { reducer } from "./reducer"
const ContextGlobal = createContext();

const initialState = {
  theme: "light",
  dentistas:[],
  dentista:{
    detail:{},
    paramDent:1
  },
  favs: [],
}


const ContextProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  
  //Llamada a todos los dentistas-------------------------  
  useEffect(() => {
    const getDentistas = async () =>{
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      dispatch({type:"GET_DENTISTAS",payload:res.data});         
    }
    getDentistas()    
  }, [])


  //Llamada al detalle del dentista seleccionado--------------------  
  useEffect(() => {
    const getDentistaDetail = async () => {
      const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${state.dentista.paramDent}`
      );                
      dispatch({type:"GET_DENTISTA_DETAIL", payload:res.data})           
    };
      getDentistaDetail();                
  },[state.dentista.paramDent]);

  
  //Insertar los favoritos en el localStorage cada vez que cada ves que se modifique el listado de favoritos 
  useEffect(()=>{
    localStorage.setItem("favs",JSON.stringify(state.favs))
  },[state.favs])

  return (
    <ContextGlobal.Provider value={{
      state,dispatch              
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useGlobalData = () => useContext(ContextGlobal)