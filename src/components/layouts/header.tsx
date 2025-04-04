import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { colors, theme } from '../constants/colors';

export const Header = () => {
    const handleLogin = () => {
        console.log('login');
    };
    return (
        <Appbar.Header style={styles.header} mode="center-aligned">
            <Appbar.Action
                icon="menu"
                onPress={handleLogin}
                iconColor={colors.gray[400]}
                size={20}
            />
            <Appbar.Content
                title="Home"
                titleStyle={{ color: colors.gray[400] }}
            />
            <Appbar.Action
                icon="calendar"
                onPress={handleLogin}
                iconColor={colors.gray[400]}
                size={20}
            />
            <Appbar.Action
                icon="login"
                onPress={handleLogin}
                iconColor={colors.gray[400]}
                size={20}
            />
        </Appbar.Header>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: theme.background,
        borderBottomWidth: 1,
        borderBottomColor: theme.border,
        display: 'flex',
        justifyContent: 'space-between',
    },
    loginButton: {
        color: theme.text,
    },
});
