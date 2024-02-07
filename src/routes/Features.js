import { FeaturesData } from "./FeaturesData";
import Button from "../UI/Button";

const Features = ()=> {
    return(
        <>
            <div className="nav-pagination">
                <div className="container">
                    <hr className="hraing" />
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="sooper-text text-center">
                                <h1>Features</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="discover">
                <div className="container">
                    <div className="row">
                    <div className="clearfix"></div>
                    {FeaturesData.map((feature) => {
                        return(
                            <>
                                <div className="col-md-6 col-sm-6">
                                    <div className="right-text  wow animated slideInLeft">
                                        <h2>{feature.title}</h2>
                                        <ul className="features-list">
                                            {
                                                feature.description.map((desc) => {
                                                    return(
                                                        <li>{desc}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <div className=" wow animated zoomIn text-center">
                                        <img src={feature.image}  className="img-fluid" alt="desktop" />
                                    </div>
                                </div>
                                <hr className="haring" />
                            </>

                        )
                    })}
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
                            <Button href="https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3000000B4iSWEAZ" target="_blank" value="Get a Free Trial"></Button>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features;