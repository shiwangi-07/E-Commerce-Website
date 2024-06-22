const bcrypt = require("bcryptjs")

const users = [
    {
    name: 'admin',
    lastName: 'admin',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('admin@admin.com', 10),
    isAdmin: true,
  },
  {
    name: 'Advika',
    lastName: 'Singhaniya',
    email: 'advika@singhaniya.com',
    password: bcrypt.hashSync('advika@singhaniya.com', 10),
  },
]

module.exports = users
