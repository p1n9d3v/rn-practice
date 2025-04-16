import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ButtonProps {
    children: ReactNode;
}

export default function Button(props: ButtonProps) {
    const { children } = props;

    return (
        <View>
            <Text>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});
