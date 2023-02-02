import { getUserNames } from "../data/UserNames.js"
import { getPosts } from "../data/provider.js"

export const Footer = () => {
    const
    html = `
        <ul class="footer">
            <li class="footer_item"> 
                <label>Posts Since</label>
                <select class="dateSelector" id="date">
                    <option value="0">Filter by Date</option>
                     <option value="1">2021</option> 
                    <option value="2">2022</option> 
                    <option value="3">2023</option>
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


export const postCount = () => {

    const posts = getPosts()

    let postAmount = 0
    for (const post of posts) {
        postAmount++
    }
    return postAmount
}

