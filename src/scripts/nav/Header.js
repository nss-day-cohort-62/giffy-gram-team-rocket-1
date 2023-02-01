export const Header = () => {
    let html = `<a href="">
    <img src="../../images/pb.png" width="30px" height="30px"/>
    </a>
    <h3>Giffygram</h3>   
    <img id="createMessagePen" src="../../images/fountain-pen.svg" width="30px" height="30px"/>
    <button id ="recievedMessages">insertNumber</button>
    <button id ="logout">logout</button>`
    return html
}

const applicationElement= document.querySelector(".giffygram")
applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "logout") {
        
            localStorage.removeItem("gg_user") 
            document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
    }
})