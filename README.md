# @onchange.fyi/mailer

### What is it?
<details>
  <summary>
    tl;dr: Service that will send emails
  </summary>
  <br />

  End goal will hopefully be something like the following:
  1. Receive `/put` with `{ targetId }`
  2. Fetch all users watching this `{ targetId }`
  3. Fetch url for diff snapshot of this change
  4. Compose and send email to every user in the list

</details>
<br/>

### How to use it?
<details>
  <summary>
    tl;dr: <code>unexposed to the outside world</code>
  </summary>
  <br />

  You can test the function invocation by _just calling it_ with `yarn test`
  You may also update it with `yarn deploy`

</details>
<br/>

### TODO:
<details>
<summary>tl;dr: <strong>Some</strong></summary>
<br />

  1. Instantiate the users database
  2. Instantiate the targets database
  3. Instantiate the image repository
  4. Create the Evaluator
  5. Test mocked context interactions
  6. Test mocked database interactions
  7. Email template research
  8. Create a not-shit email template

</details>
<br/>
