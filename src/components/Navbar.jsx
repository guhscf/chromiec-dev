import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToSection = (id) => {
    const goToSection = () => {
      const section = document.getElementById(id)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
      setMenuOpen(false)
    }
    if (location.pathname !== "/") {
      navigate("/")
      setTimeout(goToSection, 400)
    } else {
      goToSection()
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => scrollToSection("home")}>
        Chromiec Dev
      </div>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <button onClick={() => scrollToSection("home")}>Início</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("sobre")}>Sobre</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("projetos")}>Projetos</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("contato")}>Contato</button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
