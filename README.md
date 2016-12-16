# Base Node - Frontend

### Commands
`npm start`: Start the development server and watch for changes.

`npm run test`: Run all tests.

`npm run watch:test`: Run all tests and watch for changes.

`npm run cover`: Run all tests and measure code coverage.

`npm run watch:cover`: Run all tests, measure code coverage, and watch for changes.

### Project Structure

All application code will be stored in the `app` directory. Within the `app` directory, higher level UI concepts can be stored in any directory structure, but related `.jsx`, `.scss`, and `.test.js` should be stored together.

### Documentation

#### Testing

- Test Runner: [ava](https://github.com/avajs/ava)
- TDD/BDD Syntax: [ava-spec](https://github.com/avajs/ava-spec)
- Mocks/Spies: [sinon](https://github.com/sinonjs/sinon)
- React Element Testing: [enzyme](https://github.com/airbnb/enzyme)
- Code Coverage: [istanbul](https://github.com/gotwarlost/istanbul)

#### Development
- View Generation: [react](https://github.com/facebook/react)
- Frontend Framework: [foundation](http://foundation.zurb.com/sites/docs/)
- Compiled CSS: [SASS](http://www.sass-lang.com/documentation/)

#### Process
- Code Linting: [eslint](https://github.com/eslint/eslint)
- Code Style: [standard](http://standardjs.com/)
- Bundler/Build Tool: [webpack](https://webpack.github.io/docs/)
- Javascript 'Compiler': [babel](https://github.com/babel/babel)
- Javascript Static Analysis/Type Checking: [flow](https://flowtype.org/docs/getting-started.html)

#### Server
- Web Framework: [express](https://github.com/expressjs/express)
- Configuration: [convict](https://github.com/mozilla/node-convict)

### Developer Setup

I would strongly recommend using Atom as your editor for this project. It has wonderful plugins to work with eslint and flow to reduce developer pain from poor styling and runtime errors.

1. Install [atom](https://atom.io/)
1. Install the following plugins:
    - [highlight-selected](https://atom.io/packages/highlight-selected)
    - [pigments](https://atom.io/packages/pigments)
    - [minimap](https://atom.io/packages/minimap)
    - [minimap-highlight-selected](https://atom.io/packages/minimap-highlight-selected)
    - [minimap-pigments](https://atom.io/packages/minimap-pigments)
    - [minimap-cursorline](https://atom.io/packages/minimap-cursorline)
    - [language-javascript-jsx](https://atom.io/packages/language-javascript-jsx)
    - [nice-index](https://atom.io/packages/nice-index)
    - [vertical-tabs](https://atom.io/packages/vertical-tabs)
    - [autocomplete-modules](https://atom.io/packages/autocomplete-modules)
    - [linter](https://atom.io/packages/linter)
    - [linter-eslint](https://atom.io/packages/linter-eslint)
    - [linter-flow](https://atom.io/packages/linter-flow)
1. Install [nuclide](https://atom.io/packages/nuclide) and disable the following plugins:
    - nuclide-diagnostics-store
    - nuclide-file-tree
    - nuclide-source-control-side-bar
1. Install a better theme and syntax coloring:
    - [SETI UI](https://atom.io/themes/seti-ui)
    - [SETI Syntax](https://atom.io/themes/seti-syntax)
