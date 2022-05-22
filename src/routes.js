import react from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./pages/Home";
import New from "./pages/New";
import Notification from "./pages/Notification";
import Profile from "./pages/Profile";
import Search from "./pages/Search";

import { Entypo, Feather } from "@expo/vector-icons";

import ButtonNew from "./components/ButtonNew";

const Tab = createBottomTabNavigator();

export default function Routes(){
  return(
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: "#121212",
        borderTopColor: "transparent",
        height: 60,
        paddingVertical: 5,
      },
      tabBarActiveTintColor: "#fff",
    }}
    >
      
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
          tabBarLabelStyle: {
            marginBottom: 5,
          },
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" size={size} color={color} />
          ),
          tabBarLabelStyle: {
            marginBottom: 5,
          },
        }}
      />

      <Tab.Screen
        name="New"
        component={New}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size, focused }) => (
            <ButtonNew size={size} color={color} focused={focused} />
          ),
          tabBarLabelStyle: {
            marginBottom: 5,
          },
        }}
      />

      <Tab.Screen
        name="Notification"
        component={Notification} options={{ tabBarBadge: 30 }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="notification" size={size} color={color} />
          ),
          tabBarLabelStyle: {
            marginBottom: 5,
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
          tabBarLabelStyle: {
            marginBottom: 5,
          },
        }}
      />

    </Tab.Navigator>
  );
}
