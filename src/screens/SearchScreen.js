import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("₺")}
          title="Cost Effective"

        />
        <ResultsList
          results={filterResultsByPrice("₺₺")}
          title="Bit Pricier"

        />
        <ResultsList
          results={filterResultsByPrice("₺₺₺")}
          title="Big Spender"

        />
        <ResultsList
          results={filterResultsByPrice("₺₺₺")}
          title="Big Spender"

        />
      </ScrollView>

      {/* <Text>We have found {results.length} results</Text> */}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
