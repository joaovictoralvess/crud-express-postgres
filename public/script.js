const API_URL = "http://localhost:3000/users";
const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const userTable = document.getElementById("userTable");

// Carregar usuários ao abrir
async function loadUsers() {
  const res = await fetch(API_URL);
  const users = await res.json();

  userTable.innerHTML = ""; // limpa antes de renderizar

  users.forEach(user => {
    userTable.innerHTML += `
      <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>
          <button class="btn btn-warning btn-sm me-1" onclick="editUser(${user.id}, '${user.name}', '${user.email}')">
            ✏️ Editar
          </button>
          <button class="btn btn-danger btn-sm" onclick="deleteUser(${user.id})">
            🗑️ Excluir
          </button>
        </td>
      </tr>
    `;
  });
}

// Criar usuário
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email }),
  });

  nameInput.value = "";
  emailInput.value = "";
  loadUsers();
});

// Editar usuário
async function editUser(id, name, email) {
  const newName = prompt("Novo nome:", name);
  const newEmail = prompt("Novo email:", email);

  if (newName && newEmail) {
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName, email: newEmail }),
    });
    loadUsers();
  }
}

// Deletar usuário
async function deleteUser(id) {
  if (confirm("Tem certeza que deseja excluir?")) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    loadUsers();
  }
}

loadUsers();