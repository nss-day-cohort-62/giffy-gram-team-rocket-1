
const applicationElement= document.querySelector(".giffygram")
applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "logout") {
        
            localStorage.removeItem("gg_user") 
            document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
    }
})





export const GiffyGram = () => {

    // Show main main UI
    return `<h1>Giffygram</h1>
        <button id ="logout">logout</button>`
}
