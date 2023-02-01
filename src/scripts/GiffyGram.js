import { Header } from "./nav/Header.js"
import { Footer } from "./nav/Footer.js"
import { createPost } from "./feed/PostList.js"




document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "postButton") {
        renderPost()
       /* applicationElement.addEventListener(
            "stateChanged",
            customEvent => {
                renderApp()
            }

    */
    }


})



export const renderPost = () => {
    const newPost = document.querySelector(".postForm")
    newPost.innerHTML = createPost()
    //document.dispatchEvent( new CustomEvent("stateChanged"))
}




export const GiffyGram = () => {

    // Show main main UI
    return `<div class="navigation">${Header()}</div>
    <div class="messages"></div>
    <div class="postForm"><button id ="postButton">create post</button></div>
    
    <footer>${Footer()}</footer>
    `
}
