import { useContext } from "react";
import GlobalContext from "../state/globalContext";


function About() {
    const user = useContext(GlobalContext).user

    return (
        <div>
            <p> Hello I'm {user.name} from cohort {user.id} </p>
            <h1>Heritage Gold: A Legacy in Every Karat</h1>
            <p>At Heritage Gold, we believe that fine jewelry is not merely worn; it is passed down. Founded on the principle that true luxury stands the test of time, our house is dedicated to creating exceptional pieces that celebrate your most significant milestones. We design for the modern individual who respects tradition, offering a destination where the brilliance of ethically sourced diamonds meets the enduring warmth of solid 18-karat gold.</p>
            <h2>The Meaning Behind Our Name</h2>
            <p>The word "Heritage" is our definitive promise. It represents our commitment to crafting jewelry with the absolute permanence of a family heirloom. In a world of fleeting trends and temporary materials, Heritage Gold returns to the authentic roots of classic jewelry making. Every brilliant-cut ring, heavy gold chain, and diamond-paved bracelet we cast is designed with the explicit intention that it will retain its elegance and structural integrity for the next generation.</p>
            <h3>Our Uncompromising Standards</h3>
            <p>We build our legacy entirely on the quality of our raw materials, ensuring that every piece retains its beauty and intrinsic value for decades.</p>
            <ul>
                <li>Solid 18-Karat Gold: We work exclusively with high-purity 18-karat gold, globally revered for its rich, warm hue and everyday durability. We strictly avoid plating, vermeil, and base metals.</li>
                <li>Conflict-Free Diamonds: Our gems are hand-selected by master gemologists for their exceptional clarity, color, and precision cut, ensuring a lifetime of uncompromising light performance.</li>
                <li>Ethical Sourcing: Absolute transparency in our supply chain is a fundamental pillar of our brand. We guarantee that every stone and ounce of precious metal is responsibly and ethically mined.</li>
            </ul>
            <h4>The Artisan's Touch</h4>
            <p>True craftsmanship cannot be mass-produced. Heritage Gold partners exclusively with master bench jewelers who bring decades of specialized experience to their craft. From the microscopic precision required to set a flawless double-halo engagement ring to the meticulous hand-polishing of a heavy artisan cuff, our jewelers merge ancient techniques with modern precision engineering. The result is a curated collection of timeless works of art, engineered to be worn, loved, and remembered.</p>



        </div>
    )
}
export default About;