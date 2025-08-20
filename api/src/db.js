import { PrismaClient } from '../src/generated/prisma/index.js'

const prisma = new PrismaClient()

async function getUsers() {
  const user = await prisma.movie.findMany()
  console.log(user)
}

getUsers()