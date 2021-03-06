const express = require('express');
const app = express();

app.use(express.json());


//Define the phonebook
const persons = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]


//GET request to root
app.get('/', (request, response) => {
  response.send('<h1>Please use /api/persons to see phonebook</h1>');
})
//GET request to /api/persons
app.get('/api/persons', (request, response) => {
  response.json(persons);
})




//Server setup
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`)
})