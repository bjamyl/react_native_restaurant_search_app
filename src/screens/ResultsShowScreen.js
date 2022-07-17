import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [result, setResult] = useState(null);
  console.log(result);

  //WE NEED A HELPER FUNCTION TO HELP US MAKE THE REQUEST TO THE YELP API
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if(!result){
    return null
  }

  return (
    <View>
      <Text style={styles.title}>{result.name}</Text>
      <FlatList
      data={result.photos}
      keyExtractor={(photo) => photo}
      renderItem={({item}) => {
        return <Image style={styles.image} source={{uri: item}}/>

      }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    marginBottom: 10,
    marginLeft:15
  },
  title: {
    fontSize: 18,
    marginLeft: 15,
    marginVertical:10,
    fontWeight: 'bold'
  }
});

export default ResultsShowScreen;
