import React, { Component } from "react";
import { FiCast, FiLayers, FiUsers, FiMonitor } from "react-icons/fi";

const ServiceList = [
	{
		icon: <FiCast />,
		title: "Criação de sites",
		description:
			"Fazemos a criação do seu site usando diversas tecnologias do mercado. Javascript, Wordpress.... ",
	},
	{
		icon: <FiLayers />,
		title: "Logos",
		description:
			"Criamos o seu logo. Com ele você fará letreiros, materiais gráficos e utilizará em mídias digitais.",
	},
	{
		icon: <FiUsers />,
		title: "Mídias digitais",
		description:
			"Fazemos o trabalho gráfico para você usar para postar em sua página do Facebook e/ou Instagram. Faremos a arte pro seu panfleto e cartão. Nos consulte pois não paramos por aí.",
	},
	{
		icon: <FiMonitor />,
		title: "Marketing Digital",
		description:
			"Sabe aquela propaganda do Facebook e do Instagram. Aquele vídeo no youtube ou mesmo sei site aparecendo no Google? ",
	},
];

class ServiceTwo extends Component {
	render() {
		let title = "Serviços",
			description =
				"Efetuamos os mais diversos serviços para tornar a sua empresa realmente VISÍVEL para o mercado. ";

		return (
			<React.Fragment>
				<div className="row">
					<div className="col-lg-4 col-12">
						<div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
							<h2 className="title">{title}</h2>
							<p>{description}</p>
							{/* <div className="service-btn">
								<a className="btn-transparent rn-btn-dark" href="/service">
									<span className="text">Lista completa de serviços</span>
								</a>
							</div> */}
						</div>
					</div>
					<div className="col-lg-8 col-12 mt_md--50">
						<div className="row service-one-wrapper">
							{ServiceList.map((val, i) => (
								<div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
									{/* <a href={"/service-details-" + val.title}> */}
									<div className="service service__style--2">
										<div className="icon">{val.icon}</div>
										<div className="content">
											<h3 className="title">{val.title}</h3>
											<p>{val.description}</p>
										</div>
									</div>
									{/* </a> */}
								</div>
							))}
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
export default ServiceTwo;
