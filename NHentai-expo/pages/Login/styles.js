import styled from 'styled-components/native';

export const LoginContainer = styled.View`
    background: #1D1D1D;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

export const Logo = styled.Image`
    width: 200px;
    height: 150px;
`;

export const LoginInput = styled.TextInput`
    background: black;
    border-radius: 3px;
    width: 100%;
    height: 50px;
    border: 1px solid #333333;
    margin-bottom: 3px;
    padding-left: 10px;
    color: #F1F1F1;
`;

export const ButtonHolder = styled.TouchableOpacity`
    width: 99%;
    height: 45px;
    justify-content: center;
    align-items: center;
    background: #ED2553;
    margin-bottom: 3px;
    border-radius: 3px;
`;

export const Text = styled.Text`
    color: #F1F1F1;
`;