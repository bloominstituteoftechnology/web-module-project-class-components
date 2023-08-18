const yup = require('yup')

const nanoid = () => {
  const int = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000
  const hex = int.toString(16)
  return hex.padStart(5, '0')
}

const schemaCreate = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('name of task is required')
    .max(100, 'name of task must be under 100 chars'),
  completed: yup
    .boolean()
    .typeError('completed must be a boolean')
})

let todos

const resetTodos = () => {
  todos = [
    { id: nanoid(), name: 'laundry', completed: false },
    { id: nanoid(), name: 'dishes', completed: false },
    { id: nanoid(), name: 'groceries', completed: false },
  ]
}

resetTodos()

const getAll = async () => {
  const message = 'Here are your Todos'
  return [200, { message, data: todos }]
}

const getById = async id => {
  let message, data, status
  try {
    const todo = todos.find(todo => todo.id === id)
    if (todo) {
      status = 200
      data = todo
      message = `Here is your Todo ${id}`
    } else {
      status = 404
      message = `Ouch: Todo ${id} not found`
    }
  } catch (err) {
    message = `Ouch: ${err.message}`
    status = 422
  }
  return [status, { message, data }]
}

const create = async todoFromClient => {
  let message, data, status
  try {
    const validated = await schemaCreate.validate(todoFromClient, { stripUnknown: true })
    const todo = { id: nanoid(), completed: false, ...validated }
    todos.push(todo)
    data = todo
    message = `Here is your created Todo ${todo.id}`
    status = 201
  } catch (err) {
    message = `Ouch: ${err.message}`
    status = 422
  }
  return [status, { message, data }]
}

const toggleDone = async id => {
  let message, data, status
  const todoFromClient = todos.find(todo => todo.id == id)
  if (todoFromClient) {
    todos = todos.map(todo => {
      if (todo.id == id) {
        data = { ...todo, completed: !todo.completed }
        return data
      }
      return todo
    })
    status = 200
    message = `Here is your updated Todo ${id}`
  } else {
    status = 404
    message = `Ouch: Todo ${id} not found`
  }
  return [status, { message, data }]
}

module.exports = {
  getAll,
  getById,
  create,
  toggleDone,
  resetTodos, // only tests use this
}
