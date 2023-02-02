import { getMessages, getUsers } from "../data/provider.js"
import { Header} from "../nav/Header.js"
import { Footer } from "../nav/Footer.js"

export const messageCount = () => {
    const messages = getMessages()
    const users = getUsers()
    let messageCount = 0

    for(const message of messages) {
    
        const foundRecipient = users.find((user) => {
            return user.id === message.recipientId
        })
        const foundSender = users.find((user) => {
            return user.id === message.senderId
        })
        
        if (foundRecipient.id === parseInt(localStorage.getItem("gg_user"))) {
            messageCount++
        } else if (foundSender.id === parseInt(localStorage.getItem("gg_user"))) {
            messageCount++
        }


    }
    return messageCount
}

export const MessageList = () => {
    const messages = getMessages()
    const users = getUsers()
    
    let html = `<div class="navigation">${Header()}</div>
    <ul>`

    for(const message of messages) {
    
        const foundRecipient = users.find((user) => {
            return user.id === message.recipientId
        })
        const foundSender = users.find((user) => {
            return user.id === message.senderId
        })
    
    if (foundRecipient.id === parseInt(localStorage.getItem("gg_user"))) {
        html+= `<li id='${message.id}'>
        <p> From ${foundSender.name}</p>
        <p> To ${foundRecipient.name}</p>
        <p>${message.body}</p>
        <p>${message.date}</p>

        </li>
        `
    } else if (foundSender.id === parseInt(localStorage.getItem("gg_user"))) {
        html+= `<li id='${message.id}'>
        <p> From ${foundSender.name}</p>
        <p> To ${foundRecipient.name}</p>
        <p>${message.body}</p>
        <p>${message.date}</p>

        </li>
        `
    }
       
         
    }
    html += `</ul><footer>${Footer()}</footer>`
    return html
}



// Need filtering by either date, user, or favorites
// formatting buttons/overall look




/*VF
!!if  on the main page. the div that contains all the posts are in giffygram_feed class
 if the messages button is clicked that div is REPLACED with messages class!!
hide an element
 https://www.w3schools.com/jquery/eff_hide.asp

 Changing display using hide()/show()
Javascript:

$("#element_to_hide").hide();  // To hide
$("#element_to_hide").show();  // To show
Pros:

Always works.
After unhiding, it will return back to using the previous display value.
You will always know which state you are swapping to so you:
don't need to add if statements to check visibility before changing states if the state matters.
won't confuse others reading your code as to which state you are switching to if, if the state matters.
Intuitive.
Cons:

If you want to imitate a toggle, you will have to check the state first and then switch to the other state. Use toggle() instead for these. Refer to p2 of the example.



 for favorites, if the favorites button is clicked under the post, CHANGE the object method: PUT, 
 and add the property of favorited on the object


 if filtering by favorites, filter PostList with if post.favorited && post.userid === parseInt(localStorage.getItem("gg_user"))
 if filtering by user posts, filter postlist with if post.userid ==== user.id


 number of messages function
    let messageAmount = null
    for (const message of messages){
        if (userid === message.recipientid){
            messageAmount ++
        }
    }


number of posts per year function

 let postAmount = null
parseInt date??? and then .filter(() => {
    post.date.includes("2022")
    return  postAmount ++
}
I dont think this will work    




signed in user has the ability to delete their own post (next to the favorite button)

*/