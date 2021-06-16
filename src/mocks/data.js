const { nanoid } = require("nanoid")

let todos = [
  {
    id: nanoid(5),
    name: 'laundry',
    complete: false,
  },
  {
    id: nanoid(5),
    name: 'dishes',
    complete: false,
  },
  {
    id: nanoid(5),
    name: 'groceries',
    complete: false,
  },
]

const getAll = () => {
  return todos
}

const getById = id => {
  return todos.find(todo => todo.id === id)
}

const create = name => {
  const newTodo = { id: nanoid(5), name, completed: false }
  todos.push(newTodo)
  return newTodo
}

const markDone = id => {
  return todos.map(todo => {
    return todo.id === id
      ? { ...todo, completed: true }
      : todo
  })
}

const remove = id => {
  return todos.filter(todo => {
    return todo.id !== id
  })
}

module.exports = {
  getAll,
  getById,
  create,
  markDone,
  remove,
}
