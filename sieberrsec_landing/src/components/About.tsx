
type sectionProps = {
    sectionref? : React.Ref<HTMLElement>,
    // add props here
}

export default function About({sectionref}:sectionProps){
    return(
        <section className="section about" ref={sectionref}>
            <h1>What is SCTF?</h1>
            <div className="flow">
                <p>Lorem ipsum elit esse officia ipsum anim cillum mollit officia exercitation cupidatat esse quis mollit reprehenderit veniam esse dolor veniam ipsum laboris magna occaecat ullamco deserunt cillum cillum in non eiusmod quis elit cupidatat dolore laboris ad cillum dolor reprehenderit mollit minim duis fugiat deserunt veniam magna fugiat proident quis.</p>
            </div>
        </section>
    )
}