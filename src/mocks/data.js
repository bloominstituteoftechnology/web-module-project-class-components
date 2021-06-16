const question = {
  question_id: 1,
  question_title: 'Bilbo\'s Pocket',
  question_text: 'What is in Bilbo\'s pocket?',
  question_hint: 'Something precious',
  options: [
    {
      option_id: 1,
      option_text: 'The One Ring',
      option_remark: 'It had to be the Ring!',
      option_is_correct: true,
    },
    {
      option_id: 2,
      option_text: 'Bilbo\'s Hand',
      option_remark: 'Nice try, but nope!',
      option_is_correct: false,
    },
    {
      option_id: 3,
      option_text: 'Nothing',
      option_remark: 'That\'s clever, but also wrong...',
      option_is_correct: false,
    },
  ]
}

module.exports = {
  question,
}
