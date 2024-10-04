const chalk = require('chalk');

function simulateProgressBar() {
  let progress = 0;
  const interval = setInterval(() => {
    process.stdout.write(chalk.blue(`\rLoading: [${'#'.repeat(progress)}${' '.repeat(20 - progress)}] ${progress * 5}%`));
    progress++;
    if (progress > 20) {
      clearInterval(interval);
      console.log(chalk.green('\nComplete!'));
    }
  }, 400);
}

console.log(chalk.magenta.bold('Starting Process...'));
simulateProgressBar()

// Animated progress bar for Homework 3
// Need to run file "nodeBasics.js";