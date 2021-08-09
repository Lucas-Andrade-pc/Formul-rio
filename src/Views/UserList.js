import { getActionFromState } from '@react-navigation/native'
import React, { useContext } from 'react'
import { View, Text, FlatList, Alert } from 'react-native'
import { ListItem, Avatar, Button, Icon } from 'react-native-elements'
import UsersContext from '../contxt/UserContexto'
import User from '../data/User'

export default props => {

    const { state,dispatch } = useContext(UsersContext)
    
    function deleteUser(user){
        Alert.alert('Excluir usuário', 'Deseja excluir usuario:', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getUserItem({ item: user }){
        return (
            <View>
                <ListItem key={user.id}
                    bottomDivider 
                    onPress={() => props.navigation.navigate('UserForm')}
                    //rightElement={getAction(user)}
                    
                    onPress={() => props.navigation.navigate('UserForm', user)}>
                    <Avatar source={{uri: user.avatarUrl}} />
                    
                    <ListItem.Content>
                        <ListItem.Title>{user.name}</ListItem.Title>
                        <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                        
                    </ListItem.Content>
                    <Button 
                        type='clear' 
                        icon={<Icon name="edit" size={25} color="orange" />}
                        onPress={() => props.navigation.navigate('UserForm', user)} />
                    <Button 
                        type='clear' 
                        icon={<Icon name="delete" size={25} color="red" />}
                        onPress={() => deleteUser(user)} />
                </ListItem>
            </View>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={User => User.id.toString()}  
                data={state.User}
                renderItem={getUserItem}
            />
        </View>
    )
}