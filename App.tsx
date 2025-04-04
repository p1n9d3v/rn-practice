import {
    createStaticNavigation,
    StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DayScreen } from './src/components/screens/day';
import { HomeScreen } from './src/components/screens/home';

const RootStack = createNativeStackNavigator({
    initialRouteName: 'Home',
    screens: {
        Home: HomeScreen,
        Day: DayScreen,
    },
    screenOptions: {
        headerShown: false,
    },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
    return (
        <SafeAreaProvider>
            <Navigation />
        </SafeAreaProvider>
    );
}

type RootStackParamList = StaticParamList<typeof RootStack>;
declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}
