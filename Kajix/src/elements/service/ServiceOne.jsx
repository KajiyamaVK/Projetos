import React, { Component } from "react";

const ServiceList = [
	{
		icon: "01",
		title: "Criação de sites",
		description:
			"Criação de sites a partir de R$199,00, e, para ajudar, parcelamos em UM ANO.",
	},
	{
		icon: "02",
		title: "Diversos serviços de divulgação",
		description:
			"Criamos o seu logo, seu site, seu anúncio! Vem falar com a gente!",
	},
	{
		icon: "03",
		title: "Marketing Digital",
		description:
			"Seja conhecido nas redes sociais! Facebook, Instagram, Youtube... você escolhe!",
	},
];

class ServiceOne extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="row">
					{ServiceList.map((val, i) => (
						<div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
							<div className="service service__style--1">
								<div className="icon">
									<img
										src={`/assets/images/icons/icon-${val.icon}.png`}
										alt="Digital Agency"
									/>
								</div>
								<div className="content">
									<h4 className="title">{val.title}</h4>
									<p>{val.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</React.Fragment>
		);
	}
}
export default ServiceOne;
