import { getUsers } from "../data/provider.js"
import { Register} from "./Register.js"


document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "loginButton") {
        let foundUser = null
        const userState = getUsers()

        const email = document.querySelector("input[name='email']").value
        const password = document.querySelector("input[name='password']").value

        for (const user of userState) {
            if (user.email === email && user.password === password) {
                foundUser = user
            }
        }

        if (foundUser !== null) {
            localStorage.setItem("gg_user", foundUser.id)
            document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
        }

/*
        $(document).ready(function () {
            $(".messages").hide();  // To hide
            $(".content").show();  // To show
        })
        */
    }
})

export const LoginForm = () => {
    return `
        <h1 class="landingPageHeader"><img class="landingImg" src="../../images/pb.png" />Giffygram</h1>
        
        <div class= "landingPage">
        <div class="loginForm">
        <h2> Already joined? </h2>
            <form>
                <fieldset>
                    <label for="email">Email:</label>
                    <input type="text" name="email" autofocus placeholder="Email address" />
                </fieldset>
                <fieldset>
                    <label for="password">Password:</label>
                    <input type="password" name="password" placeholder="Password" />
                </fieldset>
                
            </form>
            <button id="loginButton">Login</button>
        </div>



        ${Register()}
        </div>
        
    `
}
