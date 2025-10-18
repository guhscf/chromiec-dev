import { Github, Linkedin, Mail, Phone } from "lucide-react"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Chromiec Dev — Todos os direitos reservados.</p>
        <p>
          Desenvolvido por{" "}
          <span className="highlight">Gustavo Chromiec</span> usando React + Vite.
        </p>

        <div className="footer-icons">
          <a
            href="mailto:gustavo.freitas1911@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="E-mail"
          >
            <Mail size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/gustavo-chromiec-b632661a2/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://github.com/guhscf/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://wa.me/5541987904186"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <Phone size={22} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
