import { useEffect, useCallback, useRef, useState } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import Typewriter from "typewriter-effect/dist/core"

function Home() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const [hideArrow, setHideArrow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      const projetosSection = document.getElementById("projetos")
      const contatoSection = document.getElementById("contato")

      const contatoTop = contatoSection
        ? contatoSection.getBoundingClientRect().top + scrollY
        : Infinity

      if (scrollY > contatoTop - viewportHeight / 1.3) {
        setHideArrow(true)
      } else {
        setHideArrow(scrollY > 50)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const startCycle = () => {
      const title = new Typewriter(titleRef.current, {
        delay: 80,
        deleteSpeed: 50,
        loop: false,
      })
      const subtitle = new Typewriter(subtitleRef.current, {
        delay: 70,
        deleteSpeed: 40,
        loop: false,
      })

      title
        .typeString("Chromiec Dev")
        .pauseFor(500)
        .callFunction(() => {
          subtitle
            .typeString("Gustavo Chromiec - Desenvolvedor Full Stack")
            .pauseFor(2000)
            .deleteAll(40)
            .callFunction(() => {
              title
                .pauseFor(500)
                .deleteAll(50)
                .pauseFor(1000)
                .callFunction(() => {
                  titleRef.current.innerHTML = ""
                  subtitleRef.current.innerHTML = ""
                  startCycle()
                })
                .start()
            })
            .start()
        })
        .start()
    }

    startCycle()
  }, [])

  const scrollToNext = () => {
    const aboutSection = document.getElementById("sobre")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="home" id="home">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#0f172a" } },
          fpsLimit: 60,
          particles: {
            color: { value: "#00aaff" },
            links: { color: "#00aaff", distance: 150, enable: true, opacity: 0.4, width: 1 },
            move: { enable: true, speed: 1.5 },
            number: { value: 60 },
            opacity: { value: 0.6 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        }}
      />

      <div className="content">
        <h1 ref={titleRef} className="brand"></h1>
        <p ref={subtitleRef} className="subtitle"></p>

        <div
          className={`scroll-down ${hideArrow ? "hidden" : ""}`}
          onClick={scrollToNext}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  )
}

export default Home
