import { useEffect, useState } from "react";



const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [datosContacto, setDatosContacto] = useState({
    nombre:"",
    email:""
  })
  const [show,setShow] = useState({
    ok:false,
    mensaje:""    
  })

  const handlerOnChangeNombre=(e)=> setDatosContacto(prev=>({...prev,nombre:e.target.value.trimStart() }));    
  const handlerOnChangeEmail=(e)=> setDatosContacto(prev=>({...prev,email:e.target.value.trim() }));  
  
  const validarNombre=()=> datosContacto.nombre.length>5?true:false;
  const validarEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(datosContacto.email);
  };  
  
  const handlerOnSubmit = (e)=>{
    e.preventDefault();        
    if(validarEmail()&&validarNombre()){
      console.log(datosContacto)
      setShow({...show,mensaje:`Gracias ${datosContacto.nombre}, te contactaremos cuando antes vía mail`})
    }else{
      setShow({...show,mensaje:"Por favor verifique su información nuevamente"})
    }   
  }

  useEffect(()=>{     
    setShow((prev)=>({...prev,ok:true}))     
  },[setShow.ok])
  
  return (
    <div>
      <form onSubmit={handlerOnSubmit}>
        <label htmlFor="input-nombre">Nombre Completo:</label>
        <input type="text" id="input-nombre" placeholder="ingrese nombre completo" value={datosContacto.nombre} onChange={handlerOnChangeNombre} />
        <label htmlFor="input-email">Email:</label>
        <input type="text" id="input-email" placeholder="ingrese su email" value={datosContacto.email} onChange={handlerOnChangeEmail}/>
        <button type="submit">Contactar</button>        
      </form>      
        {show.ok&&(<h2 className="msj-contact">{show.mensaje}</h2>)}      
    </div>
  );
};

export default Form;
