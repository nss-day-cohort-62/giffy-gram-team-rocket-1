import { Header } from "./nav/Header.js"
import { Footer } from "./nav/Footer.js"
import { createPost, PostList } from "./feed/PostList.js"
import { MessageForm } from "./message/MessageForm.js"




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
document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "createMessagePen") {
        renderMessage()
    }
})


export const renderPost = () => {
    const newPost = document.querySelector(".postForm")
    newPost.innerHTML = createPost()
    //document.dispatchEvent( new CustomEvent("stateChanged"))
}
export const renderMessage = () => {
    const newMessage = document.querySelector(".messages")
    newMessage.innerHTML = MessageForm()
}



export const GiffyGram = () => {

    // Show main main UI
    return `<div class="navigation">${Header()}</div>
    <div class="content">
        <div class="messages"></div>
        <div class="postForm"><button id ="postButton">create post</button></div>
        <div class="postList">${PostList()}</div>
    </div>
    <footer>${Footer()}</footer>
    `
}
