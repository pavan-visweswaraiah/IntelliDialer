// components
import { BenefitsSectionData, FeaturesSectionData } from './HomePageData'
import { Link } from 'react-router-dom'
import Button from '../UI/Button'
// images
import MSSalesForce from '../assets/images/msdynamics-salesforce-logo.png'
import stayFocusedImg from '../assets/images/stay-focused.png'
import checkImage from '../assets/images/check.png'
import desktopImage from '../assets/images/software-desktop.png'
import driveHigherImage from '../assets/images/drive-higher.png'


const Home = () => {
    return(
        <>
            <section className="desktop">
               <div className="container">
                  <div className="row">
                     <div className="col-md-12 text-center">
                        <div className="heading text-center soft-heading wow  slideInUp animated" style={{visibility:'visible', animationName:'slideInUp'}}>
                           <h3>IntelliDialer</h3>
                           <h1 style={{fontSize:'40px'}}>A Sales Dialer for<br />Salesforce &amp; Microsoft Dynamics</h1>
                           <img src={MSSalesForce} style={{paddingTop:'15px'}}/>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <div className="desktop-mobile-app">
               <div className="container">
                  <div className="row">
                     <div className="col-md-12 text-center">
                        <div className="wow  desktop-img zoomIn animated" style={{visibility:'visible', animationName:'zoomIn'}}>
                        <img src={stayFocusedImg} className="img-fluid" width="1000" height="640" alt="desktop" style={{paddingTop:'30px'}} />
                        </div>
                        <div className="desk-trust">
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <section className="discover" style={{backgroundColor:' #fff'}}>
               <div className="container">
                  <div className="row">
                     <div className="col-md-6">
                        <div className="right-text wow   slideInLeft animated" style={{visibility:'visible', animationName:'slideInLeft'}}>
                           <h2 style={{fontSize:'22px'}}> <img src={checkImage} width="60" height="60" alt="check"/>&nbsp; &nbsp; Meaningful sales conversation matters</h2>
                           <p>Try the IntelliDialer app for Salesforce for FREE today and keep your sales teams focused and productive, whether working remotely or from the office. It provides complete transparency into your sales teams' performance and accelerates the sales process. The outbound calling activity is enhanced as you can engage in more live conversations with your prospects and customers. </p>
                           <div className='d-inline-block'>
                              <Button href='https://www.youtube.com/watch?reload=9&amp;v=D7NyLCtuyNE' target="_blank" value='Watch a Demo'></Button>
                           </div>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="wow  zoomIn demo-image animated" style={{visibility:'visible', animationName:'zoomIn'}}>
                           <img src={desktopImage} className="img-fluid" width="630" height="350" alt="image"/>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className="discover">
            <div className="container">
               <div className="row">
                  <div className="col-md-8">
                     <div className="left-text-desktop wow   slideInLeft animated" style={{visibility:'visible', animationName:'slideInLeft'}}>
                        <h2>Improve your Sales Outcomes with IntelliDialer</h2>
                        <p>Get a 14 day Free Trial TODAY</p>
                     </div>
                  </div>
                  <div className="col-md-4 col-xs-12 align-middle text-center">
                     <div className="getbutton wow align-middle align-self-center align-items-center   slideInRight animated">
                        <Button href="https://www.intelliverse.com/contact/new-customer-request.shtml" target="_blank" value="Request Demo"></Button>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="feature new-feature text-box-image">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <div className="heading text-center wow   slideInUp  animated">
                        <h3>Key Features of the IntelliDialer</h3>
                     </div>
                  </div>
                  <div className="row">
                     {FeaturesSectionData.map((feature)=>{
                        return(
                           <div className="col-md-4 col-sm-6">
                              <div className="feature-text text-center wow  slideInLeft  animated">
                                 <div className="img-hover1">
                                    <img src={feature.icon}/>
                                 </div>
                                 <h2 style={{fontSize: '18px'}}>{feature.title}</h2>
                                 <p>{feature.description}</p>
                                 <Link to="/features.html">Know More</Link>
                              </div>
                           </div>
                        )
                     })}
                  </div>
               </div>
            </div>
         </section>
         <section className="discover">
            <div className="container">
               <div className="row">
                  <div className="col-md-6">
                     <div className="wow   zoomIn animated">
                        <img src={driveHigherImage} width="590" height="435" className="img-fluid" alt="discover" />
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="right-text left-text wow   slideInRight animated">
                        <h2 style={{paddingTop: "8px",fontSize: "22px"}}><img src={checkImage} width="60" height="60" alt="search" /> &nbsp; &nbsp; Drive Higher Performance</h2>
                        <p> 
                           Intelliverse' Power Dialer dramatically improves sales outcomes by providing high speed, efficiency, and predictability to the sales process. By using data-driven insights and real-time analytics, IntelliDialer empowers your sales reps to sell smarter and faster.  It calculates ROI and ultimately drives higher performance for your sales teams to gain more profits. 
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="text-box-image">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <div className="heading text-center wow   slideInUp animated">
                        <h3>Key Benefits of the IntelliDialer</h3>
                     </div>
                  </div>
                  {BenefitsSectionData.map((benefit)=>{
                     return(
                        <div className="col-md-4 col-sm-4">
                        <div className="feature-text text-center wow   slideInLeft animated">
                           <div className="img-hover7"><img src={benefit.icon}/></div>
                           <h2 style={{fontSize: "18px"}}>{benefit.title}</h2>
                           <p>{benefit.description}</p>
                           <Link to={benefit.url}>Read More </Link>
                        </div>
                     </div>
                     )
                  })}
               </div>
            </div>
         </section>
         <section className="desk-question  question" style={{backgroundColor: "#f5f4f8"}}>
            <div className="container">
               <div className="row">
                  <div className="col-md-12 ">
                     <div className="heading text-center  wow  slideInUp animated">
                        <h3>Why IntelliDialer?</h3>
                     </div>
                  </div>
                  <div className="col-md-12">
                     <div className="quest-text  wow  slideInRight animated">
                        <p>
                           As companies are still scrambling to adapt to the new remote business environment we would like to help keep your business moving by offering our IntelliDialer, a Salesforce Application, for FREE for a two week test drive!<br /><br />
                           The IntelliDialer will eliminate manual data entry which will yield clean data and increase the number of opportunities to have a conversation. Sales Agents can also avoid the frustration of dialing and leaving voicemails so that they stay energized and focused on delivering the best pitch. <br /><br/>
                           At the same time Management will have complete visibility into their team's daily activities so they can ensure activity goals are consistently being met and have the predictability to resolve issues before they become revenue impacting. Let us help you grow your business! Download from the Salesforce AppExchange or reach out today and our experts will get you started in no time!
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="pricing">
            <div className="container">
               <div className="row">
                 
                  <div className="clear-fix"></div>
                  <div className="col-md-8">
                     <div className="left-text-desktop wow   slideInLeft animated">
                        <h3>Get Started</h3>
                        <p>14 day Free Trial. No credit card required.</p>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="getbutton wow   slideInRight animated" style={{textAlign:"center"}}>
                        <Button href="https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3000000B4iSWEAZ" value="Get a Free Trial" target="_blank"></Button>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         </>
    )
}

export default Home;