import { sendPosts, getPosts, getUsers, getFavorites, sendFavorite, deletePost, getSelectedUser, setSelectedUser, setSelectedDate, getSelectedDate, getSelectedFavorite, setSelectedFavorite } from "../data/provider.js"

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
document.addEventListener(
    "change", 
    (event) => {
    if(event.target.id === "date") {

       // const selectedUser = document.querySelector('select[class="users"]').value 
       setSelectedDate(parseInt(event.target.value))
      // 
    }
})

document.addEventListener(
    "change", 
    (event) => {
    if(event.target.id === "users") {

       // const selectedUser = document.querySelector('select[class="users"]').value 
       setSelectedUser(parseInt(event.target.value))
      // 
    }
})
document.addEventListener(
    "click", 
    clickEvent => {
        const itemClicked = clickEvent.target.id
        if(itemClicked.startsWith("usersClicked")) {
            const [,userPrimaryKey] = itemClicked.split("--")

       // const selectedUser = document.querySelector('select[class="users"]').value 
       setSelectedUser(parseInt(userPrimaryKey))
      // 
    }
})

document.addEventListener(
    "change", 
    (event) => {
    if(event.target.name === "favoritesCheckbox") {
        const selectedFavorite = getSelectedFavorite()
       // const selectedUser = document.querySelector('select[class="users"]').value 
       if (selectedFavorite.userId === 0) {
           setSelectedFavorite(parseInt(localStorage.getItem("gg_user")))
        } else {
           setSelectedFavorite(0)
       }
    }
})




export const createPost = () => {
    return `<button class="button" id="closedWindow">x</button>
    <div class="newPost">

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
/*
const filterYear =(arr,years)=>{
 const activitiesByYear = .filter(({date})=> [...years].includes(date.slice(-4)))
 return activitiesByYear */

 //const filterYear =(posts,years)=>{
  //  const postsByYear = posts.filter(({date})=> [...years].includes(date.slice(-4)))
  //  return postsByYear }

export const PostList = () => {
    let posts = getPosts()
    const users = getUsers()
    const favorites = getFavorites()
    let selectedUser = getSelectedUser()
    let selectedDate = getSelectedDate()
    let selectedFavorite = getSelectedFavorite()
    
    let html = '<ul>'
    if(selectedUser.id === 0) {
        posts = posts
       }
       else if(selectedUser)
       {posts = posts.filter(post =>(post.userId === selectedUser.id))}


    if(selectedDate.value === 0) {
        posts = posts
    }
    else if (selectedDate) {
       //let postYears = filterYear(posts, selectedDate.value)
       posts = posts.filter(post =>(parseInt(post.date.slice(-4)) >= selectedDate.value))
        }
    
    if (selectedFavorite.userId === 0) {
        posts = posts
    } else if (selectedFavorite) {
        let postsFavorited = []
        for (const favorite of favorites) {
            for (const post of posts) {
                if (favorite.userId === selectedFavorite.userId){
                    if (favorite.postId === post.id) {
                        postsFavorited.push(post)
                    }
                }
            }
            
            //posts = posts.filter(post => (favorite.userId === selectedFavorite.userId && post.id === favorite.postId))
        
        }
        posts = postsFavorited
    }
    
   
    for(const post of posts) {
        let favoriteStar = `<img id ="favoriteButton--${post.id}" src="../../images/favorite-star-blank.svg" width="10px" height="10px" />`
        const foundUser = users.find((user) => {
            return user.id === post.userId
        })
        html+= `<li class= "post">
        <h2>${post.title}</h2>
        <img class="post__image" src='${post.URL}'/>
        <p>${post.story}</p>
        <p>Posted by <a href ="" id ="usersClicked--${foundUser.id}" >${foundUser.name}</a> on ${post.date}</p>`
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


