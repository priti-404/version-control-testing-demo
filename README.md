# Version Control, Testing & Deployment Demo

A simple calculator project created to demonstrate:

- Git and GitHub version control
- Repository structure
- Branching and merging
- Automated testing with Jest
- Continuous Integration using GitHub Actions

## Run locally

```bash
npm install
npm test
```

## Features

The calculator provides add, subtract, multiply and divide functions. Division by zero is handled with an error.

## Automated testing

Every push and pull request triggers the GitHub Actions workflow in `.github/workflows/ci.yml`. The workflow installs dependencies and runs the Jest test suite.
