import { sendUser } from "../data/provider.js"

const applicationElement = document.querySelector(".giffygram")

applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "registerButton") {
        // Get what the user typed into the form fields
        const name = document.querySelector("input[name='name']").value
        const email = document.querySelector("input[name='email']").value
        const password = document.querySelector("input[name='password']").value


        // Make an object out of the user input
        const dataToSendToAPI = {
            name: name,
            email: email,
            password: password
        }

        // Send the data to the API for permanent storage
        sendUser(dataToSendToAPI)
    }

})





export const Register = () => {
return ` 
<div class="registerForm loginForm">
<h2> New User?</h2>
<form>
<fieldset>
<label for="name">Name:</label>
<input type="text" name="name" placeholder="Name" />
</fieldset>
    <fieldset>
        <label for="email">Email:</label>
        <input type="text" name="email" autofocus placeholder="Email address" />
    </fieldset>
    <fieldset>
        <label for="password">Password:</label>
        <input type="password" name="password" placeholder="Password" />
    </fieldset>
    <button id="registerButton">Register</button>
</form>

` }