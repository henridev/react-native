const { format, createLogger, transports } = require("winston");
const { existsSync, mkdirSync } = require("fs");
const { join } = require("path");
const logDir = "logs";

// Create the log directory if it does not exist
if (!existsSync(logDir)) {
  mkdirSync(logDir);
}

const errorLog = join(logDir, "error.log");
const combinedLog = join(logDir, "combined.log");

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new transports.File({
      filename: errorLog,
      level: "error",
    }),
    new transports.File({
      filename: combinedLog,
    }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
      ),
      level: "debug",
    })
  );
}

module.exports = logger;
