import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const newUser = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
    },
})
  
const users = await prisma.user.findMany()

console.log(newUser)
console.log(users)