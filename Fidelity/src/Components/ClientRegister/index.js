import React, {useState} from 'react'
import {View,TextInput,Button,Text} from 'react-native'
import {Formik} from 'formik'
import style from './stylesheet'
import { FontAwesome5 } from '@expo/vector-icons';
import Data from '../Data'
import ClientsRegisterSchema from './inputSchema'


export default function ClientsRegister(){
    return(
        <View style={style.Form}>
            <Text style={style.title}>
                Cadastro
            </Text>
            <FontAwesome5 name='users' size={100} color='darkblue' style={style.icon}/>
            <Formik
                initialValues= {{name:'', CPF:'', Telefone:''}}
                validationSchema = {ClientsRegisterSchema}
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
                            validationSchema={ClientsRegisterSchema}
                            onBlur={props.handleBlur('name')}
                        />
                        <Text style={style.error}>{props.touched.name && props.errors.name}</Text>
                     
                        <TextInput
                            placeholder="CPF"
                            onChangeText={props.handleChange('CPF')}
                            value={props.values.CPF}
                            style={style.input}
                            keyboardType='numeric'
                            validationSchema={ClientsRegisterSchema}
                            onBlur={props.handleBlur('CPF')}
                        />
                        <Text style={style.error}>{props.touched.CPF && props.errors.CPF}</Text>
                        
                     
                        <TextInput
                            placeholder="Telefone Celular com DDD"
                            onChangeText={props.handleChange('Telefone')}
                            value={props.values.Telefone}
                            style={style.input}
                            keyboardType='numeric'
                            validationSchema={ClientsRegisterSchema}
                            onBlur={props.handleBlur('Telefone')}
                        />
                        <Text style={style.error}>{props.touched.Telefone && props.errors.Telefone}</Text>
                        
                    
                      
                        <Button title='Gravar' color='darkblue' onPress={props.handleSubmit}/>
                    </View>
                )
            }
            </Formik>
        </View>
    )
}