import { Entypo } from 'expo-vector-icons';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { theme } from '../constants/theme';

interface TodoProps {
    text: string;
    onDeleteItem: () => void;
}

export const TodoItem = (props: TodoProps) => {
    const { text, onDeleteItem } = props;

    const [checked, setChecked] = useState(false);

    return (
        <Pressable
            android_ripple={{
                color: theme.colors.primary,
            }}
            onPress={onDeleteItem}
            style={{
                padding: 1,
            }}
        >
            <View style={styles.container}>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked);
                    }}
                    color={theme.colors.primary}
                />
                <Text
                    style={[
                        styles.text,
                        {
                            textDecorationLine: checked
                                ? 'line-through'
                                : 'none',
                        },
                    ]}
                    numberOfLines={2}
                >
                    {text}
                </Text>
                <Entypo
                    name="dots-three-vertical"
                    size={12}
                    color={theme.colors.text}
                />
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: theme.spacing.sm,
        padding: theme.spacing.sm,
        backgroundColor: theme.colors.backgroundLight,
    },
    text: {
        flex: 1,
        color: theme.colors.text,
    },
});
