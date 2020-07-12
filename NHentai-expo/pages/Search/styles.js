import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const MainContainer = styled.View`
    backgroundColor: #222222;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ScrollableContainer = styled.ScrollView`
    margin-top: 5px;
`;

export const Text = styled.Text`
    color: #D9D9D9;
    margin: 0 15px;
`;

export const ScrollableStylesheet = StyleSheet.create({
    flex: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
        flexDirection: "row",
        flexWrap: "wrap"
    }
})

export const PaginationHolder = styled.View`
    flex-direction: row;
    align-self: stretch;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 5px;
`;

export const Button = styled.Button``;
export const HeaderHolder = styled.View``;