import React, {Component} from "react"
import {Form} from 'react-bootstrap'

class FormInput extends Component{
    render() {
        return(
        
            
                <Form.Group controlId={this.props.id}>
                    <Form.Control type={this.props.type} placeholder={this.props.placeholder} required={this.props.required}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
            
        
        )
    }
}

// const FormInput = (type,placeholder) => (
//     <Form.Group controlId="formBasicEmail">
//         <Form.Control type={type} placeholder={placeholder} />
//         <Form.Text className="text-muted">
//         </Form.Text>
//     </Form.Group>
// )

export default FormInput;