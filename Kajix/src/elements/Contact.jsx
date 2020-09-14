import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
// import { FiHeadphones, FiMail, FiMapPin } from "react-icons/fi";
import { FiHeadphones, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
// import GoogleMapReact from "google-map-react";
import ContactTwo from "../elements/contact/ContactTwo";
// import BrandTwo from "../elements/BrandTwo";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Contact extends Component {
	static defaultProps = {
		center: {
			lat: 59.95,
			lng: 30.33,
		},
		zoom: 11,
	};

	render() {
		return (
			<React.Fragment>
				<PageHelmet pageTitle="Contato Kajix" />

				<Header
					headertransparent="header--transparent"
					colorblack="color--black"
					logoname="logo.png"
				/>

				{/* Start Breadcrump Area */}
				<div
					className="rn-page-title-area pt--120 pb--190 bg_image bg_image--17"
					data-black-overlay="6"
				>
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="rn-page-title text-center pt--100">
									<h2 className="title theme-gradient">
										Entre em contato conosco
									</h2>
									<p>
										Estamos sempre à disposição para melhor atende-lo. Seja um
										simples orçamento, um "oi", ou aquisição dos nossos
										serviços, esteja sempre à vontade para entrar em contato.{" "}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* End Breadcrump Area */}

				{/* Start Contact Top Area  */}
				<div className="rn-contact-top-area ptb--120 bg_color--5">
					<div className="container">
						<div className="row">
							{/* Start Single Address  */}
							<div className="col-lg-6 col-md-6 col-sm-6 col-12">
								<div className="rn-address">
									<div className="icon">
										<FiHeadphones />
									</div>
									<div className="inner">
										<h4 className="title">Nosso telefone</h4>
										<p>
											<a href="tel:+057 254 365 456">+55 11 98888-9999</a>{" "}
											<FaWhatsapp />
										</p>
										<p>
											<a href="tel:+856 325 652 984">+55 11 9999-99999</a>
										</p>
									</div>
								</div>
							</div>
							{/* End Single Address  */}

							{/* Start Single Address  */}
							<div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--50">
								<div className="rn-address">
									<div className="icon">
										<FiMail />
									</div>
									<div className="inner">
										<h4 className="title">Endereço de e-mail Kajix</h4>
										<p>
											<a href="mailto:contato@kajix.com.br">
												contato@kajix.com.br
											</a>
										</p>
										{/* <p>
											<a href="mailto:example@gmail.com">example@gmail.com</a>
										</p> */}
									</div>
								</div>
							</div>
							{/* End Single Address  */}

							{/* Start Single Address  */}
							{/* <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50">
								<div className="rn-address">
									<div className="icon">
										<FiMapPin />
									</div>
									<div className="inner">
										<h4 className="title">Location</h4>
										<p>
											5678 Bangla Main Road, cities 580 <br /> GBnagla, example
											54786
										</p>
									</div>
								</div>
							</div> */}
							{/* End Single Address  */}
						</div>
					</div>
				</div>
				{/* End Contact Top Area  */}

				{/* Start Contact Page Area  */}
				<div className="rn-contact-page ptb--120 bg_color--1">
					<ContactTwo />
				</div>
				{/* End Contact Page Area  */}

				{/* Start Contact Map  */}
				{/* <div className="rn-contact-map-area position-relative">
					<div style={{ height: "650px", width: "100%" }}>
						<GoogleMapReact
							defaultCenter={this.props.center}
							defaultZoom={this.props.zoom}
						>
							<AnyReactComponent
								lat={59.955413}
								lng={30.337844}
								text="My Marker"
							/>
						</GoogleMapReact>
					</div>
				</div> */}
				{/* End Contact Map  */}

				{/* Start Brand Area */}
				{/* <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<BrandTwo />
							</div>
						</div>
					</div>
				</div> */}
				{/* End Brand Area */}

				{/* Start Back To Top */}
				<div className="backto-top">
					<ScrollToTop showUnder={160}>
						<FiChevronUp />
					</ScrollToTop>
				</div>
				{/* End Back To Top */}

				<Footer />
			</React.Fragment>
		);
	}
}
export default Contact;
