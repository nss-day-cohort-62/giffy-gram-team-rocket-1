import { sendPosts } from "../data/provider.js"

const postForm = document.querySelector(".post")

document.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "submitRequest") {
        const userTitle = document.querySelector("input[name='Title']").value
        const userURL = document.querySelector("input[name='URL']").value
        const userStory = document.querySelector("input[name='story']").value
        const postUser = parseInt(localStorage.getItem("gg_user"))
       
        const postData = {
            title: userTitle,
            URL: userURL,
            story: userStory,
            userId: postUser,
            date: new Date().toLocaleDateString()

        }
        sendPosts(postData)
    }
})





export const createPost = () => {
    return `<div class="post">
    <input type="text" name="Title" class="input" placeholder = "Title"/>
</div>
<div class="post">
    <input type="text" name="URL" class="input" placeholder = "URL of GIF"/>
</div>

<div class="post">
    
    <input type="text" name="story" class="input" placeholder = "Story behind your GIF"/>
    <button class="button" id="submitRequest">  Submit Post </button>
</div>


`

}
