// images
import customerProblemImage from '../assets/images/solve-customer problems.svg'
import benefitsToCustomer from '../assets/images/benefits-to-your-customers.svg'
import intelliverseLabImage from '../assets/images/intelliverse-lab.svg'

export const BenefitsData = 
    {
        MoreConversations: {
            title: 'More Conversations',
            description: 'The IntelliDialer can increase the number of meaningful conversations you can have in many ways. With all calls being logged automatically, whether making a Click-2-Dial or Power Dial, Sales Agents will spend less time entering data and more time on the phone. If you could make 20 more calls a day, have 2 more conversations and set 1 more meeting you’d have 5 extra meetings every week! In addition to having an opportunity to create speed when dialing you will also have an increased chance of having a conversation on every call using Local Presence. Local Presence provides Sales Agents with up to 32 local numbers across the country which will be automatically displayed as their Caller ID based on where they are calling. We have seen up to a 50% increase in the chance of a conversation and all returned calls are routed to that Agent’s direct line. Let us help your team dramatically increase the amount of meaningful conversations they will have with the right prospects at the right time!',
            image: customerProblemImage
        },
        IncreasedOpportunities:{
            title: 'Identify your Best Sales Process',
            description: "In addition to being able to have more meaningful conversations you will also be able to quickly identify the most effective sales process specific to your team's goals. Within 2 weeks Sales Management can identify what activities drive the best results and have the predictability to resolve issues before they become revenue impacting. Now each Sales Agent on the team will be able to maximize their outbound prospecting efforts while Sales Management is provided with all the information needed to make proactive data driven decisions! Identify things like what time of day/week provide the best connection rates so sales agents can focus on making calls when people are more likely to answer the phone. Real-time analytics and customized Salesforce Dashboard's created by Intelliverse make reviewing theses statistics quick and easy. With custom call dispositions and call recordings you can quickly learn how qualified a lead list it is or if you need to do some coaching. For real time coaching Managers have the ability to monitor live conversations which can be especially helpful for new hires that need extra coaching. Lastly with Pre Recorded Voicemails you can determine what messaging gets the most responses so you can focus on using the best sales pitch! Let us help your team identify your best sales Process!",
            image: benefitsToCustomer
        },
        BetterOutComes:{
            title: 'Complete Visibility',
            description: 'As companies are still scrambling to adapt to the new remote business environment we would like to help keep your business moving by offering our IntelliDialer, perfect for remote teams, for Free for a 2 week trial! Being able to use any phone anywhere will keep Sales Agents on the phone no matter where they are located. Since the IntelliDialer automatically logs all calls and recordings Management can have complete confidence that all data going into Salesforce is clean and accurate. With our detailed, custom and real-time analytics Management will have complete visibility into their team’s daily activities so they can ensure activity goals are consistently being met and have the predictability to resolve issues before they become revenue impacting. This will save valuable management time and ensure 100% of the team stays focused on right activities with complete visibility and immediate feedback. Let us help you grow your business with the best tool for remote sales teams!',
            image: intelliverseLabImage
        }
    }
    


const BenefitsSection = (props)=> {
    const selectedBenefit = props.Benefit;
    return(
        <>
            <div className="nav-pagination">
         <div className="container">
            <hr className="hraing" />
            <div className="row">
               <div className="col-md-12 col-sm-12">
                  <div className="sooper-text text-center">
                     <h2>Benefits</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <section id="features" style={{paddingBottom: '0px'}}>
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <div className="wow animated slideInLeft">
                     <h1 className="h2">{selectedBenefit.title}</h1>
                     <br />
                     <p>{selectedBenefit.description}</p>
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="wow animated slideInRight">
                     <img src={selectedBenefit.image} className="img-fluid" alt="image" />
                  </div>
               </div>
            </div>
        </div>
      </section>
      <section>
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <hr className="haring" />
               </div>
               <div className="clear-fix"></div>
               <div className="col-md-8">
                  <div className="left-text-desktop wow animated  slideInLeft">
                     <h3>Get Started</h3>
                     <p>14 day Free Trial. No credit card required.</p>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="getbutton wow animated  slideInRight text-center">
                     <a href="https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3000000B4iSWEAZ" target="_blank" className="btn button4">Get a Free Trial</a>
                  </div>
               </div>
            </div>
         </div>
      </section>
        </>
    )
}

export default BenefitsSection;