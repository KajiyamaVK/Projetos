import React, {Component} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import "./stylesheet.css"
import {registerMode, userAuth} from './script'
import FormInput from "../../Components/FormInput"
import { useHistory } from "react-router-dom";

export default class login extends Component{
    constructor(props)
    {
        super();
        this.state = { showMe:true }
       
    }

    componentDidMount(){
        
        document.getElementById("RegisterButton").addEventListener('click', this.changeStateRegister, false);
        

    }

    changeStateRegister=()=>{
        this.setState({
            showMe:!this.state.showMe
        })
    }
    

    
    authOK(){
        debugger
        alert("authOK")
        if(localStorage.isAuthorized ==="1"){
        this.props.history.push("/tarefas")
        }
    }

    render() {
        return(
            <div>
                <Container fluid="sm">
                    <Row>
                        <Col>
                            <Form className="userContainer" >
                                <div id="inputsid">
                                    {
                                        !this.state.showMe?
                                        <FormInput id={"nome_usuario"} type={"text"} placeholder={"Nome"} required={"required"}/>
                                        :null
                                    }
                                    <FormInput id={"email"} type={"email"} placeholder={"E-mail"} required={"required"}/>
                                    <FormInput id={"senha"} type={"password"} placeholder={"Digite sua senha"} required={"required"}/>
                                    {
                                        !this.state.showMe?
                                        <FormInput type={"password"} placeholder={"Confirme sua senha"} required={"required"}/>
                                        :null
                                    }
                                    
                                </div>
                                <div id="buttonsid">
                                    <Button variant="primary" type="button" id="AccessButton" onClick={()=>userAuth(this.authOK)}>
                                        Acessar 
                                    </Button>
                                   
                                    <Button variant="primary" style = {{marginLeft: "10px"}} id="RegisterButton" onClick={registerMode}>
                                        Registre-se 
                                    </Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
   
}
