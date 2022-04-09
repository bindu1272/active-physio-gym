import React from "react";
import {Link, useHistory} from "react-router-dom";
function Index() {
   const history=useHistory();
return (
<footer id="site-footer" class="site-footer footer-style1 footer-section">
	<div className="become-a-member-block">
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div className="d-flex align-items-center justify-content-between">
						<div>
						<h1>Become a Member</h1>
							<p>Active Physio Gym delivers sports injury management and exercise experts, with a physiotherapist guided approach to health and fitness.</p>
						</div>

					<Link to="/Contact" className="btn-go">Book Now &nbsp; <i class="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
					</div>
				</div>
			</div>
		</div>
	</div>
   <div class="main-footer">
      <div class="container">
         <div class="row add-clearfix">
            <div class="col-sm-6 col-md-3 clearfix">
               <div id="textbox-with-social-widget-6" class="footer-widget textbox-with-social">
                  <h4 class="widget-title"><span>ActivePhysioGym</span></h4>
                  <div class="text-with-social">
                     <p>Active Physio Gym delivers sports injury management and exercise experts, with a physiotherapist guided approach to health and fitness.</p>
                     {/*
                     <div class="social-wrapper style1"> <a href="https://www.facebook.com/physiogymphysio/" rel="nofollow" target="_blank" title="Facebook" class="share-facebook">Facebook</a><a href="http://instagram.com/physiogymphysio" rel="nofollow" target="_blank" title="Instagram" class="share-instagram">Instagram</a><a href="https://www.linkedin.com/company/physio-gym%E2%84%A2-physiotherapy/" rel="nofollow" target="_blank" title="Linkedin" class="share-linkedin">Linkedin</a>        	</div>
                     */}
                  </div>
               </div>
            </div>
            <div class="col-sm-6 col-md-3 clearfix">
               <div id="text-3" class="footer-widget widget_text">
                  <h4 class="widget-title"><span>Contact Details</span></h4>
                  <div class="textwidget">
                     <p>Located at 208 Parramatta Road, <br/>
                        Homebush, NSW, 2140
                     </p>
                     <p>Phone: 0478 496 444<br/>
                        Email: info@activephysiogym.com
                     </p>
                  </div>
               </div>
            </div>
            <div class="col-sm-6 col-md-3 clearfix">
               <div id="nav_menu-2" class="footer-widget widget_nav_menu">
                  <h4 class="widget-title"><span>Quick Links</span></h4>
                  <div class="menu-quick-links-container">
                     <ul id="menu-quick-links" class="menu">
                        {/*<li id="menu-item-1735" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1735"><a href="#"><i class="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp;  Exercise Login </a></li>*/}
                        {/*<li id="menu-item-1736" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1736"><a href="#"><i class="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp;  New Member Form</a></li>*/}
                        {/*<li id="menu-item-1732" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1732"><a href="#"><i class="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp;  Rules &amp; Etiquette</a></li>*/}
                        <li id="menu-item-1731" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1731"><a href="#"><i class="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp;  Privacy Policy</a></li>
                        <li id="menu-item-1733" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1733"><a href="#"><i class="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp;  Membership Terms</a></li>
                     </ul>
                  </div>
               </div>
            </div>
            <div class="col-sm-6 col-md-3 clearfix">
               <div id="mc4wp_form_widget-2" class="footer-widget widget_mc4wp_form_widget">
                  <h4 class="widget-title"><span>Newsletter</span></h4>
                  {/*<form id="mc4wp-form-1" class="mc4wp-form mc4wp-form-1045 " method="post" data-id="1045" data-name="Newsletter">*/}
                     <div class="mc4wp-form-fields">
                        <p>Sign up for our mailing list to get latest updates and offers.</p>
                        <div className="mt-3">
                           {/*<input type="email" name="EMAIL" placeholder="Email Address" required="" class="input-field" readOnly={true}/>*/}
                           <input type="button" value="Join" class="submit" onClick={()=> history.push('/contact')}/>
                        </div>
                     </div>
                  {/*</form>*/}
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="footer-bottom">
      <div class="container">
         <div class="row">
            <div class="copyright col-sm-12 text-center">
               <p>© Copyright Active Physio Gym</p>
            </div>
         </div>
      </div>
   </div>
</footer>
);
}
export default Index;
