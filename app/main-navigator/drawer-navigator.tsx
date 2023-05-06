import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { ROUTES_NAMES } from '../utils/constants';
import Dashboard from '../screens/dashboard';



// const Drawer = createDrawerNavigator();

export default function DashboardNavigation() {
  return (
    <NavigationContainer>

      {/* <Drawer.Navigator initialRouteName={ROUTES_NAMES.dashboard}>
      <Drawer.Screen name={ROUTES_NAMES.dashboard} component={Dashboard} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
}
