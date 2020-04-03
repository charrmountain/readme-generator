// TODO: Return markdown string for README file given a data object.
function generateBadge(licenseLink){
  if (licenseLink === "MIT"){
      licenseLink= "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } if (licenseLink === "APACHE 2.0"){
      licenseLink  = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
   } if (licenseLink === "GPL3.0"){
      licenseLink  = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
   } if (licenseLink === "BSD3"){
      licenseLink = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
   }
  return licenseLink;
};



function generateMarkdown(response, data) {
  const projectUrl = response.projectName
  const { login, avatar_url, html_url, email } = data; // use object destructuring
  const { projectName, description, install, usage, license, contribution, tests} = response;
  const licenseBadge= generateBadge(license);
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
