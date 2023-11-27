import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

const ContextGlobal = createContext();

const initialState = {
  theme: "",
  data: [],
  dentistas:[],
  dentista:{
    detail:{},
    paramDent:1
  }  
}

//export const ContextGlobal = createContext(undefined);

const reducer = (state, accion) =>{
  switch(accion.type){
    case "GET_DENTISTAS":
      return {...state,dentistas: accion.payload}
    case "GET_DENTISTA_DETAIL":
      return {...state,dentista:{...state.dentista,detail: accion.payload}}
    case "SAVE_ID_PARAM":
      return {...state,dentista:{...state.dentista,paramDent: accion.payload}}
  }

}






const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);

  
  //Llamada a todos los dentistas-------------------------
  const getDentistas = async () =>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch({type:"GET_DENTISTAS",payload:res.data});         
  }
  useEffect(() => {
    getDentistas()    
  }, [])


  //Llamada al detalle del dentista seleccionado--------------------
  const getDentistaFav = async () => {
      const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${state.dentista.paramDent}`
      );                
      dispatch({type:"GET_DENTISTA_DETAIL", payload:res.data})           
    };
    useEffect(() => {
        getDentistaFav();                
    },[state.dentista.paramDent]);  


    
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