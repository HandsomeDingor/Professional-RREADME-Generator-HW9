// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license ===  'mit'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  }if(license ===  'ISC'){
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]';
  }if(license === 'IBM'){
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]';
  }else {return '' }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license ===  'mit'){
    return '(https://opensource.org/licenses/MIT)';
  }if(license === 'ISC'){
    return '(https://opensource.org/licenses/ISC)';
  }if(license === 'IBM'){
    return '(https://opensource.org/licenses/IPL-1.0)'
  }else {return '' }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license ===  'mit'){
    return 'MIT License';
  }if(license === 'ISC'){
    return 'ISC License';
  }if(license === 'IBM'){
    return 'IBM License'
  }else {return ''; }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
  
## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#License)
* [Questions](#questions)
    
## [Description](#table-of-contents)
${data.description}

## [Installation](#table-of-contents)
${data.installation}

## [Usage](#table-of-contents)
${data.usage}

## [Contributing](#table-of-contents)
${data.contributing}

## [Tests](#table-of-contents)
${data.tests}

## [License](#table-of-contents)
The application is covered under the 
${renderLicenseSection(data.license)}.

## [Questions](#table-of-contents)
Please contact me using the following options:

[GitHub](https://github.com/${data.github})

[Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
