import React from 'react'
import {GravarCliente,ColetarClientes, ClearFields} from './CadastroClientesApi'
import { Container, Row, Col } from 'react-bootstrap'
import './CadastroClientes.css'

export default class CadastroClientes extends React.Component{
    render(){
        return(  <div>
            <h1>Cadastro de clientes</h1>
            <Container>
                <Row>
                    <Col>
                        <form>
                            <label htmlFor="NomeCliente">Primeiro Nome</label>
                            <input id="nome" name="NomeCliente" type="text" className = "cc-input"/> <br/>
                
                            <label htmlFor="SobrenomeCliente">Sobrenome</label>
                            <input id="sobrenome" name="SobrenomeCliente" type="text" className = "cc-input"/><br/>

                            <label htmlFor="idempresa">Empresa</label>
                            <input id = "idempresa" name="idempresa" type="text" className = "cc-input"/><br/>

                            <label htmlFor="Cpf">CPF</label>
                            <input id = "cpf" name="Cpf" type="text" className = "cc-input"/><br/>
                
                            <label htmlFor="DataNascimento">Data de nascimento</label>
                            <input id="datanascimento" name="DataNascimento" type="text" className = "cc-input"/><br/><br/>
                
                            <button type="button" onClick={GravarCliente}>Gravar</button> <br/><br/>
                            <button type="button" onClick={ColetarClientes}>Buscar</button><br/><br/>
                            <button type="button" onClick={ClearFields}>Limpar</button> 
                
                        </form>
                    </Col>
                    <Col>
                        <div id = "cc-avisos">

                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}
  
