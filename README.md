[Demo](https://escaping-boredom.herokuapp.com/)

## How to use

1. Install dependencies

```
npm install
```

2. Deploy Front App

```
npm run front
```

3. Deploy Back App

Run mongod and then:

```
npm run back
```

If you need to restart the server:

```
rs
```

- chemistry-ui as local dependency (for development and testing)

On chemistry-ui:

```
npm link
```

Then, on this project:

```
npm link chemistry-ui
```

There're some issues with npm link regarding having different React and ReactDomRouter versions.
To solve this:

```
npm link ../chemistry-ui/node_modules/react
npm link ../chemistry-ui/node_modules/react-router-dom
```

- Launch Jasmine (Unit Tests)

```
npm run utest
```

- Launch Cypress (Functional Tests)

```
npm run ftest
```

- Build

```
npm run-script build
```

## Functional description

- When the App is launched, real data como from node.js server.

- When Cypress Tests are launched, fake data is used from randomized JSONs.

## Technical Stack

- React

- Node
- MongoDB

- Babel (compilation)
- Webpack (bundling)

- Jasmine: Unit Testing Tool
- Cypress: Integration Testing Tool

- [Chemistry-UI](https://github.com/W01fw00d/chemistry-ui): my own Components Library, based on Material-UI.

- Prettier, ESLint (code style tools, based on airbnb conventions), Husky (pre-commit automated formatting tool)

## Technical discusion

- A pre-commit has been added to this repository to help maintain a coherent code style, even if new developers were added to this project in the future.

- Literals are not hardcoded but instead passed down to components by props in order to implement a multilanguage support system in the future.

- A random number and string generator has been added to Cypress Tests in order to garantee that different data will fit correctly on the UI (for example, this simulates the effect of having different languages).

- Build and unit tests are executed on the CI in GitHub with every push to master and pull request.

## Atribution

- Favicon generated from [original image](https://pixabay.com/photos/leuchtkasten-shield-output-note-1773916/), which is under Pixabay License, free for commercial use

- Editor's choice banner from [original image](https://pixabay.com/illustrations/tape-red-decor-for-the-web-plate-2410588/), which is under Pixabay License, free for commercial use

- Fake room image from [pixabay](https://pixabay.com/photos/wall-furniture-design-apartment-416060/)
