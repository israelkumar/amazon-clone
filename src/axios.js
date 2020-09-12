import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'http://localhost:5001/challenge-1453b/us-central/api'
    
});

export default instance;