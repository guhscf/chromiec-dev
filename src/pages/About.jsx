import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import FotoGustavo from "../assets/foto_gustavo.jpg"

function About() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  return (
    <section className="about" id="sobre">
      <Particles
        id="tsparticles-about"
        init={particlesInit}
        options={{
          background: { color: { value: "#1a273b" } },
          fpsLimit: 60,
          particles: {
            color: { value: "#00aaff" },
            links: {
              color: "#00aaff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: { enable: true, speed: 1 },
            number: { value: 60 },
            opacity: { value: 0.6 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        }}
      />

      <div className="about-content">
        <div className="about-text">
          <h2>Sobre Mim</h2>

          <p>
            Olá! 👋 Sou <span className="highlight">Gustavo Chromiec</span>, um desenvolvedor{" "}
            <span className="highlight">Full Stack</span> apaixonado por tecnologia, inovação e aprendizado constante.
          </p>

          <p>
            Trabalho com foco em criar aplicações completas e bem estruturadas, unindo{" "}
            <span className="highlight">frontend</span> e <span className="highlight">backend</span> para entregar
            soluções eficientes e escaláveis.
          </p>

          <p>
            Utilizo tecnologias modernas como <span className="highlight">React</span>,{" "}
            <span className="highlight">Vite</span>, <span className="highlight">Tailwind CSS</span> e{" "}
            <span className="highlight">Supabase</span>, buscando sempre otimizar performance e experiência do usuário.
          </p>

          <p className="final-line">
            Meu objetivo é continuar evoluindo como desenvolvedor full stack, criando projetos que unam{" "}
            <span className="highlight">tecnologia</span>, <span className="highlight">propósito</span> e{" "}
            <span className="highlight">criatividade</span>.
          </p>
        </div>

        <div className="about-image">
          <img src={FotoGustavo} alt="Foto de Gustavo Chromiec" />
        </div>
      </div>
    </section>
  )
}

export default About
