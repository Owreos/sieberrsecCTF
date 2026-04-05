
import first from "../assets/artwork/sieberr_first-trim.png"
import second from "../assets/artwork/sieberr_second-trim.png"
import third from "../assets/artwork/sieberr_third-trim.png"
import bigKitty from "../assets/artwork/big_kitty.PNG"
import smallKitty from "../assets/artwork/small_kitty.PNG"
type sectionProps = {
    sectionref? : React.Ref<HTMLElement>,
    // add props here

}

export default function Prizes({sectionref}:sectionProps){
    return(
        <section className="prizes section flow" ref={sectionref}>
            <h1> Prizes </h1>
            <div className="cat-container pre-u">
                <div className="prize-card">
                    <h2>Pre-Uni</h2>
                    <PrizeNode title="First place" price={"$2000"} icon={first}/>
                    <PrizeNode title="Second place" price={"$1200"} icon={second}/>
                    <PrizeNode title="Third place" price={"$800"} icon={third}/>
                    <h3>Runner Ups</h3>
                    <PrizeNode title="Fourth place" price={"$600"}/>
                    <PrizeNode title="Fifth place" price={"$500"}/>
                </div>
                <img className="prize-mascot" src={bigKitty} alt="" />
            </div>
            
            <div className="cat-container secondary">
                <div className="prize-card">
                    <h2>Secondary</h2>
                    <PrizeNode title="First place" price={"$1000"} icon={first}/>
                    <PrizeNode title="Second place" price={"$600"} icon={second}/>
                    <PrizeNode title="Third place" price={"$400"} icon={third}/>
                    <h3>Runner Ups</h3>
                    <PrizeNode title="Fourth place" price={"$300"}/>
                    <PrizeNode title="Fifth place" price={"$250"}/>
                </div>
                <img className="prize-mascot" src={smallKitty} alt="" />
            </div>

            <div className="all-finalists">
                <h2>All Finalists</h2>
                <p>Kitty Plush</p>
                <p>Sieberrsec T-shirt</p>
                <p>Tote bag</p>
            </div>
        </section>
    )
}

type PrizeNodeProps = {
  title: string;
  price: string;
  icon?: string;
};

function PrizeNode({title, price, icon}: PrizeNodeProps){
    return(
    <div className="prize-container no-flow">
        {icon && <img className="place-icon" src={icon} alt="" />}
        <div className="prize-title w500">{title}</div>
        <p>{price}</p>
    </div>)
}