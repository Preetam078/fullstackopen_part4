const app = require("./app")
const logger = require("./util/logger") 
const config = require("./util/config")

app.listen(config.PORT, logger.info(`connected to backend on PORT ${config.PORT}`))