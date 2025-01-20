import chalk from 'chalk';
export function logger(message, level = 'info', value = "") {
    const now = new Date().toISOString();
    const colors = {
        info: chalk.greenBright,
        warn: chalk.cyanBright,
        error: chalk.redBright,
        success: chalk.blueBright,
        debug: chalk.magentaBright,
    };
    const color = colors[level] || chalk.white;
    console.log(color(`[${now}] [${level.toUpperCase()}]: ${message}`), chalk.yellowBright(value));
}