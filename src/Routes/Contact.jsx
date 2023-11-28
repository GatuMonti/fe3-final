import Form from '../Components/Form'
import { useGlobalData } from '../Components/utils/global.context'



const Contact = () => {
  const { state } = useGlobalData();
  return (
    <div className={`contacto ${state.theme}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact