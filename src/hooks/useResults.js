import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);

  const searchApi =async (searchTerm) => {
    yelp
      .get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "Istanbul",
        },
      })
      .then((response) => {
        setResults(response.data.businesses);
      });
  };

  useEffect(() => {
    searchApi("kebab");
  }, []);

  return [searchApi,results];
};
