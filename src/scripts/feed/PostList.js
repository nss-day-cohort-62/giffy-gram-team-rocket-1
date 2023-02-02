import { sendPosts, getPosts, getUsers, getFavorites, sendFavorite, deletePost, getSelectedUser, setSelectedUser } from "../data/provider.js"

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

document.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("favoriteButton")) {
        const [,postPrimaryKey] = clickEvent.target.id.split("--")
        const userId = parseInt(localStorage.getItem("gg_user"))
        
         
        const favoriteData = {
            userId: userId,
            postId: parseInt(postPrimaryKey)

        }
        sendFavorite(favoriteData)
    }
})
document.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("deleteButton")) {
        const [,postPrimaryKey] = clickEvent.target.id.split("--")
       
        deletePost(postPrimaryKey)
    }
})
document.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "users") {

        const selectedUser = document.querySelector('select[class="users"]').value 
       setSelectedUser(parseInt(selectedUser))
       
    }
})
export const createPost = () => {
    return `<div class="newPost">
    <button class="button" id="closeMessage">x</button>
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
    let posts = getPosts()
    const users = getUsers()
    const favorites = getFavorites()
    const selectedUser = getSelectedUser()

    let html = '<ul>'
    if(selectedUser) {
    posts = posts.filter(post =>(post.userId === selectedUser))
    
    } 
    for(const post of posts) {
        let favoriteStar = `<img id ="favoriteButton--${post.id}" src="../../images/favorite-star-blank.svg" width="10px" height="10px" />`
        const foundUser = users.find((user) => {
            return user.id === post.userId
        })
        html+= `<li class= "post">
        <h2>${post.title}</h2>
        <img src='${post.URL}'/>
        <p>${post.story}</p>
        <p>Posted by ${foundUser.name} on ${post.date}</p>`
        for(const favorite of favorites){
            if(favorite.userId === parseInt(localStorage.getItem("gg_user")) && favorite.postId === post.id){
                favoriteStar = `<img id ="favoriteButton--${post.id}" src="../../images/favorite-star-yellow.svg" width="10px" height="10px" />`
            }
        }
        html+= `${favoriteStar}`
        if(foundUser.id === parseInt(localStorage.getItem("gg_user"))) {
        html += ` <img id="deleteButton--${post.id}" src="../../images/block.svg" width="10px" height="10px" /> `
         }
        html+=`</li>`
        favoriteStar = `<img id ="favoriteButton--${post.id}" src="../../images/favorite-star-blank.svg" width="10px" height="10px" />`
        
    }
    html += '</ul>'
    
    return html
}


