import axios from 'axios';
import {api} from '../config'; 
export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    try {
      const res = await axios(
        `${api}/search?&q=${this.query}`
      );
      this.results = res.data.recipes;
    } catch (error) {
      console.log(error);
    }
  }
}
