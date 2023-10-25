import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer aefXs0JysWBe6KE3fE2-wvrL1FgL-DPbVTJncZ4_7viZWr_Laorgs3XHFUJ3pGRJ_MGwtFTf89yBFXQhIBGgtdq9vL7TXvp6bvMMQ5IJpvMnnqlADURaeouMpP80ZXYx",
  },
});
