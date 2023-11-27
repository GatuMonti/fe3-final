
import { Link } from 'react-router-dom'
import { useGlobalData } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {state,dispatch} = useGlobalData();

  const handlerOnClick = () => {
  dispatch({ type: "CHANGE_THEME", payload: state.theme === "light" ? "dark" : "light" });   
};

  return (
    <nav className={state.theme}>
      <Link to='/'>Home</Link>
      <Link to='/Contact'>Contacto</Link>
      <Link to='/Favs'>Favoritos</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handlerOnClick}>Change theme</button>
    </nav>
  )
}

export default Navbar