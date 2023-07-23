import Nav from "../nav/Nav"
import "./Header.css"

const Header = () => {
  return (
    <div className="header">

      <div className="headerRigth">
        <h3>
          <span class="mike">BOZKAYA </span>
          Çorba Salonu
        </h3>
<br />        <h3 class="mesai">Gece 2 ye kadar açıktır</h3>
      </div>
  
     <Nav/>
    </div>
  )
}

export default Header