import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 399b93bf285a33dd737852410b5d2c1d1148c1d6ae8861e340c85564a30a280b"
  }
});
