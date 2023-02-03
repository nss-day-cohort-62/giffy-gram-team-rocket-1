import { getSelectedUser, getUsers } from "./provider.js"

export const getUserNames = () => {
    const users = getUsers()
    const selectedUser = getSelectedUser()

    let html = `        
        <select class="users" id="users">
            <option value="0">Choose a user</option>
            ${
                users.map(
                    user => {
                        let selected = ""
                        if( selectedUser.id=== user.id) {
                            selected = "selected"
                        }
                        return `<option value="${user.id}" ${selected}>${user.name}</option>`
                    }
                ).join("")
            }
        </select>
`
    return html
}