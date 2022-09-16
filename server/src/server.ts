// To utilize the ECMAScript Modules
// Inside the package.json create an option called "type": "module"
// And change the files extension to .jms

// To add typescript
// Install the typescript as a development dependency with: "npm install typescript"
// Run npx tsc --init to create a tsconfig.json
// Now we can create a build script => "build": "tsc"
// And when we run the npm run build, it will create our .js file
// For tsconfig configurations access the tsconfig.json file

//Third Key: UntilTheEnd

import express from "express"
import cors from "cors"

import { PrismaClient } from "@prisma/client"
import { convertHourStringToMinutes } from "./utils/convert-hour-string-minutes"
import { convertMinutesToHourString } from "./utils/convert-minute-hour-string"

//Starting the server

const app = express()

app.use(express.json())
app.use(cors())

//Automatic connection with the database
const prisma = new PrismaClient()

//Routes
//Get games list
app.get('/games', async (req, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true
        }
      }
    }
  })


  return res.json(games)
})

//Create a new ad
app.post('/games/:id/ads', async (req, res) => {
  const gameId = req.params.id
  const gameData = req.body

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: gameData.name,
      yearsPlaying: gameData.yearsPlaying,
      discord: gameData.discord,
      weekDays: gameData.weekDays.join(','),
      hourStart: convertHourStringToMinutes(gameData.hourStart),
      hourEnd: convertHourStringToMinutes(gameData.hourEnd),
      useVoiceChannel: gameData.useVoiceChannel,
    }
  })

  return res.status(201).json(ad)
})

//Get ads from a game by ID
app.get('/games/:id/ads', async (req, res) => {
  const gameId = req.params.id
  const ads: any = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  return res.json(ads.map((ad: any) => {
    return {
      ...ad,
      weekDays: ad.weekDays.split(','),
      hourStart: convertMinutesToHourString(ad.hourStart),
      hourEnd: convertMinutesToHourString(ad.hourEnd)
    }
  }))
})

//Search the discord by the ad ID
app.get('/ads/:id/discord', async (req, res) => {
  const adId = req.params.id

  const ad = await prisma.ad.findFirstOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId
    }
  })

  return res.json({
    discord: ad.discord
  })
})





app.listen(3333)