import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    search:{
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        marginTop:500,
        margin:10
    },
    name:{
        fontWeight:"bold"
        ,fontSize:20

    },

    DataHeader:{
        fontWeight:"bold"
        ,fontSize:50
        ,margin:10
        ,borderBottomColor:"grey"
        ,borderBottomWidth: StyleSheet.hairlineWidth
    },

    DataTitle:{
        fontWeight:"bold"
    },
    accordion:{
        margin:10,
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: 1.0,
    },
    firstView:{
        marginTop:60
    },
    buttons:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-around",
        marginBottom:10,
        marginTop:30,
        marginLeft:20,
        marginRight:20,
    }
})

export default style;