import bcryptjs from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'william.henry.moody@my-own-personal-domain.com',
    password: bcryptjs.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'User 1',
    email: 'william.a.wheeler@example-pet-store.com',
    password: bcryptjs.hashSync('123456', 10),
  },
  {
    name: 'User 2',
    email: 'william.henry.harrison@example-pet-store.com',
    password: bcryptjs.hashSync('123456', 10),
  },
]

export default users
