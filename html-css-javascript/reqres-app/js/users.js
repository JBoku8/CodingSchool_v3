const baseURL = 'https://reqres.in/api/users';

const perPageSelect = document.getElementById('perPageSelect');
const orderBySelect = document.getElementById('orderBySelect');
const myModal = new bootstrap.Modal(document.getElementById('myModal'), {
  keyboard: false,
});
const myModalLabel = document.getElementById('myModalLabel');

const ORDER_BY = {
  ASC: (a, b) => a.id - b.id,
  DESC: (a, b) => b.id - a.id,
};

const fetchUsersData = async (query) => {
  try {
    const response = await fetch(`${baseURL}${query ? '?' + query.toString() : ''}`);
    const result = await response.json();
    return result.data;
  } catch (error) {
    return [];
  }
};

const fetchSingleUser = async (userId) => {
  try {
    const response = await fetch(`${baseURL}/${userId}`);
    const result = await response.json();
    return result.data;
  } catch (error) {
    return null;
  }
};

const deleteSingleUser = async (userId) => {
  try {
    const response = await fetch(`${baseURL}/${userId}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
};

const updateSingleUser = async (userId, userData) => {
  try {
    const response = await fetch(`${baseURL}/${userId}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
};

const onUserRowClick = async (userId) => {
  const singleUser = await fetchSingleUser(userId);
  myModal.show();

  myModalLabel.textContent = `${singleUser.first_name} ${singleUser.last_name}`;
};

const onUserDelete = async (userId) => {
  await deleteSingleUser(userId);
};

const createFormRow = (rowOptions) => {
  return `
  <div class="row mb-3">
    <label for="${rowOptions.id}" class="col-sm-2 col-form-label">${rowOptions.labelText}</label>
    <div class="col-sm-10">
      <input
        type="${rowOptions.inputType}"
        class="form-control"
        id="${rowOptions.id}"
        name="${rowOptions.name}"
        value="${rowOptions.value}"
        required
      />
    </div>
  </div>`;
};

const generateEditForm = (userData) => {
  const editForm = document.createElement('form');
  editForm.innerHTML += createFormRow({
    id: 'first_name',
    labelText: 'First Name',
    inputType: 'text',
    name: 'first_name',
    value: userData.first_name,
  });

  editForm.innerHTML += createFormRow({
    id: 'last_name',
    labelText: 'Last Name',
    inputType: 'text',
    name: 'last_name',
    value: userData.last_name,
  });

  editForm.innerHTML += createFormRow({
    id: 'email',
    labelText: 'Email',
    inputType: 'email',
    name: 'email',
    value: userData.email,
  });

  return editForm;
};

const onUserEdit = async (userId, onSuccess) => {
  const modalBody = document.querySelector('.modal-body');
  const submitModal = document.querySelector('button[data-bs-submit]');

  const singleUser = await fetchSingleUser(userId);
  myModalLabel.textContent = `${singleUser.first_name} ${singleUser.last_name}`;
  const editForm = generateEditForm(singleUser);
  modalBody.appendChild(editForm);
  myModal.show();

  document.getElementById('myModal').addEventListener('hide.bs.modal', () => {
    modalBody.innerHTML = null;
    myModalLabel.textContent = '';
  });

  submitModal.addEventListener('click', async (event) => {
    event.stopPropagation();
    const fd = new FormData(editForm);

    const updateObject = {};

    for ([inputName, inputValue] of fd.entries()) {
      updateObject[inputName] = inputValue;
    }

    const updatedUser = await updateSingleUser(userId, updateObject);
    if (updatedUser.updatedAt) {
      myModal.hide();
      onSuccess(updatedUser);
    }
  });
};

const createUserRow = (user) => {
  const tr = document.createElement('tr');
  tr.style.cursor = 'pointer';
  tr.addEventListener('click', () => onUserRowClick(user.id));
  const idTd = document.createElement('td');

  idTd.setAttribute('scope', 'row');
  idTd.textContent = user.id;

  const imageTd = document.createElement('td');
  const image = document.createElement('img');
  image.src = user.avatar;
  imageTd.appendChild(image);

  const firstNameTd = document.createElement('td');
  const lastNameTd = document.createElement('td');
  firstNameTd.textContent = user.first_name;
  lastNameTd.textContent = user.last_name;

  const emailTd = document.createElement('td');
  emailTd.textContent = user.email;

  const actionsTd = document.createElement('td');
  actionsTd.className = 'btn-group';
  const removeButton = document.createElement('button');
  removeButton.className = 'btn btn-danger';
  removeButton.textContent = 'Delete';
  removeButton.addEventListener('click', async (event) => {
    event.stopPropagation();
    await onUserDelete(user.id);
    tr.remove();
  });

  const editButton = document.createElement('button');
  editButton.className = 'btn btn-warning';
  editButton.textContent = 'Edit';

  const onSuccessUpdate = (user) => {
    firstNameTd.textContent = user.first_name;
    lastNameTd.textContent = user.last_name;
    emailTd.textContent = user.email;
    tr.addEventListener('animationend', () => {
      tr.classList.remove('updated');
    });

    tr.classList.add('updated');
  };

  editButton.addEventListener('click', async (event) => {
    event.stopPropagation();
    onUserEdit(user.id, onSuccessUpdate);
  });

  actionsTd.appendChild(editButton);
  actionsTd.appendChild(removeButton);

  tr.appendChild(idTd);
  tr.appendChild(imageTd);
  tr.appendChild(firstNameTd);
  tr.appendChild(lastNameTd);
  tr.appendChild(emailTd);
  tr.appendChild(actionsTd);

  return tr;
};

const renderer = (userList) => {
  const userListBody = document.getElementById('userListBody');
  userListBody.innerHTML = null;
  userList.forEach((user) => {
    userListBody.appendChild(createUserRow(user));
  });
};

const populateUserTable = async () => {
  const query = new URLSearchParams();
  query.append('per_page', perPageSelect.value);
  let userList = await fetchUsersData(query);

  //   order
  userList = userList.sort(ORDER_BY[orderBySelect.value]);
  renderer(userList);
};

perPageSelect.addEventListener('change', () => {
  populateUserTable();
});

orderBySelect.addEventListener('change', () => {
  populateUserTable();
});

populateUserTable();
