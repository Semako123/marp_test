const { exec } = require('child_process');

const terminalCommand = 'npx @marp-team/marp-cli markdown.md --pptx -o output.pptx';

exec(terminalCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Command error: ${stderr}`);
    return;
  }
  console.log(`Command output: ${stdout}`);
});
