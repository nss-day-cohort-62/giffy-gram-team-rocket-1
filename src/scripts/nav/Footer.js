import { getUserNames } from "../data/UserNames.js"
import { getFavorites, getPosts, getSelectedDate, getSelectedUser, getUsers, setSelectedDate } from "../data/provider.js"

export const Footer = () => {
    const
    html = `
        <ul class="footer">
            <li class="footer_item"> 
            <label>Posts Since</label>
                <select class="dateSelector" id="date">
                <option value="0">Filter by Date</option>
                ${dateList()}
                </select>
            </li>

            <li class="footer_item">${postCount()} Posts</li>
            <li class="footer_item">
                <label>Posts By</label>
                ${getUserNames()}
                </li>
            
            </ul>

    `

    return html
}

export const favoriteCheckbox = () => {
const favorites = getFavorites()
const users = getUsers()
const posts = getPosts()

const foundUser = users.find((user) => {
    return user.id === parseInt(localStorage.getItem("gg_user"))
})
 favorites.map((favorite) => {
    
 })



}

export const dateList = () => {
const selectedDate = getSelectedDate()
let dateCounter = 2019
let html = ""

                        
while (dateCounter <= 2023){
    let selected = ""
    if( selectedDate.value === dateCounter) {
       selected = "selected"
        html += `<option value="${dateCounter}" ${selected} >${dateCounter}</option> `
       }
   else{
    html += `<option value="${dateCounter}">${dateCounter}</option> `
   }
   dateCounter++
}


    return html
                    
                     
                    
}

export const postCount = () => {

    let posts = getPosts()
    const selectedUser = getSelectedUser()
    let postAmount = 0
    if(selectedUser.id===0) {
        posts = posts
    }
    else if (selectedUser) {
        posts = posts.filter(post =>(post.userId === selectedUser.id))
    }
    for (const post of posts) {
        postAmount++
    }
    return postAmount
}

