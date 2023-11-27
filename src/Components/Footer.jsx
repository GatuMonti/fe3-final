import { useGlobalData } from "./utils/global.context"

const Footer = () => {
  const {state} = useGlobalData();
  return (
    <footer className={state.theme}>
        <p>Powered by</p>
        <img src="/public/images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
