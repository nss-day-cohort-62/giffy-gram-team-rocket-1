
const applicationElement = document.querySelector(".giffygram")


const applicationState = {
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    },
    users: [],
    posts: []
}

const apiURL = "http://localhost:8088"

export const fetchUsers = () => {
    return fetch(`${apiURL}/users`)
        .then(response => response.json())
        .then(
            (usersFetched) => {
                // Store the external state in application state
                applicationState.users = usersFetched
            }
        )
}

export const getUsers = () => {
     return applicationState.users.map(user => ({...user}))

}
export const getPosts = () => {
    return applicationState.posts.map(post => ({...post}))
}
export const getMessages = () => {
    return applicationState.messages.map(message => ({...message}))
}
export const sendUser = (user) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }


    return fetch(`${apiURL}/users`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
        })
}
export const fetchPosts = () => {
    return fetch(`${apiURL}/posts`)
        .then(response => response.json())
        .then(
            (postsFetched) => {
                // Store the external state in application state
                applicationState.posts = postsFetched
            }
        )
}
export const fetchMessages = () => {
    return fetch(`${apiURL}/messages`)
        .then(response => response.json())
        .then(
            (messagesFetched) => {
                // Store the external state in application state
                applicationState.messages = messagesFetched
            }
        )
}
export const sendPosts = (post) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    }


    return fetch(`${apiURL}/posts`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
    })
}
export const sendMessage = (message) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    }


    return fetch(`${apiURL}/messages`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
    })
}
