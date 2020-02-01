import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '../pages/main';
import Gallery from '../pages/gallery';
import Search from '../pages/search';

const Routes = createAppContainer(
    createSwitchNavigator({
        Main,
        Gallery,
        Search,
    })
);

export default Routes;