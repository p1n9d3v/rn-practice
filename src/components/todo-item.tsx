import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../constants/theme';
import { Checkbox } from 'react-native-paper';
import { useState } from 'react';
import { Entypo } from 'expo-vector-icons';

export const TodoItem = () => {
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
                Lorem Ipsum is simply dummy text of | the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
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
