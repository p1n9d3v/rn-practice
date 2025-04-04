import { MaterialIcons } from 'expo-vector-icons';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { colors, theme } from '../constants/colors';

export const Header = () => {
    return (
        <Appbar.Header style={styles.header}>
            <View>
                <View>
                    <TouchableOpacity>
                        <MaterialIcons
                            name="menu"
                            size={24}
                            color={colors.gray[400]}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </Appbar.Header>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: theme.background,
        borderBottomWidth: 1,
        borderBottomColor: theme.border,
    },
});
