export default class Gif {
    constructor(data) {
        this.title = data.title
        this.url = data.embed_url || data.url
        this._id = data._id || ""
    }

    get Template() {
        return /*html*/ `
        <iframe src="${this.url}"></iframe>
        <br></br>
        <button type="button" class="btn btn-success"
            onclick="app.gifsController.addGifAsync()">Add</button>`
    }
    get savedTemplate() {
        return /*html*/ `
        <iframe src="${this.url}"></iframe>
        <br></br>
        <button type="button" class="btn btn-danger"
            onclick="app.gifsController.deleteGifAsync('${this._id}')">Delete</button>
        <br></br>`
    }
}