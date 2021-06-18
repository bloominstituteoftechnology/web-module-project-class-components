const { nanoid } = require("nanoid")

let todos

const resetTodos = () => {
  todos = [
    { id: nanoid(5), name: 'laundry', complete: false },
    { id: nanoid(5), name: 'dishes', complete: false },
    { id: nanoid(5), name: 'groceries', complete: false },
  ]
}

resetTodos()

const getAll = () => {
  return todos
}

const getById = id => {
  return todos.find(todo => todo.id === id)
}

const create = name => {
  todos.push({ id: nanoid(5), name, complete: false })
  return todos
}

const toggleDone = id => {
  todos = todos.map(todo => {
    return todo.id === id
      ? { ...todo, complete: !todo.complete }
      : todo
  })
  return todos
}

const remove = id => {
  todos = todos.filter(todo => {
    return todo.id !== id
  })
  return todos
}

module.exports = {
  getAll,
  getById,
  create,
  toggleDone,
  remove,
  resetTodos, // only tests use this
}
