import { createSwitchNavigator } from "react-navigation";
import Stack from "./src/Stack";
import Splash from "./src/Splash";
import Login from "./src/Login";
import Signup from "./src/Signup";
import GStarted from "./src/GStarted";

// Switch Navigator
const App = createSwitchNavigator(
  {
    Splash,
    Login,
    Signup,
    GStarted,
    Stack
  },
  {
    initialRouteName: "Splash"
  }
);

// App
export default App;
