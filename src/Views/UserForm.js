import React, { useContext, useState } from 'react'
import { Text, TextInput, View, StyleSheet, Button } from 'react-native'
import UsersContext from '../contxt/UserContexto'

import User from '../data/User'

export default ({ route, navigation }) => {
    //console.warn(Object.keys(route.params))
    const [user, setUser] = useState( route.params ? route.params : {})
    const {dispatch} = useContext(UsersContext)
    return (
        <View style={style.form}>
            <Text>Nome:</Text>
            <TextInput 
                style={style.input}
                onChangeText={name => setUser({...user, name})}
                placeholder=" Informe o nome"
                value={user.name} />

            <Text>Email:</Text>
            <TextInput 
                style={style.input}
                onChangeText={email => setUser({...user, email})}
                placeholder=" Informe seu e-mail"
                value={user.email} />

            <Text>URL avatar</Text>
            <TextInput 
                style={style.input}
                onChangeText={avatarUrl => setUser({...user, avatarUrl})}
                placeholder=" Informe seu link do avatar"
                value={user.avatarUrl} />

            <Button title="Salvar" onPress={() => {
                dispatch({
                    type: user.id ? 'updateUser' : 'createUser',
                    payload: user,
                })
                navigation.goBack() 
            }} />
        </View>

        
    )
}

const style = StyleSheet.create({
    form:{
        padding: 12,
    },
    
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth:1,
        marginBottom:10,
    }
})