import store from "../store.js";
import Gif from "../Models/Gif.js";

// @ts-ignore
let _giphyApi = axios.create({
  baseURL: "http://api.giphy.com/v1/gifs/random?&rating=PG&api_key=WS2OPFduBOJZoMwsekYJ5p3XDOc8ttnf"
})
// @ts-ignore
let _sandBox = axios.create({
  baseURL: "http://bcw-sandbox.herokuapp.com/api/JohnBonde/gifs"
})
class GifsService {
  constructor() {

  }
  async deleteGifAsync(url) {

    await _sandBox.delete(url)
    this.getMyGifsAsync()
  }
  async addGifAsync() {
    let gif = store.State.activeGif
    let res = await _sandBox.post("", gif)
    console.log("from add", res);
    this.getMyGifsAsync()
  }
  async getMyGifsAsync() {
    let res = await _sandBox.get()
    store.commit("myGifs", res.data.data.map(g => new Gif(g)))
    console.log("from store gifs", store.State.myGifs);
  }
  async loadGifAsync() {
    let res = await _giphyApi.get()
    console.log("from load", res);
    store.commit("activeGif", new Gif(res.data.data))
  }
}

const service = new GifsService();
export default service;
