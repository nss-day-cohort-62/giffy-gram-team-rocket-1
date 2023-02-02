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

export const MessageForm = () => {
    return `<form class= "directMessage">
    <div class="userNameSelector">
    ${getUserNames()}
    </div>
<div class="textBox">
    <label class="label" for="letter">Letter</label>
    <textarea type="text" name="letter" class="textarea"> </textarea>
</div>
    <button class="button" id="sendMessage"> Send Message </button>
</div>
</form>
`
}