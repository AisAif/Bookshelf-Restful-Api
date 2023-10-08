import dotenv from "dotenv"
dotenv.config()

const appName = process.env.APP_NAME
const appPort = process.env.APP_PORT

export {
    appName,
    appPort
}