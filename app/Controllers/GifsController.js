import GifsService from "../Services/GifsService.js";
import store from "../store.js";

//Private
function _drawGif() {
  let gifs = store.State.activeGif
  document.getElementById('loaded').innerHTML = gifs.Template
}
function _drawMyGifs() {
  let template = ''
  let gifs = store.State.myGifs
  gifs.forEach(g => template += g.savedTemplate)
  document.getElementById("saved").innerHTML = template
}

//Public
export default class GifsController {
  constructor() {
    store.subscribe("activeGif", _drawGif);
    store.subscribe("myGifs", _drawMyGifs)
    this.getMyGifsAsync()
  }
  async loadGifAsync() {
    try {
      await GifsService.loadGifAsync()
    } catch (error) {
      console.error(error);
    }
  }
  async addGifAsync() {
    try {
      await GifsService.addGifAsync()
    } catch (error) {
      console.error(error);
    }
  }
  async getMyGifsAsync() {
    try {
      await GifsService.getMyGifsAsync()
    } catch (error) {
      console.error(error);
    }
  }
  async deleteGifAsync(url) {
    try {

      await GifsService.deleteGifAsync(url)
    } catch (error) {
      console.error(error);
    }
  }
}
