# Tasks App Challenge
This project is a task management app built with ReactJS + TS that allows the user to visualize, create, update and delete tasks provided by a GraphQL API.

## How to run the project?

- To be able to see the source code and run it from there, you can start by cloning the repo on your local machine
```
git clone https://github.com/kevinllox/task-manager-ravn.git
```
- Once you finish cloning, you can access to the folder and run the dependencies.
```
npm install
```
- The project has some env variables set up. Create a <strong>.env</strong> file and add your own credentials.

```
VITE_API_URL=<API_URL>
VITE_GRAPHQL_SERVER=<API_TOKEN>
```

- Finally, just run:
```
npm run dev
```

### You're good to go!

## STACK
This app has been set up using Vite, the easiest alternative to work with ReactJS.
I used React + Typescript to take advantage of type-safe. Since I was gonna work with Apollo Client, I nedeed to have some reassurance to verify the structure of the schema.

The UI of the app was built with ChakraUI. The reason I chose this component libray was because of the simplicity on how you can create parts of the UI faster, saving yourself a hard time when dealing with complex UI state.

Since the application is querying data from a GraphQL API, it uses Apollo Client to manage the different queries and mutations as it provides a simple way to interact with the API through built-in integration with React.

As part of the development process and its good practices, this project includes ESLint along with Prettier pre-configured with the airbnb's set of rules to encourage a standarized way to write code, and a common format across different development evironments.

The application is deployed to GitHub Pages using GitHub Actions to define a simple deployment strategy that builds the project and publish the resources on every push to main branch.

A GitHub Flow has been implemented in this repository, considering its agility and prioritizing rapid releases.

## Deployment
![Task Manager](image-1.png)
You can visit this app here: [Task Manager App](https://kevinllox.github.io/task-manager-ravn/)