import React from "react";
import AppNavigator from "./AppNavigator";
import { AppLoading } from "expo";
import * as Font from "expo-font";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      'Krub': require("./assets/fonts/Krub-Medium.ttf"),
      'Krub-Medium': require("./assets/fonts/Krub-SemiBold.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <AppLoading />;
    }

    return <AppNavigator />;
  }
}
