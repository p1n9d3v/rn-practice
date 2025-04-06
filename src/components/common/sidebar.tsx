import {
    createDrawerNavigator,
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';
import { theme } from '../constants/colors';
import { HomeScreen } from '../screens/home';
import { DayScreen } from '../screens/day';

const PATHS = ['Home', 'Day', 'Up Coming', 'Tasks'];
type DrawerParamList = {
    Home: undefined;
    Day: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerContent = (props: DrawerContentComponentProps) => {
    const { state, navigation } = props;
    console.log(state);
    return (
        <DrawerContentScrollView style={styles.container}>
            {PATHS.map((path, index) => (
                <DrawerItem
                    key={path}
                    label={path}
                    focused={state.index === index}
                    onPress={() => navigation.navigate(path)}
                    labelStyle={styles.itemLabel}
                    activeBackgroundColor={theme.colors.primary}
                />
            ))}
        </DrawerContentScrollView>
    );
};

export const SidebarDrawer = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
            screenOptions={{
                headerShown: false,
                drawerPosition: 'left',
                drawerStyle: {
                    backgroundColor: theme.colors.background,
                    width: 240,
                },
                drawerActiveTintColor: theme.colors.primary,
            }}
        >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Day" component={DayScreen} />
        </Drawer.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    itemLabel: {
        color: theme.colors.text,
    },
});
