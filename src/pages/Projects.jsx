import { useCallback, useEffect } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import Projeto1 from "../assets/projects/projeto1.png"
import Projeto2 from "../assets/projects/projeto2.png"

function Projects() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  const projetos = [
    {
      id: 1,
      titulo: "DR Direção",
      descricao:
        "Um site profissional para a oficina DR Direção onde é possível verificar informações relevantes sobre serviços, contatos e localização.",
      imagem: Projeto1,
      link: "https://drdirecao.com.br",
    },
    {
      id: 2,
      titulo: "Assembleia+",
      descricao:
        "Site completo com sistema de votação de assembleias online, desenvolvido para o condomínio Residencial SanDiego.",
      imagem: Projeto2,
      link: "https://assembleia.residencialsandiego.com.br",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.2 }
    )

    const cards = document.querySelectorAll(".project-card")
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="projects" id="projetos">
      <Particles
        id="tsparticles-projects"
        init={particlesInit}
        options={{
          background: { color: { value: "#0f172a" } },
          fpsLimit: 60,
          particles: {
            color: { value: "#00aaff" },
            links: {
              color: "#00aaff",
              distance: 140,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: { enable: true, speed: 1 },
            number: { value: 50 },
            opacity: { value: 0.6 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        }}
      />

      <div className="projects-container">
        <h2>Projetos</h2>

        <div className="projects-grid">
          {projetos.map((p) => (
            <div
              key={p.id}
              className="project-card"
              onClick={() => window.open(p.link, "_blank")}
            >
              <img src={p.imagem} alt={p.titulo} />
              <div className="project-info">
                <h3>{p.titulo}</h3>
                <p>{p.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
