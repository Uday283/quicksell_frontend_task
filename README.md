Kanban Board Application This is a Kanban board application built using ReactJS and styled using pure CSS. The application interacts with the provided API endpoint to display and group tickets dynamically based on user selection. The goal is to allow users to group and sort tickets in various ways, offering an interactive experience.

Features Group Tickets:

By Status: Group tickets based on their current status. By User: Group tickets based on the assigned user. By Priority: Group tickets based on their priority level. Sort Tickets:

By Priority: Sort tickets in descending order based on their priority. By Title: Sort tickets alphabetically by title. State Persistence:

The user's current view state (grouping and sorting preferences) is saved locally and persists even after a page reload. Priority Levels:

Urgent (Priority level 4) High (Priority level 3) Medium (Priority level 2) Low (Priority level 1) No priority (Priority level 0) Usage Click the "Display" button to select a grouping option:

By Status By User By Priority Once grouped, you can sort the tickets either:

By Priority (descending) By Title (ascending) The current view (grouping and sorting) is saved automatically, so if you reload the page, your preferences will persist.

API Integration The application communicates with the following API: API URL: https://api.quicksell.co/v1/internal/frontend-assignment

The API returns ticket data, including ticket ID, title, user, status, and priority level. These tickets are displayed on the Kanban board and can be grouped or sorted as per user interaction.

Priority Levels (From API) 4: Urgent 3: High 2: Medium 1: Low 0: No priority Custom CSS This project uses pure CSS for styling to ensure flexibility and responsiveness. No external CSS libraries such as Bootstrap or Tailwind are used. The design is similar to the provided screenshots and is fully responsive.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
