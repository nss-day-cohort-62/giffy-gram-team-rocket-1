import { getUserNames } from "../data/UserNames.js"
import { sendMessage } from "../data/provider.js"
import { renderApp, showMessages } from "../main.js"


document.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "sendMessage") {
        const userRecipient = document.querySelector("select[class='users']").value
        const userBody = document.querySelector("textarea[name='letter']").value
        const userSender = parseInt(localStorage.getItem("gg_user"))
       
        const messageData = {
            recipientId: parseInt(userRecipient),
            body: userBody,
            senderId: userSender,
            date: new Date().toLocaleDateString()

        }
        sendMessage(messageData)
    }
})

/*
$(document).ready(function () {
    $(".messages").hide();  // To hide
    $(".content").show();  // To show
})
*/

document.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "recievedMessages") {
       showMessages()
    }})

document.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "homeButton") {
        renderApp()
    }})

/*
document.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "homeButton") {
        document.getElementById("recievedMessages").style.display = "none"
       
       
        // $(".content").hide();  // To hide
       // $(".messages").show();  // To show
    }})
*/

document.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "closeMessage") {
        renderApp()
    }})
export const MessageForm = () => {
    return `<form class= "directMessage">
    <button id = "directMessage__close" class="button message__section" id="closeMessage directMessage__close">x</button>
    <div class="userNameSelector message__section">
    ${getUserNames()}
    </div>
    <textarea type="text" name="letter" class="textarea message__section" placeholder="Your Message..."></textarea>
    <button class="button message__section" id="sendMessage"> Send Message </button>

</form>
`
}