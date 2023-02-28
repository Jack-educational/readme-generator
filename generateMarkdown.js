function generateMarkdown(data) {
    return `# ${data.title} ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  
  This application is covered under the ${data.license} license.
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions, please contact ${data.username} at ${data.email}.
  `;
  }
  
  module.exports = generateMarkdown;
  