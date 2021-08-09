import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserForm from './src/Views/UserForm';
import UserList from './src/Views/UserList';
import { Button, Icon } from 'react-native-elements';
import { UsersProvider } from './src/contxt/UserContexto';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="UserList"
          screenOptions={screenOptions}>
          <Stack.Screen 
            name="User List" 
            component={UserList}
            options={({ navigation }) =>{
              return {
                title:"Lista de Usuários",
                headerRight: () => (
                  <Button 
                    onPress={() => navigation.navigate('UserForm')} 
                    type="clear"
                    icon={<Icon name="add" size={25} color="#fff" />} />
                )
              }
            }} />
          <Stack.Screen 
            name="UserForm" 
            component={UserForm}
            options={{title:"Formulário de Usuários"}} />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
}

const screenOptions = {
  headerStyle:{
    backgroundColor:'#5467f4'
  },
  headerTintColor:'#fff',
  headerTitleStyle: {
    fontWeight:'bold'
  }
}

export default App;