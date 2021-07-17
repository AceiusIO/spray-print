// might use this later.

const chalk = require('chalk');

const printCustom = () => {
    try {
        const data = fs.readFileSync('./package.json', 'utf8')
        if (data.includes('true')) {
            main();
        } else {
            console.log(chalk.green('You`re running the latest version of spray-print.'));
        }
    } catch (err) {
        console.error(chalk.red('Unexpected error while checking for update:' + err));
    }   
}