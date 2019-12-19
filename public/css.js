import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
      container: {
      marginTop: 25,
      padding: 10,
      //alignItems: 'center'
      },
      header: {
        textAlign: "center",
        fontSize: 20
      },
      nav: {
        flexDirection: "row",
        justifyContent: "space-around"
      },
      navItem: {
        flex: 1,
        alignItems: "center",
        padding: 10
      },
      subNavItem: {
        padding: 5
      },
      topic: {
        textAlign: "center",
        fontSize: 15
      },
      main: {
        fontSize: 40,
        color: 'white',
        marginTop: 20,
        marginBottom: 20,
        fontWeight: 'bold',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      container: {
        //backgroundColor: 'skyblue',
        alignItems: 'center'
      },
      box: {
        backgroundColor: '#9dd7ef',
        //borderColor: 'gray',
        height: '100%',
      },
      shadow: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.20,
        shadowRadius: 3.84,
        elevation: 3
      },
      textShadow: {
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 1,
        textShadowColor: '#666',
      },

      //login
      inputContainer: {
        //borderBottomColor: '#000000',
        //backgroundColor: '#FFFFFF',
        borderRadius: 3,
        //borderBottomWidth: 1,
        width: 300,
        height: 60,
        //   flexDirection: 'row',
        //alignItems: 'center',
        borderColor: 'gray',
        //borderWidth: 1, //เส้นกรอบ
        marginBottom: 10,
        backgroundColor: '#c9e9f6',
        //backgroundColor: '#e6e6e6', //gray
        //backgroundColor: '#ABE3F0',
        paddingTop: 8,
        paddingLeft: 30,
        textAlign: 'left',   
      },
      inputs: {
        height: 45,
        //   marginLeft  color: 'black':16,
        borderBottomColor: '#FFFFFF',
        //   flex:1,
        borderColor: 'black',
        fontSize: 20
      },
      inputIcon: {
        width: 30,
        height: 30,
        // marginLeft:15,
        justifyContent: 'center'
      },
      buttonContainer: {
        height: 45,
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom:20,
        width: 300,
        borderRadius: 3,
        marginBottom: 5 //ระยะห่างระหว่างบรรทัด
      },
      loginButton: {
        backgroundColor: '#45b3e0',
        //backgroundColor: '#6cd0ea', //slickblue
        //backgroundColor: "#00b5ec",
        height: 55,
        marginTop: 5,
        marginBottom: 50
      },
      loginText: {
        color: 'white',
        fontSize: 18
      },
      forgetp: {
        paddingLeft: 185,
        color: '#666',
        //paddingTop: 5,
        paddingBottom: 10,
        //fontWeight: 'bold'
      },
    //register
      ReginputContainer: {
        //backgroundColor: '#FFF',
        borderRadius: 3,
        width: 300,
        height: 45,
        paddingLeft: 30,
        textAlign: 'left',
        borderColor: 'gray',
        marginBottom: 15,
        //backgroundColor: '#e6e6e6',
        //paddingTop: 0,
        backgroundColor: '#c9e9f6', 
      },
      Reginputs: {
        height: 45,
        borderColor: 'black',
        fontSize: 18
      },
      RegbuttonContainer: {
        height: 45,
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom:20,
        width: 300,
        borderRadius: 3,

        //marginBottom: 5 //ระยะห่างระหว่างบรรทัด
      },
      ReginputIcon: {
        width: 30,
        height: 30,
        justifyContent: 'center'
      },
      RegButton: {
        backgroundColor: '#45b3e0',
        //backgroundColor: "#00b5ec",
        height: 45,
        marginTop: 5,
      },
      RegText: {
        color: 'white',
        fontSize: 18
      },
      signup: {
        color: '#333333',
        fontSize: 16,
        fontWeight: 'bold'
      },
      signupp: {
        color: '#038EB8',
        fontSize: 18,
        fontWeight: 'bold',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        textShadowColor: 'black',
      },
      backLogin: {
        marginTop: 50,
        color: '#038EB8',
        fontSize: 20,
        fontWeight: 'bold',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        textShadowColor: 'black',
      },
      img: {
        width: 50,
        height: 50,
        marginBottom: 20
      },
      
});

export default styles ;



