import csit from "../assets/csit.webp"
import placeholder from "../assets/Sponsor-1.webp"
import greycat from "../assets/greyhats-dark.png"
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
                <p> Lorem ipsum elit esse officia ipsum anim cillum mollit officia exercitation cupidatat esse quis mollit </p>
            </div>
            <h2>Silver Sponsors</h2>
            <div className="org-list">            
                <img src={placeholder} alt="" className="org-logo" style={{height: "150px"}}/>
                <img src={placeholder} alt="" className="org-logo" style={{height: "150px"}}/>
                <img src={placeholder} alt="" className="org-logo" style={{height: "150px"}}/>
            </div>
            <h2>Co-organiser</h2>
            <div className="org-list">
                <img src={greycat} alt="" className="org-logo" style={{height: "150px"}}/>
            </div>
        </section>
    )
}