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

const onUserRowClick = async (userId) => {
  const singleUser = await fetchSingleUser(userId);
  myModal.show();

  myModalLabel.textContent = `${singleUser.first_name} ${singleUser.last_name}`;
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

  tr.appendChild(idTd);
  tr.appendChild(imageTd);
  tr.appendChild(firstNameTd);
  tr.appendChild(lastNameTd);
  tr.appendChild(emailTd);
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
