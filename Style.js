import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin:10,
    padding:10,
      shadowColor: "rgba(0,0,0,0.41)",
      shadowOpacity: 0.2,
      shadowRadius: 3,
      shadowOffset: {
      height: 0,
      width: 0
      },
      borderRadius: 4,
      alignItems: 'stretch',
      justifyContent: 'center',
      flex: 1,
      backgroundColor: '#ffffff',
      overflow:'visible',
      marginTop:40,


  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textInput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
    
    marginTop:100,
    margin:10
  },
    parent: {
        padding: 16
    },
    germanLabel: {
        marginTop: 20,
        fontWeight: 'bold'
    },
    germanWord: {
        marginTop: 15,
        fontSize: 30,
        fontStyle: 'italic'
    },
  headerGroup:{
      flex:1,
      flexDirection:'row',
      marginTop:10,
      borderBottomColor: '#E8E8E8', 
      borderBottomWidth: 1, 
      

  },
  input: {
      height: 50,
      marginBottom: 10,
      paddingHorizontal: 10
  },
  listContainer:{
      margin:20
  },
  row:{ 
      flexDirection:'row',
      justifyContent:'space-between',
      padding:5,
      borderBottomColor: '#E8E8E8', 
      borderBottomWidth: 1, 
      marginHorizontal:15,
      height:50
  },
  rowText:{
      fontSize: 20,
      textAlign: 'left',
      margin: 10,
      lineHeight:20,

  }



});

export default Style;