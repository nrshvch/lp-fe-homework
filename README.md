# Levelpath frontend take-home task

## UPDATE

While the Levelpath reviewer appreciated the quality of the solution, it was ultimately REJECTED due to two main reasons:
- **Exposed API Key**: This was cited as a major security violation. (Although obvious, and the commit message explicitly stating this was done intentionally for the reviewer's convenience, this was still considered unacceptable. P.s. Exposed API key is disabled by now, use your own.);
- **Overengineered**: In particular, overengineered global state solution. (Although being warned about it in advance, Isn't it what the assignment is impling you to do, by mentioning global state management, Redux, reducer tests, etc. for project of such scale? Reviewers didn't care.)

The feedback left the impression that the evaluation was subjective and that the reviewers were ignorant of the project context and explicit instructions.

My key take-away is to avoid assignments where the stated expectations and assigment description don't align from the start.

Hopefully this will be useful to someone.


## Original Assignment

> ### Task
> 
> Implement a list of today's birthdays using Wikipedia "On this day" API: https://api.wikimedia.org/wiki/Feed_API/Reference/On_this_day.
>
> ### Requirements
>
> - Initially there must be a button. Data is fetched and displayed after the button is clicked.
> - Entries must be sorted by year (newest first by default) with a toggle option for ascending/descending order.
> - "Loading" message/UI component must be shown while data is being fetched.
> - Error modal must be shown when fetching data has failed.
> - Implement frontend pagination to handle a large number of entries.
> - Write some custom CSS for basic styling (should not use utility class CSS frameworks, such as Tailwind).
>
> ### Implementation requirements
>
> - React framework and global state management solution of your choice (Context, Redux, MobX, etc.) must be used.
> - The project structure should be designed with future extendability in mind, as it will serve as a base for live coding exercises.
> - Provide some basic styling with custom css or css-in-js solution of your choice.
> - You can use whatever React project boilerplate, tools and libraries you like.
> - TypeScript is preferred over JavaScript.
> - Application parts must have tests, however it's not necessary to have full test coverage, write at least a single one for every type of test. As an example for imaginary Redux project: action creator, reducer, asynchronous functions, UI component render, UI component user interactions are different types of tests.
> 
> ### Submitting
> 
> - Please bundle your homework using `git bundle create lp-fe-homework.bundle --all`
> - Attach bundle file to email and send as a reply to initial homework email
> - We will then extract it using `git clone lp-fe-homework.bundle` on our side
> 
> ---
> 
> version: 2025-05-19

## Solution

> React framework and global state management solution of your choice (Context, Redux, MobX, etc.) must be used.

- Ussualy I would go with Zustand or Redux when it's boilerplate is justified. 
- For the given project useReducer with React Context were used, although it triggers unnecessary renders, its totally sufficient for small-medium projects, is easy to test and is more transparent in showcasing developers knowledge.
- Thunk actions are intentionally not stored in global state. Topic for discussion.

> The project structure should be designed with future extendability in mind, as it will serve as a base for live coding exercises.

- More basic approach could be used, but since asked - FSD were applied, although overkill.

> Provide some basic styling with custom css or css-in-js solution of your choice.

- I've used custom css and normalize.css just to keep things cosistent.

> You can use whatever React project boilerplate, tools and libraries you like.

- I've used vitejs+vitest.

> TypeScript is preferred over JavaScript.

- TypeScript!

> Application parts must have tests, however it's not necessary to have full test coverage, write at least a single one for every type of test. As an example for imaginary Redux project: action creator, reducer, asynchronous functions, UI component render, UI component user interactions are different types of tests.

- There are reducer test, action creator test, async action - fetching hook test, component render, snapshot and interaction test, as well as storybook for component development/manual testing.




