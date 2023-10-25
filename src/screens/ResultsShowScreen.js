import { StyleSheet, Text, View,FlatList,Image } from "react-native";
import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ route }) => {
  const [result, setResult] = useState(null);

  const id = route.params.id;

  const getResult = (id) => {
    yelp.get(`/${id}`).then((res) => {
      setResult(res.data);
    });
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }
  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(item)=>item}
        renderItem={({item})=>{
            return <Image style={styles.image} source={{uri:item}}/>
        }}
      />
    </View>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({
    image:{
        height:200,
        width:300
    }
});
