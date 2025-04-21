import { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface ButtonProps {
    children: ReactNode;
}

export default function Button(props: ButtonProps) {
    const { children } = props;

    const hanldePress = () => {
        console.log('button pressed');
    };

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                onPress={hanldePress}
                android_ripple={{ color: '#5B2E9A' }}
                style={({ pressed }) =>
                    pressed
                        ? [styles.buttonInnerContainer, styles.pressed]
                        : styles.buttonInnerContainer
                }
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: '#6A2C91',
        paddingVertical: 8,
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
    },
    pressed: {
        opacity: 0.75,
    },
});
