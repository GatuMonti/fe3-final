import axios from 'axios'
import { useState, useEffect } from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentistas, setDentistas] = useState([])

  

  const getDentistas = async () =>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setDentistas(res.data)       
  }

  useEffect(() => {
    getDentistas()    
  }, [])
  


  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {
        dentistas.map(dentista=>(<Card key={dentista.id} {...dentista} />))}            
      </div>
    </main>
  )
}

export default Home