
type sectionProps = {
    sectionref? : React.Ref<HTMLElement>,
    // add props here
}

export default function About({sectionref}:sectionProps){
    return(
        <section className="section about" ref={sectionref}>
            <h1>What is SCTF?</h1>
            <div className="flow">
                <p>Now in its seventh edition, Sieberrsec CTF (SCTF) is a cybersecurity competition for secondary school and pre-university students. With a focus on making technical cybersecurity skills more accessible to our youths, SCTF strives to create a high-quality competition, alongside a conducive learning environment through the implementation of training resources and support for participants besides the competition itself.</p>
            </div>
        </section>
    )
}