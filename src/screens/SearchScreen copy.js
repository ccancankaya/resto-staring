import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [result, setResults] = useState([]);

  const searchApi = () => {
    yelp.get("/search",{
      params:{
        limit:50,
        term,
        location:'Istanbul'
      }
    }).then(response=>{
      setResults(response.data.businesses)
    });
    
    
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={searchApi}
      />
      <Text>SearchScreen</Text>
      <Text>We hav found {result.length} results</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
