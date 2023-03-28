import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const ScreenPrincipal = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Text>Screen Principal</Text>
            <Button
                title='Pendientes'
                onPress={()=>navigation.navigate('Pendientes')}
            ></Button>
        </View>
    )
}

export default ScreenPrincipal

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})