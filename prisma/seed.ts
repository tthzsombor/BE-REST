import { PrismaClient } from "@prisma/client";
import { faker } from '@faker-js/faker'


const prisma = new PrismaClient();

async function main() {
   
try{
{
   await prisma.menetrend.create({
        data: {
           allomas: "Kerekerdő-alsó",
           erkezes: faker.date.anytime(),
        }
    }),
    await prisma.menetrend.create({
        data: {
           allomas: "Kerekerdő-felső",
           erkezes: faker.date.anytime(),

        }
    })
}
}
finally{
    prisma.$disconnect()
}
    
    
}

main()