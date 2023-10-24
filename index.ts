import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Aderemi2',
  //     email: 'philip36@gmail.com',
  //   },
  // });

  // get all users
  // const allUsers = await prisma.user.findMany({
  //   include: {
  //     articles: true,
  //   }
  // })

  //create article and link to user
//   const article = await prisma.articles.create({
//     data: {
//       title: 'PHILIP first article',
//       content: 'PHILIP first article content',
//       published: true,
//       author: {
//         connect: {
//           id: 1,
//         }
//     }
//   }
// });

// get all articles with author
// const article = await prisma.articles.findMany({
//   include: {
//     author: true,
//   }
// });

 //create user and article and associate them
//  const user = await prisma.user.create({
//   data: {
//     name: 'AderemiTheAuthor',
//     email: 'emmanuel@gmail.com',
//     articles: {
//       create: {
//         title: 'Aderemi first article',
//         content: 'Aderemi first article content',
//         published: true,
//       },
//     },
//   },
// });

 //loop through all users and articles
//  allUsers.forEach((user) => {
//   console.log(`User: ${user.name}, Email: ${user.email}`);
//   console.log('Articles:');
//   user.articles.forEach((article) => {
//     console.log(`Title: ${article.title}`);
//     console.log(`Content: ${article.content}`);
//     console.log(`Published: ${article.published}`);
//   });
// });

//update data
// const user = await prisma.user.update({
//   where: {
//     id: 1,
//   },
//   data: {
//     name: 'PhilipUpdated',
//   },
// });

//delete data
// const article = await prisma.articles.delete({
//   where: {
//     id: 2,
//   },
// });
// console.log(article);
}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1);
  })


  // main()
  // .catch(e => {
  //   console.error(e);
  //   process.exit(1);

  // })
  // .finally(async () => {
  //   await prisma.$disconnect()
  // })

