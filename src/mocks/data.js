const { nanoid } = require("nanoid")
const moment = require("moment")

let posts

const resetPosts = () => {
  posts = [
    {
      id: nanoid(5),
      headline: "Less than half of Seattle homes have air conditioning. After a deadly heat wave, ‘everybody’ wants it.",
      createdOn: moment().subtract(Math.random()*10, "days").format(),
      author: "Hallie Golden",
      image: "https://via.placeholder.com/150",
      summary: "Triple-digit temperatures led to a spike in demand across the region.",
      body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home."   
  },
  {
      id: nanoid(5),
      createdOn: moment().subtract(Math.random()*10, "days").format(),
      author: "Hallie Golden",
      image: "https://via.placeholder.com/150",
      headline: "Less than half of Seattle homes have air conditioning. After a deadly heat wave, ‘everybody’ wants it.",
      summary: "Triple-digit temperatures led to a spike in demand across the region.",
      body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home."   
  },
  {
      id: "MMqR27",
      createdOn: moment().subtract(Math.random()*10, "days").format(),
      author: "Hallie Golden",
      image: "https://via.placeholder.com/150",
      headline: "Less than half of Seattle homes have air conditioning. After a deadly heat wave, ‘everybody’ wants it.",
      summary: "Triple-digit temperatures led to a spike in demand across the region.",
      body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home."   
  },
  {
      id: nanoid(5),
      createdOn: moment().subtract(Math.random()*10, "days").format(),
      author: "Hallie Golden",
      image: "https://via.placeholder.com/150",
      headline: "Less than half of Seattle homes have air conditioning. After a deadly heat wave, ‘everybody’ wants it.",
      summary: "Triple-digit temperatures led to a spike in demand across the region.",
      body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home."   
  }]
}

resetPosts()

const getAll = () => {
  return posts
}

const getById = id => {
  return posts.find(post => post.id === id)
}

const create = item => {
  posts.push({ id: nanoid(5), createdAt:moment().format(), ...item })
  return posts
}

const edit = (id, item) => {
  posts = posts.map(post => {
    return (post.id === id) ? {...post, ...item} : post
  });

  return posts
}

const remove = id => {
  posts = posts.filter(post => {
    return post.id !== id
  })
  return posts
}

module.exports = {
  getAll,
  getById,
  create,
  edit,
  remove,
  resetPosts // only tests use this
}
