import React, { Component } from "react";

class About extends Component {
	render() {
		let title = "Sobre a Kajix",
			description =
				"Vinda em uma época digital, em meio à pandemia de 2020, a Kajix veio para sanar os problemas das empresas que prestam serviços na questão divulgações tecnológicas.";
		return (
			<React.Fragment>
				<div className="about-wrapper">
					<div className="container">
						<div className="row row--35 align-items-center">
							<div className="col-lg-5 col-md-12">
								<div className="thumbnail">
									<img
										className="w-100"
										src="/assets/images/about/Imagem_about_Principal_kajix.png"
										alt="About Images"
									/>
								</div>
							</div>

							<div className="col-lg-7 col-md-12">
								<div className="about-inner inner">
									<div className="section-title">
										<h2 className="title">{title}</h2>
										<p className="description">{description}</p>
									</div>
									<div className="row mt--30 mt_sm--10">
										<div className="col-lg-6 col-md-12 col-sm-12 col-12">
											<div className="about-us-list">
												<h3 className="title">Nosso objetivo</h3>
												<p>
													Se sua empresa cresce, nós crescemos. A Kajix veio não
													apenas para colocar seu nome na internet à mercê da
													visualização de todos - nós viemos para que essas
													visualições se transformem em experiências e desejos.
													Que as pessoas olhem nossas propagandas e sintam o
													IMPACTO.
												</p>
											</div>
										</div>
										<div className="col-lg-6 col-md-12 col-sm-12 col-12">
											<div className="about-us-list">
												<h3 className="title">Fundação</h3>
												<p>
													Fundado em 2020, a Kajix iniciou seus trabalhos
													lentamente na cidade de Sâo Paulo, e, atualmente busca
													seu portfólio por todo o Brasil.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
export default About;
