import Countdown from "react-countdown"
import { useScroll, animated } from "@react-spring/web";
import logo from "../assets/artwork/sieberr_logo.PNG"
type sectionProps = {
    sectionref? : React.Ref<HTMLElement>,
    // add props here

}
    
export default function Hero({sectionref}:sectionProps){
    const { scrollY } = useScroll();

    type rendererTypes = {
        days: number,
        hours: number,
        minutes: number,
        seconds: number,
        completed: boolean,
    };
    
    type TimeUnitProps = {
        value: number;
        label: string;
    };

    const renderer = ({ days, hours, minutes, seconds, completed }: rendererTypes) => {
        if (completed) {
            return <span className="display-2">🎉 The CTF has started! 🎉</span>
        }
        
        else {
            return(
            <div className="countdownContainer">
                <TimeUnit value={days} label="Days" />
                <TimeUnit value={hours} label="Hours" />
                <TimeUnit value={minutes} label="Minutes" />
                <TimeUnit value={seconds} label="Seconds" />
            </div>
            )   
        }
    }

    const TimeUnit = ({ value, label }: TimeUnitProps) => {
        const display = String(value).padStart(2, "0");

        return (
            <div className="timeUnit">
                <span className="timeValue">{display}</span>
                <span className="timeLabel">{label}</span>
            </div>
        );
    };

    return(
        <section className="hero" ref={sectionref}>
            <div className="display-0">
                <span className="sieberr-logo"> <img src={logo}/></span> Sieberrsec CTF
            </div>
            <Countdown date={new Date("2026-05-01T12:00:00")} renderer={renderer}/>
            <div className="background-container">
                <animated.div className="layer l1" style={{ transform: scrollY.to(y => `translateY(${y * 0.05}px)`) }} />
                <animated.div className="layer l2" style={{ transform: scrollY.to(y => `translateY(${y * 0.1}px)`) }} />
                <animated.div className="layer l3" style={{ transform: scrollY.to(y => `translateY(${y * 0.2}px)`) }} />
                <animated.div className="layer l4" style={{ transform: scrollY.to(y => `translateY(${-y * 0.2}px)`) }} />
                <animated.div className="l5" style={{ transform: scrollY.to(y => `translateY(${-y * 0.2}px)`) }} />
            </div>
        </section>
    );
}