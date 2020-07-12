import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';
import DoujinInfo from '../pages/DoujinInfo';
import Gallery from '../pages/Gallery';
// import Login from '../pages/Login';
import Search from '../pages/Search';


const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* <Stack.Screen name="Login" component={Login} /> */}
                <Stack.Screen name="Home" component={Main} />
                <Stack.Screen name="DoujinInfo" component={DoujinInfo} />
                <Stack.Screen name="Gallery" component={Gallery} />
                <Stack.Screen name="Search" component={Search} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;