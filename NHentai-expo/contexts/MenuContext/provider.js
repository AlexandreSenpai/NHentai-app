import React, { useState } from 'react';

import Context from './index';

function provider({ children }) {

    const [ isToggled, setIsToggled ] = useState(false);

    return(
        <Context.Provider value={{ isToggled, setIsToggled }}>
            {children}
        </Context.Provider>
    )
    
}

export default provider;