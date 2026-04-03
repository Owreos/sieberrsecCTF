type sectionProps = {
    sectionref? : React.Ref<HTMLElement>,
    // add props here

}

export default function Timeline({sectionref}:sectionProps){
    return(
        <section className="timeline section flow" ref={sectionref}>
            <h1>Timeline</h1>
            <div className="timeline-container">
                <TimelineNode date="15 june" activity="Eating chicken nuggets" descriptor="description/venue/time"/>
                <TimelineNode date="15 Nov" activity="Eating chicken nuggets" descriptor="description/venue/time"/>
                <TimelineNode date="15 june" activity="Eating chicken nuggets" descriptor="description/venue/time"/>
                <TimelineNode date="15 june" activity="Eating chicken nuggets" descriptor="description/venue/time"/>
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