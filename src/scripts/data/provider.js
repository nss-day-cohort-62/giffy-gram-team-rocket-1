const applicationState = {
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    },
    users: [],
    posts: [],
    favorites: [],
    selectedUser: {id:0},
    selectedDate: {value:0}
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

export const fetchFavorites = () => {
    return fetch(`${apiURL}/favorites`)
        .then(response => response.json())
        .then(
            (favoritesFetched) => {
                // Store the external state in application state
                applicationState.favorites = favoritesFetched
            }
        )
}
export const deletePost = (id) => {
    return fetch(`${apiURL}/posts/${id}`, { method: "DELETE" })
        .then(
            () => {
                document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
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
export const getFavorites = () => {
    return applicationState.favorites.map(favorite => ({...favorite}))
}
export const getSelectedDate = () => {
    return applicationState.selectedDate
}
export const setSelectedDate = (id) => {
    applicationState.selectedDate.value = id
    document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
}


export const getSelectedUser = () => {
    return applicationState.selectedUser
}
export const setSelectedUser = (id) => {
    applicationState.selectedUser.id = id
    document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
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

export const sendFavorite = (favorite) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(favorite)
    }


    return fetch(`${apiURL}/favorites`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
    })
}