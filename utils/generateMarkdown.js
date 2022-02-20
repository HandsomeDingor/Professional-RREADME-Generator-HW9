// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license ===  'mit'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  }else {return '' }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license ===  'mit'){
    return '(https://opensource.org/licenses/MIT)';
  }else {return '' }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license ===  'mit'){
    return '';
  }else {return ''; }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## [License](#table-of-contents)
The application is covered under the following license:
${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
  
# ${data.title}

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
${data.test}


## [Questions](#table-of-contents)
Please contact me using the following links:
[GitHub](https://github.com/${data.github})
[Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
