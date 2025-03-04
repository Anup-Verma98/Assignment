function checkIfPartialMatchExistsWithOrder(target, keyword) {
  console.log("Anup  ", keyword);
  let index = -1;
  for (let i = 0; i < keyword.length; i++) {
    index = target.indexOf(keyword[i], index + 1);
    if (index === -1) return false;
  }
  return true;
}

function fetchDataAndFilter(data, keyword) {
  /**
   * guard conditions :-
   * 1 - data is array ,
   * 2 - data has some length ,
   * 3 - keyword searched must be a string , cannot be empty.
   *
   */
  if (!Array.isArray(data) || data.length === 0 || keyword.trim() === "")
    return [];

  let lowerCaseKeyword = keyword.toLowerCase();

  if (lowerCaseKeyword.includes(" ")) {
    lowerCaseKeyword = lowerCaseKeyword
      .split("")
      .filter((char) => char !== " ")
      .join(""); // incase user wants to search for keys => "p y t h o n"
  }

  return data.filter((item) => {
    if (item.title) {
      const lowerCaseTitle = item.title.toLowerCase();

      return (
        lowerCaseTitle.includes(lowerCaseKeyword) ||
        checkIfPartialMatchExistsWithOrder(lowerCaseTitle, lowerCaseKeyword)
      );
    }
    return false;
  });
}

const data = [
  { title: "JavaScript Basics" },
  { title: "Advanced JavaScript" },
  { title: "Python for Data Science" },
  { title: "Learning React" },
  { title: undefined },
  { title: "JavaScript in depth" },
  { title: "Js" },
  { title: "J kS" },
  { title: "anup verma" },
];

console.log(fetchDataAndFilter(data, " "));

// helper fn for testing...
const stringify = (val) => JSON.stringify(val);

// Test cases array
const testCases = [
  {
    keyword: "java",
    expected: [
      { title: "JavaScript Basics" },
      { title: "Advanced JavaScript" },
      { title: "JavaScript in depth" },
    ],
    description: "Test case 1",
    failureMessage: "Exact match for the keyword 'java'",
  },
  {
    keyword: "JavaScript",
    expected: [
      { title: "JavaScript Basics" },
      { title: "Advanced JavaScript" },
      { title: "JavaScript in depth" },
    ],
    description: "Test case 2",
    failureMessage: "Case-insensitive search for the keyword 'JavaScript'",
  },
  {
    keyword: "js",
    expected: [
      { title: "JavaScript Basics" },
      { title: "Advanced JavaScript" },
      { title: "JavaScript in depth" },
      { title: "Js" },
      { title: "J kS" },
    ],
    description: "Test case 3",
    failureMessage: "Partial match using 'js'",
  },
  {
    keyword: "py",
    expected: [{ title: "Python for Data Science" }],
    description: "Test case 4:",
    failureMessage: "Search for 'py' which should match 'Python'",
  },
  {
    keyword: "p y t h o n",
    expected: [{ title: "Python for Data Science" }],
    description: "Test case 5",
    failureMessage:
      "Keyword with spaces should still work, 'p y t h o n' matches 'Python'",
  },

  {
    keyword: "nup",
    expected: [{ title: "anup verma" }],
    description: "Test case 6",
    failureMessage: "Check for ordered characters, 'nup' matches 'anup verma'",
  },
  {
    keyword: "ruby",
    expected: [],
    description: "Test case 7",
    failureMessage: "No matches found for a non-existing keyword",
  },
  {
    keyword: "python",
    expected: [{ title: "Python for Data Science" }],
    description: "Test case 8",
    failureMessage: "Test when title is undefined, should be ignored",
  },
  {
    keyword: " ",
    expected: [],
    description: "Test case 9",
    failureMessage: "Empty Array Expected",
  },
];

// Run test cases using forEach
testCases.forEach(({ keyword, expected, description, failureMessage }) => {
  const result = fetchDataAndFilter(data, keyword);
  const passingCriteria = stringify(result) === stringify(expected);

  console.log(
    `${description}: ${
      passingCriteria ? "Passed" : `Failed , Reason : ${failureMessage}`
    }`
  );
});
