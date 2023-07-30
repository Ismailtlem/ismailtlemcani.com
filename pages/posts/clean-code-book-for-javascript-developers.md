---
title: "The Clean Code Book for JavaScript Developers: A Quick Summary"
date: "2021-07-22"
tag:
  [
    software-development,
    software-engineering,
    clean-code,
    JavaScript,
    robert-c-martin,
  ]
draft: false
description: "Blog post summarizing the book “Clean Code” written by Robert Martin on how to write a readable and maintainable code."
---

![clean-code-big-picture](/images/clean-code-big-picture.png)

This blog post summarizes the book “Clean Code” written by Robert Martin on how to write a readable and maintainable code.
We’ll use JavaScript to illustrate the rules and best practices of the book.

## About the Book

[Clean code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882) is a book written by the American software engineer and instructor Robert Martin, published in 2008.
The book is about programming best practices gathered from years of experience in the industry in order to write good and clean code that can be easily maintainable in the long term.
Even though the examples that the author uses in his book are in Java, the book's concepts remain relevant for JavaScript and programming in general.

## Some words about the author

[Robert Cecil Martin](https://en.wikipedia.org/wiki/Robert_C._Martin) is an American software engineer, instructor, and author.
He is best known for being the founder of the agile manifesto and developing many software design principles.
Robert Martin is also the author of the well-known book “Clean Code” discussed in this blog post.

## What is a clean code?

Put simply, a clean code is a code that is easy to read and easy to change. It is a code that has been taken care of and where its author has taken the time to keep it simple and ordered.

But why should we bother about writing a clean code? Why can’t we just stick with a messy code if it’s well functioning? Well, there are many reasons for this, but the most important ones are:

- If some software developer working on a project with a team is not caring about clearly expressing his intentions and ideas through clean code, it becomes very difficult for the next person who may use his work to fix a bug or add any improvement to the global project.
- Most code isn’t written and just forgotten or never used. In practice, written code is always improved with additional features and maintained when some bug shows up. Therefore, if it is very difficult to understand what some code is supposed to do, it is much more difficult to edit it or fix any issue in it.

## Book takeaways

Below is a summary of some of the recommended rules to write a clean and understandable code. We’ll illustrate those recommendations by the JavaScript programming language.
The more detailed and exhaustive list of the recommended practices to write a clean code can be found in the book.

### Naming

Because names are everywhere in a software, it’s very important to choose well defined names in order to exactly convey our intention. Here are some principles recommended from the book :

- Choose meaningful names and avoid any disinformation or names that have some particular meaning in other contexts. Bad naming can lead to conveying false information about the developer’s intentions. By reading the name of a variable or a function, we should have a clear idea of what it is doing.

```js filename="test.js"
//Bad naming
const d = new Date();

//Good naming
const currentDate = new Date();
```

- Choose, whenever possible, searchable names that can be easily found in a program. One can easily find MAX_CLASSES_PER_STUDENT in a program but a variable named e will be hard to find because it is a common letter in the English language and likely to show up in every passage of text in every program.

### Functions

Robert Martin states that the most important rule for functions is that they should be small. The longer the function is, the harder it becomes to clearly understand what it is doing and therefore refactoring or improving the function becomes harder. As a rule of thumb, Robert Martin states that functions should hardly be longer than 20 lines.
Here are some recommended rules to have clean and understandable functions :

- Functions should do one thing. Put simply, a function named setSomething should only do the “set” action and nothing more. If a function is doing multiple actions, this function becomes hard to test and hard to refactor or improve whenever there is a need.

```javascript
//Bad
function notifyUsers(users) {
  users.forEach((user) => {
    const userRecord = database.lookup(user);
    if (userRecord.isVerified()) {
      notify(user);
    }
  });
}

// Good
function notifyVerifiedUsers(users) {
  users.filter(isUserVerified).forEach(notify);
}

function isUserVerified(user) {
  const userRecord = database.lookup(user);
  return userRecord.isVerified();
}
```

- When it comes to naming, as previously said, the function's name should be clear enough to clearly say what the function is doing.
  The verb/noun pair is a good way to name functions.
- When it comes to function arguments, the fewer arguments a function has, the better. The more arguments a function has, the harder it is to test this function. Robert Martin states in his book that there must be some very special justification if some function has three arguments or more.
  The book recommends writing functions that have at most two arguments.

### Comments

Comments should be avoided. The book's author recommends always looking for ways to express ourselves in code instead of using comments.
Comments are bad because what they express is often far away from the code they describe for the simple reason that code changes and evolves and comments are not always maintained.
There are, however, some cases where comments can be useful :

- Where there is some legal reason to write a comment
- When it explains some obscure argument or return value from some code that we can’t alter
- TODO comments: comments that some developers can write to are just a reminder for developers about tasks that need to be done in the future but, for some reason, can’t be done at that moment

### Formatting

Code formatting is about having some set of rules that governs the format of our code. Code formatting is important because it makes the developer’s code easier to read and understand. As we previously mentioned, a developer’s job is not only about shipping a functioning code. Writing readable and maintainable code is equally important.
It is better if formatting is handled by some automated tool.
Below are some of the rules recommended by the author for a nice code format:

- **File size should be small**: The smaller a file is, the better. The rule to keep in mind and recommended by the author is to have files that are at most 500 lines long.
- **Vertical density**: The idea here is that the lines of code that are tightly related should appear vertically dense or next to each other. This will prevent scrolling through the source file and trying to figure out the functioning of some function.
- **Variable declarations**: Variables should be declared as close to their usage as possible. This means that local variables should appear at the top of the function, loop variables should be declared inside the loop they are used in, and instance variables should be declared at the top of the class.
- **Dependent functions**: If one function calls another, they should be vertically close to each other

```javascript
// Good code
const handleClose = () => {
  setOpen(false);
};
const handleSubmit = (e) => {
  e.preventDefault();
  handleClose();
};
```

- **Horizontal formatting**: It is recommended to keep our lines short. As a rule, the author suggests writing lines of code that are not longer than 120 characters.

### Error handling

Thrown errors mean that the runtime has identified some errors in our code and lets the developer know by stopping the function execution.
Here are some recommended rules from the book on how to successfully handle errors :

- When we have some risky code that might throw an error, the recommended way to handle the potential errors that might show up is with exceptions, like in the example below. Exceptions in JavaScript are thrown using the keyword throw.
  Instead of handling a potential error in the following way

```javascript
const setProperty = (obj, value, property) => {
  obj[property] = value;
  if (!value) {
    return "Value not found";
  }
};
```

We should instead, handle the potential error with an exception

```javascript
const setProperty = (obj, value, property) => {
  if (!value) {
    throw new Error("Value not found");
  }
  obj[property] = value;
};
```

- We should also provide context when catching errors to help catch the location and the source of the error.
  This is done by displaying informative error messages like in the following example :

```javascript
function divideTwoNumbers(x, y) {
  if (y === 0) {
    throw "Can't divide by 0";
  }
  return x / y;
}

try {
  const result = divideTwoNumbers(5, 0);
} catch (error) {
  console.log(error);
}
```

### Testing

Software testing is an essential activity in the software engineering pipeline, and it has the purpose of finding potential defects or miss behaviors in the system under test to correct these by debugging.
If we don’t have any tests or if our tests are insufficient, we have no idea that some piece of shipped code isn’t breaking anything in the already existing codebase.

There’s no excuse not to write tests. In JavaScript, there are plenty of automation testing tools that one can use. I personally use Jest for my JavaScript projects.

Below is what the author recommends to have a clean code test:

- Test code should be given the same importance as production code. The dirtier the test code is, the harder it becomes to improve or change this code as the application evolves.
- To have tests that are easy to understand and follow, the author of the book recommends testing each concept separately and minimizing the number of assertions in a test function. Ideally, the author recommends having one assertion per function if possible. This will make the code more readable and easier to understand and follow, like shown in the following example.

```javascript
// Not recommended because we are testing multiple concepts
import assert from "assert";

describe("MomentJS", () => {
  it("handles date boundaries", () => {
    let date;

    date = new MomentJS("1/1/2015");
    date.addDays(30);
    assert.equal("1/31/2015", date);

    date = new MomentJS("2/1/2016");
    date.addDays(28);
    assert.equal("02/29/2016", date);

    date = new MomentJS("2/1/2015");
    date.addDays(28);
    assert.equal("03/01/2015", date);
  });
});

// Good code
import assert from "assert";

describe("MomentJS", () => {
  it("handles 30-day months", () => {
    const date = new MomentJS("1/1/2015");
    date.addDays(30);
    assert.equal("1/31/2015", date);
  });

  it("handles leap year", () => {
    const date = new MomentJS("2/1/2016");
    date.addDays(28);
    assert.equal("02/29/2016", date);
  });

  it("handles non-leap year", () => {
    const date = new MomentJS("2/1/2015");
    date.addDays(28);
    assert.equal("03/01/2015", date);
  });
});
```

- **F.I.R.S.T rule**: Code test should, in addition to following the clean code principles, follow the following rules :
  - **Fast**: Tests should be fast and could be run quickly. If tests are slow, we won’t run them frequently. If we don’t run tests frequently, we won’t find problems early enough to fix them.
  - **Independent**: Tests should not depend on each other. We should be able to run each test independently and run the tests in any order we like. When tests depend on each other, then the first one to fail causes all the following tests to fail, which makes finding misbehavior a hard job.
  - **Repeatable**: Tests should be repeatable in any environment
  - **Self-validating**: Our test functions should have a clear boolean output that makes them either pass or fail. We should not have to read into some external log file to say if some test passed or no
  - **Timely**: Tests should be written before writing the production code that makes them pass. This is what TDD is about. If we write tests after that production code is written, we may find that some production code is hard to test which may lead into bugs in production.

### Kent Beck's four rules of simple design

What if there were 4 rules that we needed to follow in order to create simple designed programs ?
This is what Kent Beck's four rules of Simple Design are about. In a nutshell, according to Kent, a software design is simple if it follows those four rules ranked from the rule with the highest priority to the one with the lowest priority :

- Runs all the tests
- Contains no duplication
- Expresses the intent of the programmer
- Minimizes the number of classes and methods

## Final words

Because a given software code is an artifact that will live long after it is first created and will certainly be edited and improved in its lifetime, a developer's job shouldn’t be just about writing a functioning code.
Developers must write a clean code that is easy to maintain and easy to read and follow. That’s what the clean code rules we talked about in this post are all about.
