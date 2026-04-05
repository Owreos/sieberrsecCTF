import Hero from "./components/Hero"
import About from "./components/About"
import Prizes from "./components/Prizes"
import Timeline from "./components/Timeline"
import Sponsors from "./components/Sponsors"
import Join from "./components/Join"
import logo from "./assets/artwork/sieberr_logo.PNG"
import React from "react"
import { useRef } from "react"
import { animated, useScroll } from "@react-spring/web"
export default function App(){
  const HeroRef = useRef<HTMLDivElement>(null)
  const AboutRef = useRef<HTMLDivElement>(null)
  const PrizeRef = useRef<HTMLDivElement>(null)
  const TimelineRef = useRef<HTMLDivElement>(null)
  const SponsorRef = useRef<HTMLDivElement>(null)
  const ContactRef = useRef<HTMLDivElement>(null)
  
  const scrollTo = (section: string) => {
    console.log("scrolling to" + section)
    const map: Record<string, React.RefObject<HTMLDivElement>> = {
      "hero": HeroRef,
      "about": AboutRef,
      "prizes": PrizeRef,
      "timeline": TimelineRef,
      "sponsors": SponsorRef,
      "contact": ContactRef
    }

    map[section]?.current?.scrollIntoView({
      behavior: "smooth"
    })
  }

  const { scrollY } = useScroll();
  const bgOpacity = scrollY.to([0, 300], [0, 0.9]);
  const bg = bgOpacity.to(
  (v) =>
    `linear-gradient(
      to bottom,
      rgba(14,28,51,${v}),
      rgba(14,28,51,0)
    )`
  );
  return(
    <>
      <animated.div
        className="top-bar"
        style={{backgroundImage: bg}}>
        <NavBar scrollTo={scrollTo}/>
        <div className="signup-btn">
          <a href="Somejoin" target="_blank">Sign up</a>
        </div>
      </animated.div>
      <Hero sectionref={HeroRef}/>
      <About sectionref={AboutRef}/>
      {/* <div className="content-transition"></div> */}
      <Prizes sectionref={PrizeRef}/>
      <Timeline sectionref={TimelineRef}/>
      <Sponsors sectionref={SponsorRef}/>
      <Join sectionref={ContactRef}/>
      <footer></footer>
    </>
  )
}

type navProps = {
  scrollTo: (x: string) => void
}

function NavBar({scrollTo}: navProps){
  return (
  <nav>
    <ol>
      <li onClick={() => scrollTo("hero")}><img src={logo} alt="" /></li>
      <li onClick={() => scrollTo("about")}>About</li>
      <li onClick={() => scrollTo("prizes")}>Prizes</li>
      <li onClick={() => scrollTo("timeline")}>Timeline</li>
      <li onClick={() => scrollTo("sponsors")}>Sponsors</li>
      <li onClick={() => scrollTo("contact")}>contact</li>
    </ol>
  </nav>
  )
}

