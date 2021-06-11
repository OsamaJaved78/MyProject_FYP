import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Rough from './rough';


function Rough2() {
	
    return(
<motion.div 
    	initial={{opacity: 0}}
		animate={{opacity:1}}
		exit={{opacity: 0 }}
		id="fh5co-wrapper">
		<div id="fh5co-page">

        <div className="slide-section">
		<Rough/>
        </div>
		
		<div id="fh5co-tours" className="fh5co-section-gray" >
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
						<h3>Hot Tours</h3>
						<p>Far far away, behind the word mountains, far from the countries Pakistan, there live the blind texts.</p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-sm-6 fh5co-tours animate-box" data-animate-effect="fadeIn">
						<div href="#">
							<img src="/assets/images/offer2pic.png" alt="Offer 1" className="img-responsive" width="100%" />
							<div className="desc">
								<span></span>
								<h3>New User</h3>
								<span className="price">2500</span>
								<a className="btn btn-primary btn-outline" href="#">Book Now <i className="icon-arrow-right22"></i></a>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-sm-6 fh5co-tours animate-box" data-animate-effect="fadeIn">
						<div href="#"><img src="/assets/images/offer3.jpg" alt="Offer 1" className="img-responsive" width="100%" />
							<div className="desc">
								<span></span>
								<h3>JazzCash Offer</h3>
								<span>Use Jazzcash to avail 10% discount</span>
								<span className="price">2000</span>
								<a className="btn btn-primary btn-outline" href="#">Book Now <i className="icon-arrow-right22"></i></a>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-sm-6 fh5co-tours animate-box" data-animate-effect="fadeIn">
						<div href="#"><img src="/assets/images/offer5.png" alt="Offer 3" className="img-responsive"  width="100%" />
							<div className="desc">
								<span></span>
								<h3>Easypaisa</h3>
								<span>Use EasyPaisa to get 500 discount</span>
								<span className="price">1,000</span>
								<a className="btn btn-primary btn-outline" href="#">Book Now <i className="icon-arrow-right22"></i></a>
							</div>
						</div>
					</div>
					<div className="col-md-12 text-center animate-box">
						<p><a className="btn btn-primary btn-outline btn-lg" href="#">See All Offers <i className="icon-arrow-right22"></i></a></p>
					</div>
				</div>
			</div>
		</div>

		<div id="fh5co-features">
			<div className="container">
				<div className="row">
					<div className="col-md-4 animate-box">

						<div className="feature-left">
							<span className="icon">
								<i className="icon-hotairballoon"></i>
							</span>
							<div className="feature-copy">
								<h3>Family Travel</h3>
								<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
								<p><a href="#">Learn More</a></p>
							</div>
						</div>

					</div>

					<div className="col-md-4 animate-box">
						<div className="feature-left">
							<span className="icon">
								<i className="icon-search"></i>
							</span>
							<div className="feature-copy">
								<h3>Travel Plans</h3>
								<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
								<p><a href="#">Learn More</a></p>
							</div>
						</div>
					</div>
					<div className="col-md-4 animate-box">
						<div className="feature-left">
							<span className="icon">
								<i className="icon-wallet"></i>
							</span>
							<div className="feature-copy">
								<h3>Honeymoon</h3>
								<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
								<p><a href="#">Learn More</a></p>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 animate-box">

						<div className="feature-left">
							<span className="icon">
								<i className="icon-wine"></i>
							</span>
							<div className="feature-copy">
								<h3>Business Travel</h3>
								<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
								<p><a href="#">Learn More</a></p>
							</div>
						</div>

					</div>

					<div className="col-md-4 animate-box">
						<div className="feature-left">
							<span className="icon">
								<i className="icon-genius"></i>
							</span>
							<div className="feature-copy">
								<h3>Solo Travel</h3>
								<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
								<p><a href="#">Learn More</a></p>
							</div>
						</div>

					</div>
					<div className="col-md-4 animate-box">
						<div className="feature-left">
							<span className="icon">
								<i className="icon-chat"></i>
							</span>
							<div className="feature-copy">
								<h3>Explorer</h3>
								<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
								<p><a href="#">Learn More</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		
		<div id="fh5co-destination">
			<div className="tour-fluid">
				<div className="row">
					<div className="col-md-12">
						<ul id="fh5co-destination-list" className="animate-box">
							<li className="one-forth text-center" >
								<a href="#">
									<div className="case-studies-summary">
										<h2>Boyun Village</h2>
									</div>
								</a>
							</li>
							<li className="one-forth text-center" >
								<a href="#">
									<div className="case-studies-summary">
										<h2>LAHORE</h2>
									</div>
								</a>
							</li>
							<li className="one-forth text-center" >
								<a href="#">
									<div className="case-studies-summary">
										<h2>RAWALPINDI</h2>
									</div>
								</a>
							</li>
							<li className="one-forth text-center" >
								<a href="#">
									<div className="case-studies-summary">
										<h2>FAIRY MEADOWS</h2>
									</div>
								</a>
							</li>

							<li className="one-forth text-center" >
								<a href="#">
									<div className="case-studies-summary">
										<h2>NARAN KAGHAN</h2>
									</div>
								</a>
							</li>
							<li className="one-half text-center">
								<div className="title-bg">
									<div className="case-studies-summary">
										<h2>Most Popular Destinations</h2>
										<span><a href="#">View All Destinations</a></span>
									</div>
								</div>
							</li>
							<li className="one-forth text-center" >
								<a href="#">
									<div className="case-studies-summary">
										<h2>HUNZA</h2>
									</div>
								</a>
							</li>
							<li className="one-forth text-center" >
								<a href="#">
									<div className="case-studies-summary">
										<h2>SWAT VALLEY</h2>
									</div>
								</a>
							</li>
							<li className="one-forth text-center" >
								<a href="#">
									<div className="case-studies-summary">
										<h2>ATTABAD LAKE</h2>
									</div>
								</a>
							</li>
							<li className="one-forth text-center" >
								<a href="#">
									<div className="case-studies-summary">
										<h2>PHANDER LAKE</h2>
									</div>
								</a>
							</li>
							<li className="one-forth text-center" >
								<a href="#">
									<div className="case-studies-summary">
										<h2> KHUNJERAB PASS</h2>
									</div>
								</a>
							</li>
						</ul>		
					</div>
				</div>
			</div>
		</div>

		<div id="fh5co-blog-section" className="fh5co-section-gray">
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
						<h3>Recent From Blog</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores, perspiciatis accusamus asperiores sint consequuntur debitis.</p>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row row-bottom-padded-md">
					<div className="col-lg-4 col-md-4 col-sm-6">
						<div className="fh5co-blog animate-box">
							<a href="#"><img className="img-responsive" src="images/place-1.jpg" alt="" /></a>
							<div className="blog-text">
								<div className="prod-title">
									<h3><a href="#">30% Discount to Travel All Around the World</a></h3>
									<span className="posted_by">Sep. 15th</span>
									<span className="comment"><a href="">21<i className="icon-bubble2"></i></a></span>
									<p>Far far away, behind the word mountains, far from the countries Pakistan, there live the blind texts.</p>
									<p><a href="#">Learn More...</a></p>
								</div>
							</div> 
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-6">
						<div className="fh5co-blog animate-box">
							<a href="#"><img className="img-responsive" src="images/place-2.jpg" alt="" /></a>
							<div className="blog-text">
								<div className="prod-title">
									<h3><a href="#">Planning for Vacation</a></h3>
									<span className="posted_by">Sep. 15th</span>
									<span className="comment"><a href="">21<i className="icon-bubble2"></i></a></span>
									<p>Far far away, behind the word mountains, far from the countries Pakistan, there live the blind texts.</p>
									<p><a href="#">Learn More...</a></p>
								</div>
							</div> 
						</div>
					</div>
					<div className="clearfix visible-sm-block"></div>
					<div className="col-lg-4 col-md-4 col-sm-6">
						<div className="fh5co-blog animate-box">
							<a href="#"><img className="img-responsive" src="images/place-3.jpg" alt="" /></a>
							<div className="blog-text">
								<div className="prod-title">
									<h3><a href="#">Visit Tokyo Japan</a></h3>
									<span className="posted_by">Sep. 15th</span>
									<span className="comment"><a href="">21<i className="icon-bubble2"></i></a></span>
									<p>Far far away, behind the word mountains, far from the countries Pakistan, there live the blind texts.</p>
									<p><a href="#">Learn More...</a></p>
								</div>
							</div> 
						</div>
					</div>
					<div className="clearfix visible-md-block"></div>
				</div>

				<div className="col-md-12 text-center animate-box">
					<p><a className="btn btn-primary btn-outline btn-lg" href="#">See All Post <i className="icon-arrow-right22"></i></a></p>
				</div>

			</div>
		</div>
		{/* <!-- fh5co-blog-section --> */}
		<div id="fh5co-testimonial" >
		<div className="container">
			<div className="row animate-box">
				<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
					<h2>Happy Clients</h2>
				</div>
			</div>
			<div className="row">
				<div className="col-md-4">
					<div className="box-testimony animate-box">
						<blockquote>
							<span className="quote"><span><i className="icon-quotes-right"></i></span></span>
							<p>&ldquo;Far far away, behind the word mountains, far from the countries Pakistan, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
						</blockquote>
						<p className="author">Kashi Tiktoker <a href="#" target="_blank">Span</a> <span className="subtext">Creative Tiktoker</span></p>
					</div>
					
				</div>
				<div className="col-md-4">
					<div className="box-testimony animate-box">
						<blockquote>
							<span className="quote"><span><i className="icon-quotes-right"></i></span></span>
							<p>&ldquo;Far far away, behind the word mountains, far from the countries Pakistan, there live the blind texts.&rdquo;</p>
						</blockquote>
						<p className="author">Osama Javed <a href="#" target="_blank">Span</a> <span className="subtext">Creative Leader</span></p>
					</div>
					
					
				</div>
				<div className="col-md-4">
					<div className="box-testimony animate-box">
						<blockquote>
							<span className="quote"><span><i className="icon-quotes-right"></i></span></span>
							<p>&ldquo;Far far away, behind the word mountains, far from the countries Pakistan, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
						</blockquote>
						<p className="author">Bilal Memon <a href="#">Span</a> <span className="subtext">Accountant</span></p>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	

	</div>
	{/* <!-- END fh5co-page --> */}

	</motion.div>

    );

    
}

export default Rough2;