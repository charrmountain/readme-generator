// TODO: Return markdown string for README file given a data object.
function generateMarkdown(response, data, licenseBadge) {
  const projectUrl = response.projectName
  projectUrl.trim()
  const { login, avatar_url, html_url, email } = data; // use object destructuring
  const { projectName, description, install, usage, license, contribution, tests} = response;
  return `
  # ${projectName} #

  ${licenseBadge}

  [Project](${html_url}/${projectUrl})
  
  ## **Description**
  
  -  ${description}
  
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
  ${install}
  \`\`\`
  ## Usage
  
  ${usage}
  
  ## License
  
  This project is licensed under the ${license}
  
  ## Contributing
  
  ${contribution}
  
  ## Tests
  
  To install necessary dependencies, run the following command: 
  \`\`\`
  ${tests}
  \`\`\`
  ## Questions
  
  <img src="${avatar_url}" alt="avatar" style="border-radius: 16px" width="30"/>
  
  If you have any questions about the repo, open an issue or contact [${login}](${html_url}) directly at ${email}

`;
}

module.exports = generateMarkdown;
