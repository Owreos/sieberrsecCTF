import discord from "../assets/discord-icon-svgrepo-com.svg"
import instagram from "../assets/insta-icon.svg"
type sectionProps = {
    sectionref? : React.Ref<HTMLElement>,
    // add props here

}

export default function Join({sectionref}:sectionProps){
    return(
        <section className="join section" ref={sectionref}>
            <div className="join-content flow">
                <h1>Contact</h1>
                {/* <div className="signup-btn"><a href="somewlink"> Join Us</a> </div> */}
                {/* <h2>Contact</h2> */}
                <p>Subscribe to our official channels</p>
                <div className="links-container">
                    <a href="https://discord.gg/fdf7JnXpxy" target="_blank"><div className="link-btn discord"><span><img src={discord}></img></span><p>Discord</p></div></a>
                    <a href="" target="_blank"><div className="link-btn insta"><span><img src={instagram}></img></span><p>Instagram</p></div></a>
                </div>

                <div className="body-3 mailing">Questions? Reach us at <a href="mailto:sieberrsecctf@gmail.com"> sieberrsecctf@gmail.com </a></div>
            </div>
            <div className="join-bg"></div>
        </section>
    )
}