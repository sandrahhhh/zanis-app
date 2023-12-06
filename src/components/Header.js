import react from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';


const Header  = () => {
    return (
        <View style={styles.container}>
          <TouchableOpacity>  
           <Image
            style={styles.logo} 
            source={require('../../assets/logo.png')}
            />
          </TouchableOpacity>  
        </View>
    )
}  

const styles = StyleSheet.create({
container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgb(13,85,12)',
},

    logo: {
        width: 350,
        height: 100,
        resizeMode: 'contain',
        marginTop: '8%',
        marginLeft: '10%'
    }
})

export default Header;