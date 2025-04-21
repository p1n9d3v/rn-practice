import Button from '@/components/button';
import { StyleSheet, TextInput, View } from 'react-native';

export default function Index() {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="decimal-pad"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <View style={styles.actionContainer}>
                <View style={styles.buttonContainer}>
                    <Button>Reset</Button>
                </View>
                <View style={styles.buttonContainer}>
                    <Button>Confirm</Button>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: '#27063c',
        borderRadius: 8,
        elevation: 4, // android only
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    numberInput: {
        width: 50,
        height: 60,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    actionContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
    },
    buttonContainer: {
        flex: 1,
    },
});
