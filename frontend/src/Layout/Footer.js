import React from 'react'
import '/.Footer.css'

const Footer = () => {
  return (
      <div className="footer">
          <div className="sb__footer section__padding">
              <div className="sb__footer-links">
                  <div className="sb__footer-links-div">
                      <h4>For Business</h4>
                      <a href="/Agent wangui's Contact">
                          <p>Contacts</p> 
                      </a>
                      <a href="/Agent Wambua's contact">
                          <p>Get Referrals</p> 
                      </a>
                      <a href="Agent Madara's contact">
                          <p>Blog</p>   
                      </a>
                  </div>
                  <div className="sb__footer-links-div">
                      <h4>Resources</h4>
                      <a href="/resource">
                          <p>Resource center</p>
                      </a>
                      <a href="/resource">
                          <p>Testimonials</p>
                      </a>
                      <a href="/resource">
                          <p>Community Impact</p>
                      </a>
                  </div>
                  <div className="sb__footer-links-div">
                      <h4>Partners</h4>
                      <a href="/www.swingtech.com">
                          <p>Swing Tech</p>
                      </a>
                      <a href="/www.redfin.com">
                          <p>Redfin Real Estate </p>
                      </a>
                      <a href="/www.lloydmasika.com">
                          <p>Lloyd Masika Real Estate </p>
                      </a>
                  </div>
                  <div className="sb__footer-links-div">
                      <h4>DOLLAR $ HOMES</h4>
                      <a href="/about">
                          <p>About</p>
                      </a>
                      <a href="/www.googlemaps.com">
                          <p>Countries</p>
                      </a>
                      <a href="www.careerist.com">
                          <p>Career</p>
                      </a>
                      <a href="/www.googlecontacts.com">
                          <p>Contact</p>
                      </a>
                  </div>
                  <div className="footer">
                      <h4>Social Media </h4>
                      <div className="socialmedia">
                          <p><img src={fb} alt=""/></p>
                          <p><img src={twitter} alt=""/></p>
                          <p><img src={insta} alt=""/></p>
                          <p><img src={whatsapp} alt=""/></p>
                      </div>
                  </div>
              </div>   
          </div>

          <div className="sb__footer-below">
              <div className="sb__footer-copyright">
                  <p>&copy;{new Date().getFullYear()} Dollar Homes. All rights reserved.</p> 
              </div>
              <div className="sb__footer-below-links">
                  <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                  <a href="/privacy"><div><p>Privacy</p></div></a>
                  <a href="/security"><div><p>Security</p></div></a>
                  <a href="/cookie"><div><p>Cookies Declaration</p></div></a>
              </div>
          </div>
      </div>
  );
}

export default Footer