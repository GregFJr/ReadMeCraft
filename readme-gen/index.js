const inquierer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        name: 'title',
        message: 'What is the title of your project?',
    },

    {
        name: 'description',
        message: 'Please provide a description of your project.',
    },

    {
        name: 'installation',
        message: 'Please provide installation instructions for your project.',
    },

    {
        name: 'usage',
        message: 'Please provide usage information for your project.',
    },

    {
        name: 'features',
        message: 'Please provide features for your project.',
    },

    {
        name: 'contributing',
        message: 'Please provide contribution guidelines for your project.',
    },

    {
        name: 'tests',
        message: 'Please provide test instructions for your project.',
    },

    {
        name: 'license',
        message: 'Please provide license information for your project.',
    },

    {
        name: 'github',
        message: 'Please provide your GitHub username.',
    },

    {
        name: 'email',
        message: 'Please provide your email address.',
    },

];

inquierer
.prompt(questions)
.then((responses) => {
    console.log(responses);
    const readme = `# ${responses.title}

## Description
${responses.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Features](#features)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Installation
${responses.installation}

## Usage
${responses.usage}

## Features
${responses.features}

## Contributing
${responses.contributing}

## Tests
${responses.tests}

## License
${responses.license}

## Questions
GitHub: [${responses.github}](

Email: ${responses.email}
`;  
    fs.writeFile('README.md', readme, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    }
    );
});

