import { DrawerActions, useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { colors, theme } from '../constants/colors';

export const Header = () => {
    const navigation = useNavigation();

    const toggleDrawer = () => {
        navigation.dispatch(DrawerActions.toggleDrawer());
    };

    return (
        <Appbar.Header style={styles.header} mode="center-aligned">
            <Appbar.Action
                icon="menu"
                onPress={toggleDrawer}
                iconColor={colors.gray[400]}
                size={20}
            />
            <Appbar.Content
                title="Home"
                titleStyle={{ color: colors.gray[400] }}
            />
            <Appbar.Action
                icon="calendar"
                iconColor={colors.gray[400]}
                size={20}
            />
            <Appbar.Action
                icon="login"
                iconColor={colors.gray[400]}
                size={20}
            />
        </Appbar.Header>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: theme.colors.background,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
        display: 'flex',
        justifyContent: 'space-between',
    },
    loginButton: {
        color: theme.colors.text,
    },
});
