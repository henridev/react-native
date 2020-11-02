import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ColorScreen from "./src/view/ColorScreen";
import ComponentScreen from "./src/view/ComponentScreen";
import CounterScreen from "./src/view/CounterScreen";
import HomeScreen from "./src/view/HomeScreen";
import ImageScreen from "./src/view/ImageScreen";
import ListScreen from "./src/view/ListScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "my first react native app",
    },
  }
);

export default createAppContainer(navigator);
