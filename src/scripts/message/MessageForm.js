import { getUserNames } from "../data/UserNames.js"
import { sendMessage } from "../data/provider.js"

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





export const MessageForm = () => {
    return `<form>
    <div class="userNameSelector">
    ${getUserNames()}
    </div>
<div 
    class="field textBox">
    <label class="label" for="letter">Letter</label>
    <textarea type="text" name="letter" class="textarea"> </textarea>
</div>
    <button class="button" id="sendMessage"> Send Message </button>
</div>
</form>
`
}