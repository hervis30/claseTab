import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons'

const tabs = createBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <tabs.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: 'pink',
          tabBarActiveBackgroundColor: '#00ff7f',
          tabBarInactiveTintColor: 'black'
        }}
      >
        <tabs.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Inicio', tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={24} />

            )
          }}
        />

        <tabs.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            title: 'Configuracion', tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" color={color} size={20} />
            )
          }}

        />
        <tabs.Screen
          name="Contacts"
          component={ContactScreen}
          options={{
            title: 'person', tabBarIcon: ({ color, size }) => (
              <Ionicons name="people" color={color} size={18} />
            )
          }}
        />


      </tabs.Navigator>
    </NavigationContainer>
  )
}


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>aqui en inicio</Text>
    </View>
  )
}

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>configuaraciones</Text>
    </View>
  )
}

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <Text>contactenos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App