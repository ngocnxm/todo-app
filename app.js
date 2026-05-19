function addTodo() {
  const input = document.getElementById('todoInput');
  const text = input.value.trim();

  if (text === '') {
    alert('Vui lòng nhập tên công việc!');
    return;
  }

  const li = document.createElement('li');
  li.textContent = text;
  document.getElementById('todoList').appendChild(li);

  input.value = '';
  input.focus();
}

document.getElementById('todoInput').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') addTodo();
});
