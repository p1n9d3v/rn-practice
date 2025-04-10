import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../constants/theme';
import { Checkbox } from 'react-native-paper';
import { useState } from 'react';
import { Entypo } from 'expo-vector-icons';

interface TodoProps {
    text: string;
}

export const TodoItem = (props: TodoProps) => {
    const { text } = props;

    const [checked, setChecked] = useState(false);

    return (
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
                        textDecorationLine: checked ? 'line-through' : 'none',
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
