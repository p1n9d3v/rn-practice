import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Header } from '../common/header';
import { theme } from '../constants/colors';

export const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Text>Home Screen</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
});
