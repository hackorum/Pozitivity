import React from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class Input extends React.Component {
  constructor() {
    super();
    (this.array = [
      {
        title: 'You Are Grateful For: ',
      },
    ]),
      (this.state = {
        list: [],
        textInput_Holder: '',
        smiles: 0,
      });
  }
  joinData = () => {
    this.array.push({ title: this.state.textInput_Holder });
    this.setState({ list: [...this.array], smiles: this.state.smiles + 1 });
  };

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#1f3c88',
        }}
      />
    );
  };
  GetItem(item) {
    Alert.alert(item);
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        {this.props.showSmiles ? (
          <View>
            <Text style={{ fontSize: 20 }}>
              Smile Points: {this.state.smiles}😊
            </Text>
          </View>
        ) : (
            false
          )}
        <TextInput
          placeholder="Enter Anything You Are Grateful For..."
          onChangeText={(text) => this.setState({ textInput_Holder: text })}
          style={styles.textInputStyle}
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity onPress={this.joinData} style={styles.button}>
          <Text style={styles.buttonText}> Submit </Text>
        </TouchableOpacity>
        <FlatList
          data={this.state.list}
          width="100%"
          extraData={this.state.list}
          keyExtractor={(index) => index.toString()}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({ item }) => (
            <Text
              style={styles.item}
              onPress={this.GetItem.bind(this, item.title)}>
              {item.title}
            </Text>
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 2,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  textInputStyle: {
    textAlign: 'center',
    height: 40,
    width: '90%',
    borderWidth: 1,
    borderColor: '#ee6f57',
    borderRadius: 7,
    marginTop: 12,
  },
  button: {
    width: '90%',
    height: 40,
    padding: 10,
    backgroundColor: '#30475e',
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
