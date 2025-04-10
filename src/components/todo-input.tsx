import { StyleSheet, TextInput, View } from 'react-native';
import { theme } from '../constants/theme';
import { Button } from 'react-native-paper';
import { useState } from 'react';

interface TodoInputProps {
    addTodo: (text: string) => void;
}

export const TodoInput = (props: TodoInputProps) => {
    const { addTodo } = props;
    const [text, setText] = useState('');

    const addTodoHandler = () => {
        if (text.length === 0) return;
        addTodo(text);
        setText('');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={text}
                onChangeText={setText}
            />
            <Button
                mode="outlined"
                style={styles.submitButton}
                onPress={addTodoHandler}
            >
                Add
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        gap: theme.spacing.sm,
        marginBottom: theme.spacing.md,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: theme.colors.border,
        color: theme.colors.text,
        padding: theme.spacing.sm,
    },
    submitButton: {
        borderRadius: 0,
        borderColor: theme.colors.border,
    },
});
