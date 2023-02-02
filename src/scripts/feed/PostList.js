import { sendPosts, getPosts, getUsers } from "../data/provider.js"

const postForm = document.querySelector(".post")

document.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "submitRequest") {
        const userTitle = document.querySelector("input[name='Title']").value
        const userURL = document.querySelector("input[name='URL']").value
        const userStory = document.querySelector("textarea[name='story']").value
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
    return `<div class="newPost">
    <div class="post">
    <input type="text" name="Title" class="input newPost__input" placeholder = "Title"/>
</div>

<div class="post">
    <input type="text" name="URL" class="input newPost__input" placeholder = "URL of GIF"/>
</div>

<div class="post">
    
    <textarea type="text" name="story" class="input newPost__input" placeholder = "Story behind your GIF"></textarea>
    <button class="button" id="submitRequest">  Submit Post </button>
</div>

</div>`
}

export const PostList = () => {
    const posts = getPosts()
    const users = getUsers()

    let html = '<ul>'
    for(const post of posts) {
        const foundUser = users.find((user) => {
            return user.id === post.userId
        })
         html+= `<li class= "post" id='${post.id}'>
        <h2>${post.title}</h2>
        <img src='${post.URL}'/>
        <p>${post.story}</p>
        <p>Posted by ${foundUser.name} on ${post.date}</p>
        </li>
        `
        //insert star here later
    }
    html += '</ul>'
    return html
}