import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { theme } from './src/components/constants/colors';
import { DayScreen } from './src/components/screens/day';
import { HomeScreen } from './src/components/screens/home';

type DrawerParamList = {
    Home: undefined;
    Day: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

function CustomDrawerContent(props: any) {
    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 20, marginBottom: 20 }}>Menu</Text>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('Home')}
                style={{ padding: 10, borderBottomWidth: 1 }}
            >
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('Day')}
                style={{ padding: 10, borderBottomWidth: 1 }}
            >
                <Text>My Day</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => console.log('Help pressed')}
                style={{ padding: 10 }}
            >
                <Text>Upcoming</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => console.log('Help pressed')}
                style={{ padding: 10 }}
            >
                <Text>All Tasks</Text>
            </TouchableOpacity>
        </View>
    );
}

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Drawer.Navigator
                    drawerContent={(props) => (
                        <CustomDrawerContent {...props} />
                    )}
                    screenOptions={{
                        headerShown: false,
                        drawerPosition: 'left',
                        drawerStyle: {
                            backgroundColor: theme.colors.background,
                            width: 240,
                        },
                    }}
                >
                    <Drawer.Screen name="Home" component={HomeScreen} />
                    <Drawer.Screen name="Day" component={DayScreen} />
                </Drawer.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
