import { StyleSheet } from 'react-native';

const text_primary = '#d9d9d9';
const background_primary = '#0D0D0D';
const background_secundary = '#1f1f1f';

const styles = StyleSheet.create({     
    main_background: {
        backgroundColor: background_primary,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    
    main_input: {
        backgroundColor: text_primary,
        height: 32,
        marginBottom: 5,
    },

    image_holder: {
        marginBottom: 20,
    },

    form_holder: {
        alignSelf: 'stretch',
    },

    main: {
        padding: 0, 
        justifyContent: "flex-start"
    },

    navbar: {
        height: 45,
        backgroundColor: background_secundary,
        alignSelf: 'stretch',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "space-around",
        padding: 10,
    },

    logo_holder: {
        width: 38,
        height: 21,
        marginRight: 5,
    },

    logo_holder_image: {
        width: 38,
        height: 21,
    },

    search_holder: {
        backgroundColor: text_primary,
        borderRadius: 5,
        width: 169,
        height: 19,
        color: 'black',
    },

    search_input: {
        paddingLeft: 5,
    },

    menu_holder: {
        flexDirection: 'row',
        justifyContent: "space-around"
    },

    menu_item: {
        color: text_primary,
        marginLeft: 5,
        marginRight: 5,
    },

    content: {
        marginTop: 5,
        alignSelf: 'stretch',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: "center",
    },  

    mini_box: {
        width: 109,
        height: 170,
        marginLeft: 2.5,
        marginRight: 2.5,
        marginBottom: 2,
        backgroundColor: background_secundary,
    },

    mini_box_desc: {
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'space-between',
        overflow: 'hidden',
    },

    mini_box_text: {
        color: text_primary,
        fontSize: 10,
    },

    mini_box_image_holder: {
        width: 109,
        height: 155,
    },

    mini_box_image: {
        width: 109,
        height: 155,
    },

    gallery_image: {
        width: 337,
        height: 484,
    },

    gallery_holder: {
        justifyContent: 'space-around',
        alignItems: "center",
        alignSelf: 'stretch',
    },

    gallery_point: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 10,
        backgroundColor: background_secundary,
        borderRadius: 10,
        width: 200,
    },

    pointer: {
        color: text_primary,
        fontSize: 15,
        marginLeft: 5,
        marginRight: 5,
        fontWeight: 'bold',
    },

    pagination_holder: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
        marginBottom: 5,
    },

    pagination_text:{
        color: text_primary,
        marginLeft: 10,
        marginRight: 10,
    },

    lang: {
        width: 8,
        height: 8,
        marginRight: 2,
    }

});

export default styles;