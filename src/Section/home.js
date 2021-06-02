import React from 'react';

function Home() {
    return(
<div id="fh5co-wrapper">
		<div id="fh5co-page">

		<header id="fh5co-header-section" className="sticky-banner">
			<div className="container">
				<div className="nav-header">
					<a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle dark"><i></i></a>
					<h1 id="fh5co-logo"><a href="index.html"><i className="icon-airplane"></i>Bus karaao</a></h1>
					{/* <!-- START #fh5co-menu-wrap --> */}
					<nav id="fh5co-menu-wrap" role="navigation">
						<ul className="sf-menu" id="fh5co-primary-menu">
							<li className="active"><a href="index.html">Home</a></li>
							<li>
								<a href="vacation.html" className="fh5co-sub-ddown">Vacations</a>
								<ul className="fh5co-sub-menu">
									<li><a href="#">Karachi</a></li>
									<li><a href="#">Islamabad</a></li>
									<li><a href="#">Lahore</a></li>
									<li><a href="#">Naran &amp; Kaghan</a></li>
									<li><a href="#">Multan</a></li>
								</ul>
							</li>
							<li><a href="flight.html">Bus</a></li>
							<li><a href="hotel.html">Hotel</a></li>
							<li><a href="car.html">Blog</a></li>
							<li><a href="blog.html">About Us</a></li>
							<li><a href="contact.html">Contact</a></li>
						</ul>
					</nav>
				</div>
			</div>
		</header>

		{/* <!-- end:header-top --> */}
	
		<div className="fh5co-hero">
			<div className="fh5co-overlay"></div>
			<div className="fh5co-cover" data-stellar-background-ratio="0.5" >
				<div className="desc">
					<div className="container">
						<div className="row">
							<div className="col-sm-5 col-md-5">
								<div className="tabulation animate-box">

								  {/* <!-- Nav tabs --> */}
								   <ul className="nav nav-tabs" role="tablist">
								      <li role="presentation" className="active">
								      	<a href="#" aria-controls="flights" role="tab" data-toggle="tab">Bus</a>
								      </li>
								      
								   </ul>

								   {/* <!-- Tab panes --> */}
									<div className="tab-content">
									 <div role="tabpanel" className="tab-pane active" id="flights">
										<div className="row">
											<div className="col-xxs-12 col-xs-6 mt">
												<div className="input-field">
													<label for="from">From:</label>
													<input type="text" className="form-control" id="from-place" placeholder="Karachi"/>
												</div>
											</div>
											<div className="col-xxs-12 col-xs-6 mt">
												<div className="input-field">
													<label for="from">To:</label>
													<input type="text" className="form-control" id="to-place" placeholder="Islamabad"/>
												</div>
											</div>
											<div className="col-xxs-12 col-xs-6 mt alternate">
												<div className="input-field">
													<label for="date-start">Check In:</label>
													<input type="date" className="form-control" id="date-start" placeholder="mm/dd/yyyy"/>
												</div>
											</div>
											<div className="col-xxs-12 col-xs-6 mt alternate">
												<div className="input-field">
													<label for="date-end">Check Out:</label>
													<input type="date" className="form-control" id="date-end" placeholder="mm/dd/yyyy"/>
												</div>
											</div>
											<div className="col-sm-12 mt">
												<section>
													<label for="className">Class:</label>
													<select className="cs-select cs-skin-border">
														<option value="" disabled selected>Economy</option>
														<option value="economy">Economy</option>
														<option value="first">First</option>
														<option value="business">Business</option>
													</select>
												</section>
											</div>
											<div className="col-xxs-12 col-xs-6 mt">
												<section>
													<label for="className">Adult:</label>
													<select className="cs-select cs-skin-border">
														<option value="" disabled selected>1</option>
														<option value="1">1</option>
														<option value="2">2</option>
														<option value="3">3</option>
														<option value="4">4</option>
													</select>
												</section>
											</div>
											<div className="col-xxs-12 col-xs-6 mt">
												<section>
													<label for="className">Children:</label>
													<select className="cs-select cs-skin-border">
														<option value="" disabled selected>1</option>
														<option value="1">1</option>
														<option value="2">2</option>
														<option value="3">3</option>
														<option value="4">4</option>
													</select>
												</section>
											</div>
											<div className="col-xs-12">
												<input type="submit" className="btn btn-primary btn-block" value="Search Bus" />
											</div>
										</div>
									 </div>
									</div>
								</div>
							</div>


							<div className="desc2 animate-box">
								<div className="col-sm-7 col-sm-push-1 col-md-7 col-md-push-1">
									<p>Welcome to <a href="#" target="_blank" className="fh5co-site-name">BookKaroo </a></p>
									<h3>Get the best discounts on all Buses across Pakistan</h3>
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
		
		<div id="fh5co-tours" className="fh5co-section-gray" >
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
						<h3>Hot Tours</h3>
						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
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
								<h3>Hongkong</h3>
								<span>2 nights + Flight 4*Hotel</span>
								<span className="price">$1,000</span>
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
										<h2>Los Angeles</h2>
									</div>
								</a>
							</li>
							<li className="one-forth text-center" >
								<a href="#">
									<div className="case-studies-summary">
										<h2>Hongkong</h2>
									</div>
								</a>
							</li>
							<li className="one-forth text-center" >
								<a href="#">
									<div className="case-studies-summary">
										<h2>Italy</h2>
									</div>
								</a>
							</li>
							<li className="one-forth text-center" >
								<a href="#">
									<div className="case-studies-summary">
										<h2>Philippines</h2>
									</div>
								</a>
							</li>

							<li className="one-forth text-center" >
								<a href="#">
									<div className="case-studies-summary">
										<h2>Japan</h2>
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
										<h2>Paris</h2>
									</div>
								</a>
							</li>
							<li className="one-forth text-center" >
								<a href="#">
									<div className="case-studies-summary">
										<h2>Singapore</h2>
									</div>
								</a>
							</li>
							<li className="one-forth text-center" >
								<a href="#">
									<div className="case-studies-summary">
										<h2>Madagascar</h2>
									</div>
								</a>
							</li>
							<li className="one-forth text-center" >
								<a href="#">
									<div className="case-studies-summary">
										<h2>Egypt</h2>
									</div>
								</a>
							</li>
							<li className="one-forth text-center" >
								<a href="#">
									<div className="case-studies-summary">
										<h2>Indonesia</h2>
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
									<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
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
									<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
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
									<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
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
							<p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
						</blockquote>
						<p className="author">Kashi Tiktoker <a href="#" target="_blank">Span</a> <span className="subtext">Creative Tiktoker</span></p>
					</div>
					
				</div>
				<div className="col-md-4">
					<div className="box-testimony animate-box">
						<blockquote>
							<span className="quote"><span><i className="icon-quotes-right"></i></span></span>
							<p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.&rdquo;</p>
						</blockquote>
						<p className="author">Osama Javed <a href="#" target="_blank">Span</a> <span className="subtext">Creative Leader</span></p>
					</div>
					
					
				</div>
				<div className="col-md-4">
					<div className="box-testimony animate-box">
						<blockquote>
							<span className="quote"><span><i className="icon-quotes-right"></i></span></span>
							<p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
						</blockquote>
						<p className="author">Bilal Memon <a href="#">Span</a> <span className="subtext">Accountant</span></p>
					</div>
					
				</div>
			</div>
		</div>
	</div>
		<footer>
			<div id="footer">
				<div className="container">
					<div className="row row-bottom-padded-md">
						<div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
							<h3>About Travel</h3>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
						</div>
						<div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
							<h3>Top Flights Routes</h3>
							<ul>
								<li><a href="#">Manila flights</a></li>
								<li><a href="#">Dubai flights</a></li>
								<li><a href="#">Bangkok flights</a></li>
								<li><a href="#">Tokyo Flight</a></li>
								<li><a href="#">New York Flights</a></li>
							</ul>
						</div>
						<div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
							<h3>Top Hotels</h3>
							<ul>
								<li><a href="#">Boracay Hotel</a></li>
								<li><a href="#">Dubai Hotel</a></li>
								<li><a href="#">Singapore Hotel</a></li>
								<li><a href="#">Manila Hotel</a></li>
							</ul>
						</div>
						<div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
							<h3>Interest</h3>
							<ul>
								<li><a href="#">Beaches</a></li>
								<li><a href="#">Family Travel</a></li>
								<li><a href="#">Budget Travel</a></li>
								<li><a href="#">Food &amp; Drink</a></li>
								<li><a href="#">Honeymoon and Romance</a></li>
							</ul>
						</div>
						<div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
							<h3>Best Places</h3>
							<ul>
								<li><a href="#">Boracay Beach</a></li>
								<li><a href="#">Dubai</a></li>
								<li><a href="#">Singapore</a></li>
								<li><a href="#">Hongkong</a></li>
							</ul>
						</div>
						<div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
							<h3>Affordable</h3>
							<ul>
								<li><a href="#">Food &amp; Drink</a></li>
								<li><a href="#">Fare Flights</a></li>
							</ul>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 col-md-offset-3 text-center">
							<p className="fh5co-social-icons">
								<a href="#"><i className="icon-twitter2"></i></a>
								<a href="#"><i className="icon-facebook2"></i></a>
								<a href="#"><i className="icon-instagram"></i></a>
								<a href="#"><i className="icon-dribbble2"></i></a>
								<a href="#"><i className="icon-youtube"></i></a>
							</p>
							<p>Copyright 2021 <a href="#">Module</a>. All Rights Reserved. <br/>Made with <i className="icon-heart3"></i> by <a href="#" target="_blank">BookKaroo.com</a> <a href="#" target="_blank"></a></p>
						</div>
					</div>
				</div>
			</div>
		</footer>

	

	</div>
	{/* <!-- END fh5co-page --> */}

	</div>

    );

    
}

export default Home;