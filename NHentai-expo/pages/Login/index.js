import React, { useState, useEffect } from 'react';
import SyncStorage from '@react-native-community/async-storage';
import logo from '../../assets/logo.png';

import { LoginContainer, Logo, LoginInput, ButtonHolder, Text } from './styles';

export default function Login({ navigation }){

    const [ username, setUsername ] = useState('');
    const [ userID, setUserID ] = useState('');

    useEffect(() => {
        SyncStorage.getItem('@user').then(res => {
            if(res !== null){
                navigation.navigate('Home')
            }
        })
    }, [])

    const logIn = async () => {
        const user = { username, userID }
        await SyncStorage.setItem('@user', JSON.stringify(user))
        navigation.navigate('Home')
    }

    const anonimous = () => {
        const { navigate } = navigation;
        navigate('Home') 
    }

    return(
        <LoginContainer>
            <Logo source={logo} resizeMethod={'resize'} resizeMode={'contain'} />
            <LoginInput placeholder="Nome de usuário" onChangeText={text => setUsername(text)} autoCompleteType={'username'} />
            <LoginInput placeholder="ID de usuário" onChangeText={text => setUserID(text)}/>
            <ButtonHolder onPress={logIn}>
                <Text>Entrar</Text>
            </ButtonHolder>
            <ButtonHolder onPress={anonimous}>
                <Text>Entrar Anônimo</Text>
            </ButtonHolder>
        </LoginContainer>
    );

}