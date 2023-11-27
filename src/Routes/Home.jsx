import { useGlobalData } from '../Components/utils/global.context'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

const {state} = useGlobalData();

  return (
    <main className={state.theme} >
      <h1>Home</h1>
      <div className='card-grid'>
        {state.dentistas.map(dentista=>(<Card key={`home${dentista.id}`} {...dentista} />))}            
      </div>
    </main>
  )
}

export default Home