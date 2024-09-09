const {appendFileSync:afs} = require("fs");
const path = "./logs/app.log";

function logInfo(message) {
  afs(path, `\n${new Date().toISOString()} | INFO | ${message}\n`);
}

function logWarning(message) {
  afs(path, `\n${new Date().toISOString()} | WARNING | ${message}\n`)
}

function logError(message) {
  afs(path, `\n${new Date().toISOString()} | ERROR | ${message}\n`)
}

logInfo("This is an info message");
logWarning("This is a warning message");
logError("This is an error message");

module.exports = {
  logInfo,
  logWarning,
  logError,
};
