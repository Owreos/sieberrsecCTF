type sectionProps = {
    sectionref? : React.Ref<HTMLElement>,
    // add props here

}

export default function Join({sectionref}:sectionProps){
    return(
        <section className="join" ref={sectionref}>
            <div className="join-content flow">
                <h1>Join Us</h1>
                <p> Join the official Sieberrsec CTF server for updates or sign up below!</p>
                <div className="links-container">
                    <div className="link-btn discord"><p></p></div>
                    <div className="link-btn signup"></div>
                </div>
            </div>
            <div className="join-bg"></div>
        </section>
    )
}