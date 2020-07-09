import styled from 'styled-components/native';

export const NavContainer = styled.View`
    height: 80px;
    background: #333333;
    align-self: stretch;
    align-items: flex-end;
    flex-direction: row;
    justify-content: space-around;
    padding: 10px;
`;

export const LogoHolder = styled.TouchableHighlight`
    width: 38px;
    height: 21px;
    margin-right: 5px;
`;

export const SearchHolder = styled.View`
    width: 169px;
    height: 19px;
`;

export const TextInput = styled.TextInput`
    padding-left: 5px;
    background: white;
    color: black;
    border-radius: 5px;
`;

export const MenuHolder = styled.View`
    flex-direction: row;
    justify-content: space-around;
`;

export const Button = styled.TouchableHighlight`
    flex-direction: row;
    justify-content: space-around;
`;

export const MenuItem = styled.Text`
    color: #D9D9D9;
    margin-left: 5px;
    margin-right: 5px;
`;

export const Image = styled.Image`
    width: 38px;
    height: 21px;
`;