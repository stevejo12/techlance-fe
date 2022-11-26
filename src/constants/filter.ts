// make sure "value" is all lowercase
// or else need to refactor the search filtering function

// Food For Thought
// Filtering based on id instead of value (?)
// Is it becoming harder to store in the database
// connecting PK FK between themxs

const skillsFilterList = [
  {
    id: 1,
    name: "javascript",
    value: "javascript",
    tag: "Javascript"
  },
  {
    id: 2,
    name: "html",
    value: "html",
    tag: "HTML"
  },
  {
    id: 3,
    name: "css",
    value: "css",
    tag: "CSS"
  },
  {
    id: 4,
    name: "ruby",
    value: "ruby",
    tag: "Ruby"
  },
  {
    id: 5,
    name: "python",
    value: "python",
    tag: "Python"
  }
];

export { skillsFilterList };
