import { createContext, useContext, useState } from "react";

const ContextGlobal = createContext();

//export const initialState = {theme: "", data: []}

//export const ContextGlobal = createContext(undefined);

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [tema,setTema] = useState({theme: "", data:[]})
  const [dentistasFavs,setDentistasFavs] = useState([])
  

  return (
    <ContextGlobal.Provider value={{
      tema,setTema,
      dentistasFavs,setDentistasFavs
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useGlobalData = () => useContext(ContextGlobal)