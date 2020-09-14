import React from 'react'
import {View,TextInput,Button,Text} from 'react-native'
import {Formik} from 'formik'
import style from './stylesheet'
import { FontAwesome5 } from '@expo/vector-icons';
import Data from '../Data'


export default function ClientsRegister(){
    return(
        <View style={style.Form}>
            <Text style={style.title}>
                Cadastro
            </Text>
            <FontAwesome5 name='users' size={100} color='darkblue' style={style.icon}/>
            <Formik
                initialValues= {{name:'', CPF:'', Telefone:''}}
                onSubmit={(values,{resetForm})=>{
                    Data.push(values);
                    resetForm({value:''})
                }}
            >
            {
                (props) => (
                    <View>

                        <TextInput
                            placeholder="Nome Completo"
                            onChangeText={props.handleChange('name')}
                            value={props.values.name}
                            style={style.input}
                            
                        />
                     
                        <TextInput
                            placeholder="CPF"
                            onChangeText={props.handleChange('CPF')}
                            value={props.values.CPF}
                            style={style.input}
                            keyboardType='numeric'
                        />
                     
                        <TextInput
                            placeholder="Telefone Celular com DDD"
                            onChangeText={props.handleChange('Telefone')}
                            value={props.values.Telefone}
                            style={style.input}
                            keyboardType='numeric'
                        />
                      
                        <Button title='Gravar' color='darkblue' onPress={props.handleSubmit}/>
                    </View>
                )
            }
            </Formik>
        </View>
    )
}