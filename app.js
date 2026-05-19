function addTodo() {
  const input = document.getElementById('todoInput');
  const text = input.value.trim();

  if (text === '') {
    alert('Vui lòng nhập tên công việc!');
    return;
  }

  const li = document.createElement('li');
  li.textContent = text;

  const btnDelete = document.createElement('button');
  btnDelete.textContent = 'X';
  btnDelete.style.background = '#e74c3c';
  btnDelete.style.padding = '4px 10px';
  btnDelete.onclick = function() {
    deleteTodo(li);
  };

  li.appendChild(btnDelete);
  document.getElementById('todoList').appendChild(li);

  input.value = '';
  input.focus();
}

function deleteTodo(item) {
  item.remove();
}

document.getElementById('todoInput').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') addTodo();
});
