import { useNavigation } from '@react-navigation/native';
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';

export const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <Text>Start Todo List</Text>
            <Button onPress={() => navigation.navigate('Day')} title="Day" />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
