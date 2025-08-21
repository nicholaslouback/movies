import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function getUsers() {
  const user = await prisma.movie.findMany()
  console.log(user)
}

getUsers()