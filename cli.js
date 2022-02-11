/**
 * @description
 * A script for displaying information about coworkers
 * Can be called by running `npm start {command}` in the terminal
 *
 * @example
 * `npm start list`
 * Running this command will call the `runListCommand` function
 */

// The {command} the user types in the terminal e.g. "list"
const command = process.argv[2];

// The array of members that you defined in the previous task
const members = require("./members");

if (command === "list") {
  runListCommand();
} else {
  console.log(`Command "${command}" not found. Try "list" instead.`);
}

function runListCommand() {
  let membersList = members.map(
    (member) =>
      `First Name:${member.firstName} Last Name:${member.lastName} Job Title:${
        member.jobTitle
      } Department:${member.department} Manager:${
        member.manager ? member.manager : "N/A"
      } Location:${member.location} First Aider: ${
        member.firstAider ? "Yes" : "No"
      } Slack Name: ${member.userSlack} Timezone:${member.timezone}`
  );
  console.log(membersList);
}
// Running the command `npm start list` displays the information of the members in the console
