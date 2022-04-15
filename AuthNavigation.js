import React from "react";
import Register from "../screen/Register";
import Login from "../screen/Login";
import Forgotpassword from "../screen/Forgotpassword";
import ResetPassword from "../screen/ResetPassword";

import { createStackNavigator } from "@react-navigation/stack";
const AuthStack = createStackNavigator();

export default function AuthNavigation() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="ResetPassword" component={ResetPassword} />
      <AuthStack.Screen name="Forgotpassword" component={Forgotpassword} />
    </AuthStack.Navigator>
  );
}
