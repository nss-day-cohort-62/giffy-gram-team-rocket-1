import { getUsers } from "./provider.js"

export const getUserNames = () => {
    const users = getUsers()

    let html = `        
        <select class="users" id="users">
            <option value="">Choose an user</option>
            ${
                users.map(
                    user => {
                        return `<option value="${user.id}">${user.name}</option>`
                    }
                ).join("")
            }
        </select>
`
    return html
}