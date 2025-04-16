import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Header } from '../layout/header';
import { theme } from '../constants/theme';

export const DayScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Text style={{ color: 'white' }}>Day Screen</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
});
