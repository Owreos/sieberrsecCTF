import csit from "../assets/csit.webp"
import placeholder from "../assets/Sponsor-1.webp"
import greycat from "../assets/greyhats-dark.png"
import dsta from "../assets/DSTA-Logo.png"
import jane from "../assets/jane.webp"
type sectionProps = {
    sectionref? : React.Ref<HTMLElement>,
    // add props here

}

export default function Sponsors({sectionref}:sectionProps){
    return(
        <section className="sponsors section flow" ref={sectionref}>
            <h1>Sponsors</h1>
            <h2>Exclusive Sponsor</h2>
            <div className="csit-segment">
                <img src={csit} alt="" className="csit-logo" style={{height: "150px"}}/>
                {/* <p> Lorem ipsum elit esse officia ipsum anim cillum mollit officia exercitation cupidatat esse quis mollit </p> */}
            </div>
            <h2>Silver Sponsors</h2>
            <div className="org-list">            
                <img src={jane} alt="" className="org-logo" />
                <img src={dsta} alt="" className="org-logo" />
            </div>
            {/* <h2>Co-organiser</h2> */}
            {/* <div className="org-list">
                <a href="https://slf.nusgreyhats.org/" target="_blank"><img src={greycat} alt="" className="org-logo" style={{height: "150px"}}/></a>
            </div> */}
        </section>
    )
}