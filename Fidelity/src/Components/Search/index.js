import React, { Component, useState } from 'react';
import {Text,View, TextInput} from 'react-native'
import Accordion from 'react-native-collapsible/Accordion';
import style from './stylesheet'
import SearchBar from "react-native-dynamic-search-bar";
import Data, {Test} from "../Data"
import { Button } from 'react-native';



export default function Search({ navigation }) {

 

  const [activeSections,updateActiveSections] = useState([])
  const [multiSelect,updateMultiSelect] = useState(false)
  const [Clients, updateClients] = useState(Data)

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      updateActiveSections([])
      // The screen is focused
      // Call any action
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, []);
 

  const Reset=()=>{
    updateActiveSections([])
  }

  const _renderHeader = section => {
      return (
        <View>
          <Text>
      <Text style={style.name}>{section.name}</Text> 
          </Text>
        </View>
      );
  };


  const _renderData = section => {
    return (
      <View>
        <Text>
        <Text style={style.DataTitle}>Pontos:</Text> {section.Pontos}
        </Text>
        <Text>
          <Text style={style.DataTitle}>CPF:</Text> {section.CPF}
        </Text>
        <Text>
          <Text style={style.DataTitle}>Tel:.</Text>{section.Telefone}
        </Text>
      </View>
    );
  };

  const _updateSections = section => {
    updateActiveSections(section)
  };
  



  function filterList(text) {
    var _Clients=[]
    let str
    let textUpper
    
    if (text===""){
      _Clients=Data
    } 
    else
    {
      for(var i=0; i<Data.length; i++) {
        for(var key in Data[i]) {
          str = Data[i][key].toUpperCase()
          textUpper = text.toUpperCase()
          if(str.indexOf(textUpper)!==-1) {
             _Clients.push(Data[i]);
          }
          
        }
      }
    }
    updateClients(_Clients)
    updateActiveSections([])
  }

  return (
    <View style={style.firstView}>
      <SearchBar
        fontColor="#c6c6c6"
        iconColor="#c6c6c6"
        shadowColor="#282828"
        cancelIconColor="#c6c6c6"
        backgroundColor="#353d5e"
        placeholder="Digite o nome, cpf ou telefonee"
        onChangeText={(text) => {
          filterList(text);
        }}
        onPressCancel={() => {
          filterList("");
        }}
        onPress={()=> {filterList("")}}
      />
       <View style={style.accordion}>
        <Accordion
            sections={Clients}
            activeSections={activeSections}
            //renderSectionTitle={this._renderSectionTitle}
            renderHeader={_renderHeader}
            renderContent={_renderData}
            onChange={_updateSections}
        />
       </View>
    </View>
  );
}



