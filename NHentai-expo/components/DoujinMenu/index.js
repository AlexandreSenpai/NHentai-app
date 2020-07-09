import React from 'react';
import { TouchableHighlight } from 'react-native';

import { MenuContainer, Pointer, MenuHolder } from './styles';

function DoujinMenu({ previous_page, next_page, totalPages, page  }) {
    return(
        <MenuContainer>
            <MenuHolder>
                <TouchableHighlight onPress={() => { previous_page(totalPages) }} >
                    <Pointer>{'<<'}</Pointer>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => { previous_page(1) }} >
                    <Pointer>{'<'}</Pointer>
                </TouchableHighlight>
                <Pointer>{page + 1} de {totalPages}</Pointer>
                <TouchableHighlight onPress={() => { next_page(1) }} >
                    <Pointer>{'>'}</Pointer>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => { next_page(totalPages) }} >
                    <Pointer>{'>>'}</Pointer>
                </TouchableHighlight>
            </MenuHolder>
        </MenuContainer>
    );
}

export default DoujinMenu;