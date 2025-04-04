import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { theme } from '../constants/colors';
import { Header } from '../layouts/header';

export const HomeScreen = () => {
    const navigation = useNavigation();
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
        backgroundColor: theme.background,
    },
});
