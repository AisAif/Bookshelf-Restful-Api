import { appName, appPort } from "./app/config.js";
import web from "./app/web.js";

web.listen(appPort, () => {
    console.log(`Server running at port ${appPort}`)
    console.log(`${appName} is starting`)
})