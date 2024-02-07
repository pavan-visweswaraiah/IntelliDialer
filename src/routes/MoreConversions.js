import { BenefitsData } from "./BenefitsData";
import BenefitsSection from "./BenefitsData";

const MoreConversations = () => {
    console.log(BenefitsData.MoreConversations)
    return(
        <BenefitsSection Benefit={BenefitsData.MoreConversations}/>
    )
}

export default MoreConversations;