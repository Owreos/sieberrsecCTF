type sectionProps = {
    sectionref? : React.Ref<HTMLElement>,
    // add props here

}

export default function Timeline({sectionref}:sectionProps){
    return(
        <section className="timeline section flow" ref={sectionref}>
            <h1>Timeline</h1>
            <div className="timeline-container">
                <TimelineNode date="1-5 June" activity="Training (Physical)" descriptor="1000 - 1600 daily (5h training, 1h lunch)"/>
                <TimelineNode date="16 June" activity="Registration Deadline" descriptor="closes at 2359"/>
                <TimelineNode date="17 June" activity="Qualifiers (Online)" descriptor="0900 - 2100, Virtual Jeopardy-style Capture the Flag Competition"/>
                <TimelineNode date="24 June" activity="Finals (physical)" descriptor="0900 - 2100, Physical Jeopardy-style Capture the Flag Competition"/>
            </div>
        </section>
    )
}

type timelineNodeProps = {
    date: string,
    activity: string,
    descriptor: string;
}
function TimelineNode({date, activity, descriptor}:timelineNodeProps) {
    return (
        <div className="timelineNode-container">
            <h3>{date}</h3>
            <div className="timeline-event">
                <p>{activity}</p>
                <div className="small">{descriptor}</div>
            </div>
        </div>
    )
}