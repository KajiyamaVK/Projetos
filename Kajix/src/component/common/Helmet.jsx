import React, { Component } from "react";
import { Helmet } from "react-helmet";

class PageHelmet extends Component {
	render() {
		return (
			<React.Fragment>
				<Helmet>
					<title>{this.props.pageTitle} || Futurando hoje </title>
					<meta
						name="description"
						content="Kajix - Criação de sites e marketing digital. Criação de marketing Facebook e Instagram. Criação de artes digitais."
					/>
				</Helmet>
			</React.Fragment>
		);
	}
}

export default PageHelmet;
