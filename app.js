import React, { useState } from "react";
import {
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
  Button,
} from "react-native";

import { connect } from "react-redux";
import { fetchData } from "./actions";

let styles;

function App(props) {
  const { container, text, button, buttonText, mainContent } = styles;

  // const [count, setCount] = useState(0);

  return (
    <View style={container}>
      <Text style={text}>Redux Examples</Text>
      <TouchableHighlight style={button} onPress={() => props.fetchData()}>
        <Text style={buttonText}>Load Data</Text>
      </TouchableHighlight>
      <View style={mainContent}>
        {props.appData.isFetching && <Text>Loading</Text>}
        {props.appData.data.length
          ? props.appData.data.map((results, i) => {
              return (
                <View key={i}>
                  <Text>Name: {results.original_title}</Text>
                  <Text>Age: {results.release_date}</Text>
                </View>
              );
            })
          : null}
      </View>
      {/* <Button style={button} onPress={() => setCount(count + 1)} />
      <Text> You click {count} times</Text> */}
    </View>
  );
}

styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  text: {
    textAlign: "center",
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0b7eff",
  },
  buttonText: {
    color: "white",
  },
  mainContent: {
    margin: 10,
  },
});

function mapStateToProps(state) {
  return {
    appData: state.appData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(fetchData()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
