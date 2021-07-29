const { nanoid } = require("nanoid")
const moment = require("moment")

let posts

const resetPosts = () => {
  posts = [
    { 
      id: nanoid(5),
      createdAt: moment().subtract(Math.random()*10, "days").format(),
      title: '8.2-Magnitude Earthquake Near Alaska Triggers Tsunami Warning', 
      author: "The Associated Press and Reuters",
      summary: 'The warning was issued in parts of Alaska after the powerful earthquake struck.',
      body: 'The warning was issued in parts of Alaska after the powerful earthquake struck about 75 miles off its southern coast, prompting a tsunami watch that spun as far as Hawaii. Within hours, the warning was lifted.',
    },
    { 
      id: nanoid(5),
      createdAt: moment().subtract(Math.random()*10, "days").format(),
      title: 'Concerns grow about the plight of a former U.S. Marine imprisoned in Russia',
      author: "Brad Gibson",
      summary: 'A Michigan lawmaker is pushing for a bipartisan effort to secure the release of Paul N. Whelan.',
      body: 'Paul N. Whelan, the former U.S. Marine sentenced in Russia to 16 years in prison on espionage charges, has not been able to contact his family or the U.S. Embassy since July 4, and relatives and members of Congress are increasingly concerned about his well-being.',
    },
    { 
      id: nanoid(5),
      createdAt: moment().subtract(Math.random()*10, "days").format(),
      title: 'Ride-share prices are rising. Will they ever go back down?',
      author: "Thea Jørgensen",
      summary: 'The number of tourists, office workers and partyers venturing out in Chicago is ticking up, and ride-share prices are rising with them.',
      body: 'The uptick in ride-share prices was enough to convince Mike Morgan and his wife, Elena, to rely on the “L to get around the city on a recent trip from California, though it sometimes meant waking up earlier. But midmorning one weekday they were running late, and took a ride-share the roughly 1 mile from their hotel to Navy Pier. The cost: $15.',
    }
  ]
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
