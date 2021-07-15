const chalk = require('chalk');

const printLog = (msg) => {
    console.log(chalk.bold('['+chalk.blue('!')+']')+' '+msg)
}

const printWarning = (msg) => {
    console.log(chalk.bold('['+chalk.yellow('!')+']')+' '+msg)
}

const printAlert = (msg) => {
    console.log(chalk.bold('['+chalk.red('!')+']')+' '+msg)
}

const printSuccess = (msg) => {
    console.log(chalk.bold('['+chalk.green('!')+']')+' '+msg)
}

const printCustom = (title,msg) => {
    console.log(chalk.bold('['+chalk.blue(title)+']')+' '+msg)
}

exports.println = printLog;
exports.warn = printWarning;
exports.error = printAlert;
exports.sucess = printSuccess;
exports.custom = printCustom;
