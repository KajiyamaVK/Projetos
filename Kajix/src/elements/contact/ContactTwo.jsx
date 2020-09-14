import React, { Component } from "react";

class ContactTwo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rnName: "",
			rnEmail: "",
			rnSubject: "",
			rnMessage: "",
		};
	}
	render() {
		return (
			<div className="contact-form--1">
				<div className="container">
					<div className="row row--35 align-items-start">
						<div className="col-lg-6 order-2 order-lg-1">
							<div className="section-title text-left mb--50">
								<h2 className="title">Contato</h2>
								<p className="description">
									Nos envie uma mensagem pelo formulário e iremos te retornar o mais rápido possível! 
								</p>
							</div>
							<div className="form-wrapper">
								<form>
									<label htmlFor="item01">
										<input
											type="text"
											name="name"
											id="item01"
											value={this.state.rnName}
											onChange={(e) => {
												this.setState({ rnName: e.target.value });
											}}
											placeholder="Seu nome (Obrigatório)"
										/>
									</label>

									<label htmlFor="item02">
										<input
											type="text"
											name="email"
											id="item02"
											value={this.state.rnEmail}
											onChange={(e) => {
												this.setState({ rnEmail: e.target.value });
											}}
											placeholder="Seu e-mail (Obrigatório)"
										/>
									</label>

									<label htmlFor="item03">
										<input
											type="text"
											name="subject"
											id="item03"
											value={this.state.rnSubject}
											onChange={(e) => {
												this.setState({ rnSubject: e.target.value });
											}}
											placeholder="Assunto"
										/>
									</label>
									<label htmlFor="item04">
										<textarea
											type="text"
											id="item04"
											name="message"
											value={this.state.rnMessage}
											onChange={(e) => {
												this.setState({ rnMessage: e.target.value });
											}}
											placeholder="Escreva sua mensagem aqui"
										/>
									</label>
									<button
										className="rn-button-style--2 btn-solid"
										type="submit"
										value="submit"
										name="submit"
										id="mc-embedded-subscribe"
									>
										enviar
									</button>
								</form>
							</div>
						</div>
						<div className="col-lg-6 order-1 order-lg-2">
                            <div className=/*"thumbnail mb_md--30 mb_sm--30"*/"mb_md--30 mb_sm--30">
								<img
									src="/assets/images/about/Kajix_imagem_contato.png"
									alt="Kajix_Contato"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default ContactTwo;
