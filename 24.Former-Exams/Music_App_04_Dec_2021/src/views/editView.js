import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import * as albumService from '../services/albumService.js';
import { albumIsInvalid } from '../utils/validators.js'

const editTemplate = (album, submitHandler) => html `
        <!--Edit Page-->
        <section class="editPage">
            <form @submit=${submitHandler}, method="POST">
                <fieldset>
                    <legend>Edit Album</legend>

                    <div class="container">
                        <label for="name" class="vhide">Album name</label>
                        <input id="name" name="name" value=${album.name} class="name" type="text" >

                        <label for="imgUrl" class="vhide">Image Url</label>
                        <input id="imgUrl" name="imgUrl" value=${album.imgUrl} class="imgUrl" type="text" >

                        <label for="price" class="vhide">Price</label>
                        <input id="price" name="price" value=${album.price}  class="price" type="text" >

                        <label for="releaseDate" class="vhide">Release date</label>
                        <input id="releaseDate" name="releaseDate" value=${album.releaseDate}  class="releaseDate" type="text" >

                        <label for="artist" class="vhide">Artist</label>
                        <input id="artist" name="artist" value=${album.artist} class="artist" type="text" >

                        <label for="genre" class="vhide">Genre</label>
                        <input id="genre" name="genre" value=${album.genre} class="genre" type="text" >

                        <label for="description" class="vhide">Description</label>
                        <textarea name="description" .value=${album.description} class="description" rows="10" cols="10"></textarea>

                        <button class="edit-album" type="submit">Edit Album</button>
                    </div>
                </fieldset>
            </form>
        </section>
`;

export const editView = (ctx) => {
    const albumId = ctx.params.albumId;
    const submitHandler = (e) => {

        e.preventDefault() 

        const albumData = Object.fromEntries(new FormData(e.currentTarget));

        if (albumIsInvalid(albumData)) {
            alert('All fields should be filled')
             return;
         }  

         albumService.edit(albumId, albumData)
         .then(() => {
            ctx.page.redirect(`/albums/${albumId}`)
         })
        
    }

    albumService.getOne(ctx.params.albumId)
    .then(album => {
        ctx.render(editTemplate(album, submitHandler))
    });
}

