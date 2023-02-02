import { messageCount } from "../friends/DirectMessage.js"











export const Header = () => {
    let html = `
    <a href="" id ="homeButton" class="navigation__item navigation_icon">
     <img src="../../images/pb.png" width="30px" height="30px" />
    </a>

    <div class="navigation__item navigation__name">Giffygram</div>  

<div class="navigation__item navigation__message">
    <img class = "directMessageIcon" id="createMessagePen" src="../../images/fountain-pen.svg" width="30px" height="30px" />
    <div class = "notification__count" id ="recievedMessages">${messageCount()}</div>
</div>

    <div class="navigation__item navigation__logout" id ="logout">
    <button id= "logout" class= "fakeLink" >Logout</button>
    </div>`
    
    return html
}

const applicationElement= document.querySelector(".giffygram")
applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "logout") {
        
            localStorage.removeItem("gg_user") 
            document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
    }
})