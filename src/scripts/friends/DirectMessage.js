import { getMessages, getUsers } from "../data/provider.js"


export const MessageList = () => {
    const messages = getMessages()
    const users = getUsers()

    let html = '<ul>'
    for(const message of messages) {
        const foundUser = users.find((user) => {
            return user.id === post.userId
        })
         html+= `<li id='${post.id}'>
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


//have html of messages be put into content container
//associated messages with signed in user
//write message list html
//build click event for the insert number button
//have that button display how many messages there are

