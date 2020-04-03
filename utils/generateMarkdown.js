// TODO: Return markdown string for README file given a data object.
function generateMarkdown(response, data) {
  const { login, avatar_url, html_url, email } = data; // use object destructuring

  return `
  # ${response.projectName} #
  [license]
  [Project](${html_url}/${response.projectName})
  
  ## **Description**
  
  -  ${response.description}
  
  ### Table of Contents
  
  - [Installation](#installation) 
  
  - [Usage](#usage) 
  
  - [License](#license) 
  
  - [Contributing](#contributing) 
  
  - [Tests](#tests) 
  
  - [Questions](#questions) 
  
  ## Installation
  
  To install necessary dependencies, run the following command: 
  
  \`\`\`
  ${response.install}
  \`\`\`
  ## Usage
  
  ${response.usage}
  
  ## License
  
  This project is licensed under the ${response.license}
  
  ## Contributing
  
  ${response.contribution}
  
  ## Tests
  
  To install necessary dependencies, run the following command: 
  \`\`\`
  ${response.tests}
  \`\`\`
  ## Questions
  
  <img src="${avatar_url}" alt="avatar" style="border-radius: 16px" width="30"/>
  
  If you have any questions about the repo, open an issue or contact [${login}](${html_url}) directly at ${email}

`;
}

module.exports = generateMarkdown;
