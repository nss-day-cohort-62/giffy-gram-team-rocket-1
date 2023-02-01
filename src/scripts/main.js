import { LoginForm } from "./auth/Login.js"
import { fetchMessages, fetchPosts, fetchUsers } from "./data/provider.js"
import { GiffyGram } from "./GiffyGram.js"


const applicationElement = document.querySelector(".giffygram")

export const renderApp = () => {
    const user = parseInt(localStorage.getItem("gg_user"))
    fetchUsers()
    .then(
        () => 
    fetchPosts())
    .then(
        () =>
    fetchMessages())
    .then(
        () => {
    if (user) {
        applicationElement.innerHTML = GiffyGram()
    } else {
       applicationElement.innerHTML = LoginForm()
    }
})
}
renderApp()


applicationElement.addEventListener(
    "stateChanged",
    customEvent => {
        renderApp()
    }
)
/*
export const renderPost = () => {
    newPost.innerHTML = createPost()
}
*/