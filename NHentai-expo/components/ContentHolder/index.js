import React from 'react';
import MenuProvider from '../../contexts/MenuContext/provider.js';

import { ContentContainer } from './styles';

function ContentHolder({ children }) {
 
    return(
        <ContentContainer>
            <MenuProvider>
                {children}
            </MenuProvider>
        </ContentContainer>
    );
}

export default ContentHolder;