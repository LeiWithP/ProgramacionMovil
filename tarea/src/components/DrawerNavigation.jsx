const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Page2" component={Page2} />
      {/* Add more screens as needed */}
    </Drawer.Navigator>
  );
};
