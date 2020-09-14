import React, { Component } from "react";
import {
	FaTwitter,
	FaInstagram,
	FaFacebookF,
	FaLinkedinIn,
} from "react-icons/fa";

const SocialShare = [
	{ Social: <FaFacebookF />, link: "https://www.facebook.com/" },
	{ Social: <FaLinkedinIn />, link: "https://www.linkedin.com/" },
	{ Social: <FaInstagram />, link: "https://www.instagram.com/" },
	{ Social: <FaTwitter />, link: "https://twitter.com/" },
];
class Footer extends Component {
	render() {
		return (
			<React.Fragment>
				<footer className="footer-area">
					<div className="footer-wrapper">
						<div className="row align-items-end row--0">
							<div className="col-lg-6">
								<div className="footer-left">
									<div className="inner">
										<span>Sua empresa está pronta para crescer?</span>
										<h2>
											Então mãos à <br /> obra
										</h2>
										<a className="rn-button-style--2" href="/contact">
											<span>Entre em contato</span>
										</a>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="footer-right" data-black-overlay="6">
									<div className="row">
										{/* Start Single Widget  */}
										<div className="col-lg-6 col-sm-6 col-12">
											<div className="footer-link">
												<h4>Acessos rápidos</h4>
												<ul className="ft-link">
													<li>
														{/* <a href="/portfolio"> */}
														Trabalhos feitos
														{/* </a> */}
													</li>
													<li>
														<a href="/about">Sobre a Kajix</a>
													</li>
													<li>
														<a href="/contact">Vamos conversar</a>
													</li>
												</ul>
											</div>
										</div>
										{/* End Single Widget  */}
										{/* Start Single Widget  */}
										<div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
											<div className="footer-link">
												<h4>Entre em contato</h4>
												<ul className="ft-link">
													<li>
														<a href="mailto:admin@example.com">11 98888-8888</a>
													</li>
													<li>
														<a href="mailto:contato@kajix.com.br">
															contato@kajix.com.br
														</a>
													</li>
												</ul>

												<div className="social-share-inner">
													<ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
														{SocialShare.map((val, i) => (
															<li key={i}>
																{/* <a href={`${val.link}`}> */}
																{val.Social}
																{/* </a> */}
															</li>
														))}
													</ul>
												</div>
											</div>
										</div>
										{/* End Single Widget  */}

										<div className="col-lg-12">
											<div className="copyright-text">
												<p>
													Copyright © 2020 Kajix. Todos os direitos reservados.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</React.Fragment>
		);
	}
}
export default Footer;
