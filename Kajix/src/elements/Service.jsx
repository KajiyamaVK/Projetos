import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import {
	FiCast,
	FiLayers,
	FiUsers,
	FiMonitor,
	FiChevronUp,
} from "react-icons/fi";
import ScrollToTop from "react-scroll-up";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

const ServiceList = [
	{
		icon: <FiCast />,
		title: "Criação de sites",
		description:
			"Sites a partir de R$199,99 - nos consulte. Ecommerces ou sites institucionais, nós fazemos.",
	},
	{
		icon: <FiLayers />,
		title: "Design de mídia digital",
		description:
			"Sejam logos, imagens, arte para gráfica, a Kajix faz. Nos consulte!",
	},
	{
		icon: <FiUsers />,
		title: "Marketing digital",
		description:
			"Aquele anúncio que você tanto queria no Facebook, Instagram ou Youtube. Nós teremos o privilégio de lhe auxiliar com cada etapa deste processo. ",
	},
	// {
	// 	icon: <FiMonitor />,
	// 	title: "Mobile App Development",
	// 	description:
	// 		"I throw myself down among the tall grass by the stream as I lie close to the earth.",
	// },
	// {
	// 	icon: <FiCast />,
	// 	title: "Website Development",
	// 	description:
	// 		"I throw myself down among the tall grass by the stream as I lie close to the earth.",
	// },
	// {
	// 	icon: <FiMonitor />,
	// 	title: "Marketing & Reporting",
	// 	description:
	// 		"I throw myself down among the tall grass by the stream as I lie close to the earth.",
	// },
];
class Service extends Component {
	render() {
		return (
			<React.Fragment>
				<PageHelmet pageTitle="Serviços" />
				<Header
					headertransparent="header--transparent"
					colorblack="color--black"
					logoname="logo.png"
				/>

				{/* Start Breadcrump Area */}
				<Breadcrumb title={"SERVIÇOS"} />
				{/* End Breadcrump Area */}

				{/* Start Service Area */}
				<div className="service-area ptb--120 bg_color--5">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="section-title text-center mb--30">
									<h2>Nossos serviços</h2>
									<p>
										A Kajix está aqui para te ajudar a crescer no mercado do
										futuro.
									</p>
								</div>
							</div>
						</div>
						<div className="row service-one-wrapper">
							{ServiceList.map((val, i) => (
								<div
									className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
									key={i}
								>
									<a href="/service-details">
										<div className="service service__style--2">
											<div className="icon">{val.icon}</div>
											<div className="content">
												<h3 className="title">{val.title}</h3>
												<p>{val.description}</p>
											</div>
										</div>
									</a>
								</div>
							))}
						</div>
					</div>
				</div>
				{/* End Service Area */}

				{/* Start Service Area */}
				{/* <div className="service-area ptb--120 bg_color--1">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="section-title text-center mb--30">
									<h2>Strategy</h2>
									<p>
										There are many variations of passages of Lorem Ipsum
										available, <br /> but the majority have suffered alteration.
									</p>
								</div>
							</div>
						</div>
						<div className="row service-one-wrapper">
							{ServiceList.map((val, i) => (
								<div
									className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
									key={i}
								>
									<a className="text-center" href="/service-details">
										<div className="service service__style--2">
											<div className="icon">{val.icon}</div>
											<div className="content">
												<h3 className="title">{val.title}</h3>
												<p>{val.description}</p>
											</div>
										</div>
									</a>
								</div>
							))}
						</div>
					</div>
				</div> */}
				{/* End Service Area */}

				{/* Start Service Area */}
				{/* <div className="service-area creative-service-wrapper pt--90 pb--120 bg_color--5">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="section-title text-center mb--30">
									<h2>Creative Agency</h2>
									<p>
										There are many variations of passages of Lorem Ipsum
										available, <br /> but the majority have suffered alteration.
									</p>
								</div>
							</div>
						</div>
						<div className="row creative-service">
							{ServiceList.map((val, i) => (
								<div
									className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
									key={i}
								>
									<a href="/service-details">
										<div className="service service__style--2">
											<div className="icon">{val.icon}</div>
											<div className="content">
												<h3 className="title">{val.title}</h3>
												<p>{val.description}</p>
											</div>
										</div>
									</a>
								</div>
							))}
						</div>
					</div>
				</div> */}
				{/* End Service Area */}

				{/* Start Service Area */}
				{/* <div className="service-area creative-service-wrapper pt--90 pb--120 bg_color--1">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="section-title text-center mb--30">
									<h2>Development</h2>
									<p>
										There are many variations of passages of Lorem Ipsum
										available, <br /> but the majority have suffered alteration.
									</p>
								</div>
							</div>
						</div>
						<div className="row creative-service">
							{ServiceList.map((val, i) => (
								<div
									className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
									key={i}
								>
									<a className="text-center" href="/service-details">
										<div className="service service__style--2">
											<div className="icon">{val.icon}</div>
											<div className="content">
												<h3 className="title">{val.title}</h3>
												<p>{val.description}</p>
											</div>
										</div>
									</a>
								</div>
							))}
						</div>
					</div>
				</div> */}
				{/* End Service Area */}

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
export default Service;
