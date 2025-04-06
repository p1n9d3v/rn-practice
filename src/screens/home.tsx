import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Header } from '../layout/header';
import { theme } from '../constants/theme';
import { TodoItem } from '../components/todo-item';
import { useState } from 'react';

export const HomeScreen = () => {
    const [todos, setTodos] = useState<string[]>(
        Array.from({ length: 20 }, (_, i) => `Todo ${i}`),
    );
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView
                contentContainerStyle={{
                    padding: theme.spacing.sm,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: theme.spacing.sm,
                }}
                alwaysBounceVertical={false}
            >
                {todos.map((todo) => (
                    <TodoItem key={todo} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
});
