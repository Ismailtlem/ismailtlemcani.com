---
title: Taking A Glance At Software Testing, In Particular E2E Web Apps Testing
date: '2021-04-16'
tags: ['testing', 'Cypress', 'react', 'web-development', 'code-quality']
draft: false
summary: 'Software testing from a very simple perspective and in particular, end to end testing for web applications'
---

![end-to-end-testing-process](/static/images/end-to-end-testing-process.png)

In this article, we will try to explain software testing from a very simple perspective and look in particular into end to end testing of web applications. We will also explore Cypress which is a very popular tool used in end to end testing of web applications.

## What is Software testing ?

Software testing is, simply, the act of verifying that some software does confirm to the expected outcomes.
The academic definition of software testing, is according to the IEEE Standard Glossary of Software Engineering IEEE 610.12-1990 “Testing is the process of exercising a system by manual or automatic means to verify that it satisfies specified requirements or to identify differences between actual and expected results”

## What is Software testing in practice ?

The testing activity is basically only about executing a software and verifying that its results confirms to the original requirements.

Practically, testing is done by executing a set of test cases on the software under test. It is done either manually or by the use of some tool that helps in automating some phases of the testing process.

A test case is defined, according to the [ISTQB glossary](https://glossary.istqb.org/en/term/test-case-3) as follows : "A set of input values, execution preconditions, expected results and execution postconditions, developed for a particular objective or test condition, such as to exercise a particular program path or to verify compliance with a specific requirement."

If, for some particular feature, the output of the software under test equals the expected outcome, the test case made for that purpose should pass. Otherwise, the test case should fail.

## What is end to end testing ?

In simple terms, end to end testing is a level of testing that involves testing an application's workflow from beginning to end. We will go through a popular tool used for end to end testing of web applications in the next sections.

## Popular tool for end to end testing of web applications : Cypress

Cypress is a testing framework for testing web applications. Cypress is usually used for end to end testing of web applications but can also be used for unit testing and integration testing.

![Cypress](/static/images/cypress.png)

## Installing Cypress

You can refer to Cypress [official documentation](https://docs.cypress.io/guides/getting-started/installing-cypress#Installing) to see specific details on how to install Cypress in your specific environment.
If you are using npm, you can install Cypress only by :

```bash
npm i cypress --save-dev
```

## Getting started with Cypress and writing your first tests

For the steps below, you'll need node and npm installed on your machine. Start by creating a react app in your local folder by running the following command :

```bash
npx create-react-app app-name
```

Move to the created folder and start the react app by

```bash
cd app-name && npm start
```

Your created app should be available on localhost:3000

Install Cypress in your project by

```bash
npm i cypress --save-dev
```

You can start using Cypress by

```bash
node_modules/.bin/cypress open
```

You can then configure Cypress for doing end to end testing from the following window

![cypress-config](/static/images/cypress-config.png)

Move to the package.json file and add the following line

```bash
"scripts": {
    ...
    "cypress": "cypress open"
}
```

By this, you can now start Cypress by

```bash
npm run cypress
```

When you installed Cypress, a folder named cypress was created in your local directory.
Move to the integration folder inside the created cypress folder and create your first test file.

```bash
cd cypress/integration
touch first-cypress-test.cy.js
```

Paste the following code into your test file

```javascript
describe('First test', () => {
  it('Test that the page can be visited', () => {
    cy.visit('http://localhost:3000')
  })
})
```

This code just checks that your React app can be visited. Start then Cypress inside your project folder by

```bash
npm run cypress
```

Your react app should also be started. Click on your created test file "first-cypress-test.cy.js" to execute it. It will run that test file in a new window in your browser

![cypress-test-result](/static/images/cypress-test-result.png)

## Add more tests

You can, as an example, test the redirection to the react website by adding the following code in your test file

```javascript
it('Test the redirection', () => {
  cy.visit('http://localhost:3000')
  cy.contains('a', 'Learn React')
    .should('have.attr', 'href', 'https://reactjs.org')
    .click()
    .then((link) => {
      cy.request(link.prop('href')).its('status').should('eq', 200)
    })
})
```

when you execute that test file, it will give the following output

![test-redirection](/static/images/test-redirection.png)

## Cypress cheat sheet

You can refer to this [great cheat sheet](https://cheatography.com/aiqbal/cheat-sheets/cypress-io/) to see the most used functions with Cypress

## Real test cases of a production app

You can refer to this real world [payment app](https://github.com/cypress-io/cypress-realworld-app/tree/develop/cypress/tests) made by Cypress to see real examples of using Cypress functions.

## Final wrods

The testing activity is simply the activity done to test the behavior of some software to prevent bugs happening in the futur.

End to end testing is the testing activity done to test the complete behavioral flow of an application from start to finish. For end to end testing of a web application, Cypress is a great tool that any junior web developer can quickly grasp.
However, in this blog post, we only made a quick introduction into this tool. If you want to dive deep into it, their [official documentation](https://docs.cypress.io/) is the best asset to look into.

If this post was helpful to you in any way, please don't hesitate to share it. You can also follow my [Twitter](https://twitter.com/ismailtlem) account if you would like to see more content related to web programming.
