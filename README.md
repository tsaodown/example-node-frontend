# Base Node - Frontend

### Commands
`npm start`: Start the development server and watch for changes.

`npm run test`: Run all tests.

`npm run watch:test`: Run all tests and watch for changes.

`npm run cover`: Run all tests and measure code coverage.

`npm run watch:cover`: Run all tests, measure code coverage, and watch for changes.

### Project Structure

All application code will be stored in the `app` directory. Within the `app` directory, higher level UI concepts can be stored in any directory structure, but related `jsx`, `scss`, and `test.js` should be stored together.

### Documentation

#### Testing

- **Test Runner:** [ava](https://github.com/avajs/ava)
- **TDD/BDD Syntax:** [ava-spec](https://github.com/avajs/ava-spec)
- **Mocks/Spies**: [sinon](https://github.com/sinonjs/sinon)
- **React Element Testing:** [enzyme](https://github.com/airbnb/enzyme)
- **Code Coverage:** [istanbul](https://github.com/gotwarlost/istanbul)

#### Development
- **View Generation:** [react](https://github.com/facebook/react)
- **Frontend Framework:** [foundation](http://foundation.zurb.com/sites/docs/)
- **Compiled CSS:** [SASS](http://www.sass-lang.com/documentation/)

#### Process
- **Code Linting:** [eslint](https://github.com/eslint/eslint)
- **Code Style:** [standard](http://standardjs.com/)
- **Bundler/Build Tool:** [webpack](https://webpack.github.io/docs/)
- **Javascript 'Compiler':** [babel](https://github.com/babel/babel)
- **Javascript Static Analysis/Type Checking:** [flow](https://flowtype.org/docs/getting-started.html)

#### Server
- **Web Framework:** [express](https://github.com/expressjs/express)
- **Configuration:** [convict](https://github.com/mozilla/node-convict)
