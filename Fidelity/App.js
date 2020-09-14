import 'react-native-gesture-handler';
import * as React from 'react';
import {  AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Search from './src/Components/Search'
import ClientsRegister from './src/Components/ClientRegister'
import { ScrollView } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
          <Tab.Navigator 
              
              
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Buscar') {
                  iconName = 'search1';
                } else if (route.name === 'Cadastrar') {
                  iconName = "adduser"
                }

                // You can return any component that you like here!
                return <AntDesign name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'blue',
              inactiveTintColor: 'gray',
            }}
          >
            <Tab.Screen name="Buscar" component={Search} />
            <Tab.Screen name="Cadastrar" component={ClientsRegister} />
          </Tab.Navigator>
        </NavigationContainer> 
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
