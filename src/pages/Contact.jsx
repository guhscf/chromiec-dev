import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { Mail, Linkedin, Github, Phone } from "lucide-react"

function Contact() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  const contatos = [
    {
      id: 1,
      nome: "E-mail",
      icone: <Mail size={26} />,
      link: "mailto:gustavo.freitas1911@gmail.com",
    },
    {
      id: 2,
      nome: "LinkedIn",
      icone: <Linkedin size={26} />,
      link: "https://www.linkedin.com/in/gustavo-chromiec-b632661a2/",
    },
    {
      id: 3,
      nome: "GitHub",
      icone: <Github size={26} />,
      link: "https://github.com/guhscf/",
    },
    {
      id: 4,
      nome: "WhatsApp",
      icone: <Phone size={26} />,
      link: "https://wa.me/5541987904186", 
    },
  ]

  return (
    <section className="contact" id="contato">
      <Particles
        id="tsparticles-contact"
        init={particlesInit}
        options={{
          background: { color: { value: "#1a273b" } },
          fpsLimit: 60,
          particles: {
            color: { value: "#00aaff" },
            links: { color: "#00aaff", distance: 120, enable: true, opacity: 0.3, width: 1 },
            move: { enable: true, speed: 1 },
            number: { value: 40 },
            opacity: { value: 0.6 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />

      <div className="contact-container">
        <h2>Entre em Contato</h2>
        <p>
          Ficarei feliz em conversar sobre oportunidades, colaborações e novos projetos!  
          Escolha um canal abaixo para falar comigo 👇
        </p>

        <div className="contact-grid">
          {contatos.map((c) => (
            <div
              key={c.id}
              className="contact-card"
              onClick={() => window.open(c.link, "_blank")}
            >
              <div className="icon">{c.icone}</div>
              <span>{c.nome}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
