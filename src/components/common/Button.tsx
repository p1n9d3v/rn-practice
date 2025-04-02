import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

interface ButtonProps {
    title: string;
    onPress: () => void;
    iconName?: string;
    disabled?: boolean;
    loading?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
    variant: 'primary' | 'secondary' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    iconName,
    disabled = false,
    loading = false,
    style,
    textStyle,
    variant = 'primary',
}) => {
    const getButtonStyle = () => {
        switch (variant) {
            case 'primary':
                return styles.primaryButton;
            case 'secondary':
                return styles.secondaryButton;
            case 'outline':
                return styles.outlineButton;
            default:
                return styles.primaryButton;
        }
    };

    const getTextStyle = () => {
        switch (variant) {
            case 'primary':
            case 'secondary':
                return styles.buttonText;
            case 'outline':
                return styles.outlineButtonText;
            default:
                return styles.buttonText;
        }
    };

    return (
        <TouchableOpacity
            style={[
                styles.button,
                getButtonStyle(),
                disabled && styles.disabledButton,
                style,
            ]}
            onPress={onPress}
            disabled={disabled || loading}
            activeOpacity={0.8}
        >
            {loading ? (
                <ActivityIndicator size="small" color={colors.white} />
            ) : (
                <>
                    {iconName && (
                        <MaterialIcons
                            name={iconName as any}
                            size={20}
                            color={colors.white}
                            style={styles.icon}
                        />
                    )}
                    <Text style={[getTextStyle(), textStyle]}>{title}</Text>
                </>
            )}
        </TouchableOpacity>
    );
};

export const colors = {
    background: '#111928',
    surface: '#1F2A37',
    primary: '#1C64F2',
    secondary: 'red',
    primaryDark: '#233876',
    primaryLight: '#A4CAFE',
    border: '#374151',
    borderLight: '#4B5563',
    white: '#FFFFFF',
    gray: '#9CA3AF',
    grayLight: '#D1D5DB',
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
    },
    primaryButton: {
        backgroundColor: colors.primary,
    },
    secondaryButton: {
        backgroundColor: colors.secondary,
    },
    outlineButton: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: colors.borderLight,
        borderStyle: 'dashed',
    },
    disabledButton: {
        opacity: 0.6,
    },
    buttonText: {
        color: colors.white,
        fontWeight: '500',
        fontSize: 14,
    },
    outlineButtonText: {
        color: colors.gray,
        fontWeight: '500',
        fontSize: 16,
    },
    icon: {
        marginRight: 8,
    },
});
