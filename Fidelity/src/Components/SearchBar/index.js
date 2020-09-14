import React from 'react'
import {View,Text,TextInput} from 'react-native'
import style from './stylesheet'

export default function SearchBar(){
    return(
        <View>
            <TextInput style={style.search} placeholder={"Digite o nome, o CPF, número de telefone ou e-mail"}/>
        </View>
    )
}