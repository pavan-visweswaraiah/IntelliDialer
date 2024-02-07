// images
import Logo from '../assets/images/Intelliverse-logo.png'
import bgImage from '../assets/images/footer-image-gray.png'
const Footer = ()=> {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return(
        <footer className="footer-bottom" style={{background: `url(${bgImage})`}}>
    <div className="container">
       <div className="row">
          <div className="col-md-6 col-sm-6 col-12">
             <div className="footer-logo-text wow   slideInLeft animated">
                <img src={Logo} alt="footer-logo" width= "200px" />
             </div>
          </div>
          <div className="col-md-6 col-sm-6 col-12 ">
             <div className="main-3-section text-end wow    slideInRight animated">
                <ul>
                   <li className="linkedin-icon"><a href="https://www.linkedin.com/company/intelliverse" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                          <li className="twitter-icon"><a href="https://twitter.com/Intelliverse" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                          <li className="facebook-icon"><a href="https://www.facebook.com/intelliverse/" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                   <li className="instagram-icon"><a href="https://www.instagram.com/intelliverse/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                   <li className="youtube-icon"><a href="https://www.youtube.com/user/Intelliverse" target="_blank"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
                </ul>
             </div>
          </div>
          <div className="clear-fix"></div>
          <div className="col-md-12 col-sm-12">
             <hr className="hraing1" />
             <div className="footer-bottom1 wow   slideInUp animated">
                <p>Services Provided by <a href="https://www.intelliverse.com" target="_blank">Intelliverse</a> © {currentYear}. <a href="https://www.intelliverse.com/legal.shtml" target="_blank"> Legal</a> | <a href="https://www.intelliverse.com/privacy.shtml" target="_blank">Privacy</a></p>
             </div>
          </div>
       </div>
    </div>
 </footer>
    )
}

export default Footer;