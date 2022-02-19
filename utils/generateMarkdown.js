// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table-Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#License)
* [Questions](#questions)
    
## [Description](#table-contents)
${data.description}

## [Installation](#table-contents)
${data.installation}

## [Usage](#table-contents)
${data.usage}

## [Contributing](#table-contents)
${data.contributing}

## [Tests](#table-contents)
${data.test}

## [Questions](#table-contents)
Please contact me using the following links:

[GitHub](https://github.com/${data.github})

[Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
