import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Container from '../components/ContentHolder';

import Main from '../pages/Main';
import DoujinInfo from '../pages/DoujinInfo';
import Gallery from '../pages/Gallery';
// import Login from '../pages/Login';
import Search from '../pages/Search';


const Stack = createStackNavigator();

function Routes(){

    const MainPage = ({...props}) => {
        return(
            <Container>
                <Main {...props} />
            </Container>
        );
    }
    
    const DoujinPage = ({...props}) => {
        return(
            <Container>
                <DoujinInfo {...props} />
            </Container>
        );
    }

    const GalleryPage = ({...props}) => {
        return(
            <Container>
                <Gallery {...props} />
            </Container>
        );
    }

    const SearchPage = ({...props}) => {
        return(
            <Container>
                <Search {...props} />
            </Container>
        );
    }

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={MainPage} />
                <Stack.Screen name="DoujinInfo" component={DoujinPage} />
                <Stack.Screen name="Gallery" component={GalleryPage} />
                <Stack.Screen name="Search" component={SearchPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;