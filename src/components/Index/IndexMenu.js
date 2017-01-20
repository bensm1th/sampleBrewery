import React from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { MenuItem } from '../common';

const IndexMenu = () => {
    const chevron = 'http://cdn.mysitemyway.com/icons-watermarks/flat-square-white-on-black/classic-arrows/classic-arrows_double-chevron-right/classic-arrows_double-chevron-right_flat-square-white-on-black_512x512.png';

    return (
        <View style={styles.bottomStyle}>
            <MenuItem 
                icon='http://www.iconsplace.com/download/white-beer-256.png'
                text='Beer List'
                chevron={chevron}
                link={() => Actions.beerList()}
            />
            <MenuItem 
                icon='http://orpheumbell.com/wp-content/uploads/2010/04/icon-calendar-white.png'
                text='Beer Events'
                chevron={chevron}
                link={() => Actions.beerEvents()}
            />
            <MenuItem 
                icon='http://www.iconsdb.com/icons/download/white/heart-69-512.png'
                text='Loyalty Program'
                chevron={chevron}
                link={() => Actions.loyaltyProgram()}
            />
            <MenuItem 
                icon='http://outinthestreetfilms.com/images/icons/icon_info.png'
                text='About 12welve Eyes'
                chevron={chevron}
                link={() => Actions.about()}
            />
            <MenuItem 
                icon='http://www.iconsplace.com/download/white-login-256.png'
                text='Login / Signup'
                chevron={chevron}
                link={() => Actions.loginSignup()}
            />
        </View>
    );
};

const styles = {
    bottomStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginLeft: 5,
        marginRight: 5
    }
};

export default IndexMenu;
