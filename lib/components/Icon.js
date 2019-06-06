import React from 'react';
import PropTypes from 'prop-types';
// Types
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Zocial from 'react-native-vector-icons/Zocial'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const IconTypes = {
    AntDesign,
    Entypo,
    EvilIcons,
    Feather,
    FontAwesome,
    Foundation,
    Ionicons,
    MaterialIcons,
    MaterialCommunityIcons,
    Octicons,
    Zocial,
    SimpleLineIcons
};

const Icon = ({name, type, ...props})=>{
    let Icon;
    if(IconTypes[type]){
        Icon = IconTypes[type];
        return(
            <Icon name={name} {...props} />
        );
    }
    return null;
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default Icon;
