import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <ThemeProvider value={DefaultTheme}>
            <Stack
                screenOptions={{
                    headerShown: false,
                    // contentStyle: {
                    //     backgroundColor: '#27063c',
                    // },
                }}
                screenLayout={({ children }) => {
                    return (
                        <LinearGradient
                            colors={['#27063C', '#1E90FF']}
                            style={{ flex: 1 }}
                        >
                            {children}
                        </LinearGradient>
                    );
                }}
            >
                <Stack.Screen name="index" />
                <Stack.Screen name="+not-found" />
            </Stack>
            <StatusBar style="auto" />
        </ThemeProvider>
    );
}
