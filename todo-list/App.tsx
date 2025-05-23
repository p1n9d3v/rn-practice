import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SidebarDrawer } from './src/layout/sidebar';
import { ReactNavigationTheme } from './src/constants/theme';

//TODO:
// - Drawer UI 완성
// - react navigation theme 추가
// - task ui
// - task 추가 ui

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer theme={ReactNavigationTheme}>
                <SidebarDrawer />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
