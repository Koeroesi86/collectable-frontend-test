# Collectable Interest Profiles

Collectable wants to understand what types of assets our users are most interested in. In order to collect that data, we want to build a UI that presents an asset which the user can like or dislike to register their interest.

Building on top of this repo, we want to add the following features:

- The asset at the top of the stack displays all relevant details to the user, including the image, athlete name, and the name of the asset.
- A user can register their interest in a the card at the top the stack by clicking either a 'Like' or 'Dislike' button (not in the start repo!).
- At the end of the stack the user can see an interest profile that is aggregated from their inputs.
  - Each card has an array of tags that can be used to make this profile.
  - e.g. If I like a `vintage baseball card`, and I don't like a `modern basketball card`, my interests are: `[vintage, baseball]` and my dislikes `[modern, basketball]` and I am ambivalent about cards!

Clone this repo and send it back as soon as you can, either by a public repo or just zip it up and send via email. Include in your submission some notes on what you focused on, what you found difficult/interesting or what you would work on next if you had more time.

Be as creative as you like with the design, no wrong answers!

If you have time, feel free to add new features as you see fit (e.g. a retry button, drag and drop, undo, etc...).

## What we're looking for

- Code clarity
- Tests
- Functionality
- Design
- Documentation

## Packages

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Other packages:

- [Styled System](https://styled-system.com/)
- [Styled Components](https://styled-components.com/)
- [Constate](https://github.com/diegohaz/constate)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
