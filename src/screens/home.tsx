import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { TodoInput } from '../components/todo-input';
import { TodoItem } from '../components/todo-item';
import { theme } from '../constants/theme';
import { Header } from '../layout/header';

interface Todo {
    id: string;
    text: string;
}

export const HomeScreen = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (text: string) => {
        setTodos([...todos, { id: Date.now().toString(), text }]);
    };

    const deleteTodoHandler = (id: string) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.body}>
                <TodoInput onAddTodo={addTodoHandler} />
                <ScrollView
                    contentContainerStyle={styles.listSection}
                    alwaysBounceVertical={false}
                >
                    {todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            text={todo.text}
                            onDeleteItem={() => deleteTodoHandler(todo.id)}
                        />
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    body: {
        padding: theme.spacing.md,
    },
    listSection: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing.sm,
    },
});
