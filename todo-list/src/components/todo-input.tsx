import { useState } from 'react';
import { Modal, ModalProps, StyleSheet, TextInput, View } from 'react-native';
import { Button } from 'react-native-paper';
import { theme } from '../constants/theme';

interface TodoInputProps {
    onAddTodo: (text: string) => void;
    modalProps?: ModalProps;
}

export const TodoInput = (props: TodoInputProps) => {
    const { onAddTodo, modalProps } = props;
    const [text, setText] = useState('');

    const addTodoHandler = () => {
        if (text.length === 0) return;
        onAddTodo(text);
        setText('');
    };

    return (
        <Modal {...modalProps} animationType="slide">
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    value={text}
                    onChangeText={setText}
                />
                <View style={styles.actions}>
                    <Button
                        mode="contained"
                        style={styles.button}
                        onPress={addTodoHandler}
                    >
                        Add
                    </Button>
                    <Button
                        mode="contained"
                        style={styles.button}
                        onPress={modalProps?.onRequestClose}
                    >
                        Cancel
                    </Button>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        display: 'flex',
        flexDirection: 'row',
        gap: theme.spacing.sm,
        marginBottom: theme.spacing.md,
    },
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        borderWidth: 1,
        borderColor: theme.colors.border,
        color: theme.colors.text,
        padding: theme.spacing.sm,
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: theme.spacing.sm,
    },
    button: {
        flex: 1,
        borderRadius: theme.borderRadius.xs,
    },
});
