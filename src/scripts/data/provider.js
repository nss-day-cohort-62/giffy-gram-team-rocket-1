
const applicationElement = document.querySelector(".giffygram")


const applicationState = {
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    },
    users: []
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
