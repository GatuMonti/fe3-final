import { useGlobalData } from "./utils/global.context"

const Footer = () => {
  
  const { state } = useGlobalData();
  return (
    <footer className={`footer ${state.theme}`}>  
        <div>
          <p>Powered by</p>
        <img src="/images/DH.png" alt='DH-logo' />    
        </div>         
    </footer>
  )
}

export default Footer
