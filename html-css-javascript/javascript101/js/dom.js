

class Person {
    constructor(username, password) {
        this.password = password;
        this.username = username;
        this.id = Math.round(Math.random() * 100000000)
    }
}

const userListElement = document.getElementById('userList')
const onUserEditHandler = (event) => {
  console.log('onUserEditHandler', event.target.dataset.userId)
}
const onUserRemoveHandler = (event) => {
  console.log('onUserRemoveHandler', event.target.dataset.userId)
}

const users = [
  new Person('John Doe', 'password'),
  new Person('John Smith', 'password'),
  new Person('James Bond', 'password')
]

users.forEach(user => {
  userListElement.appendChild(createUserRow(user))
})

function createUserRow(user) {
    const tr = document.createElement('tr')

    const tdUsername = document.createElement('td')
    tdUsername.textContent = user.username

    const tdActions = document.createElement('td')
    const divButtons = document.createElement('div')
    divButtons.className = 'btn-group'
    tdActions.appendChild(divButtons)

    const editButton = createButtonWithIcon('btn btn-primary', 'bi bi-pencil-square', onUserEditHandler)
    // iconE.dataset.userId = user.id;
    divButtons.appendChild(editButton)

    const removeButton = createButtonWithIcon('btn btn-danger', 'bi bi-archive', onUserRemoveHandler)
    // iconR.dataset.userId = user.id;
    divButtons.appendChild(removeButton)


    tr.appendChild(tdUsername)
    tr.appendChild(tdActions)
    return tr;
}

function createButtonWithIcon(btnClassName, iconClassName, handler) {
  const button = document.createElement('button')
  button.className = btnClassName

  const iconE = document.createElement('i')
  iconE.className = iconClassName
  button.appendChild(iconE)
  button.addEventListener('click', handler)
  return button;
}