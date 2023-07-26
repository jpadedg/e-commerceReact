import "./index.scss"
import cartIcon from "../../assets/cartIcon.png"


const HeaderMenu = () => {
  return (
    <header className="header-menu">
        <img src="../../../public/logoDnc.png" alt="logo" className="header-menu__logo" />
        <ul>
            <li>Home</li>
            <li>Novidades</li>
            <li>Feminino</li>
            <li>Masculino</li>
            <li>Atendimento</li>
        </ul>
        <div className="header-menu__cart-shop">
            <h1>Meu Carrinho</h1>
            <img src={cartIcon} alt="cart-icone" />
        </div>   
    </header>
  )
}

export default HeaderMenu
