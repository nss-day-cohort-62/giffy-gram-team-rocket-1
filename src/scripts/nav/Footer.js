import { getUserNames } from "../data/UserNames.js"

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
            <li>NumberOfPostsFunction</li>
            <li class>
                <label>Posts Since</label>
                ${getUserNames()}
            

    `

    return html
}

