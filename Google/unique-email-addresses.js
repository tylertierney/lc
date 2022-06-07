const numUniqueEmails = (emails) => {
  const locals = new Set();

  emails.forEach((address) => {
    const domain = address.split("@")[1];

    const local = address.split("@")[0].split("+")[0];
    locals.add(local.split(".").join("") + "@" + domain);
  });

  return locals.size;
};

// const emails = [
//   "test.email+alex@leetcode.com",
//   "test.e.mail+bob.cathy@leetcode.com",
//   "testemail+david@lee.tcode.com",
// ];

const emails = ["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"];

console.log(numUniqueEmails(emails));
