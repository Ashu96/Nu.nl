# Demo app for nu.nl
A simple news website.

## Getting started

To get started with this application, follow these steps:

1. **Clone the repository**

   Use the following command to clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory**

   Change your current directory to the project directory:

   ```bash
   cd <project-directory>
   ```

3. **Install the dependencies**

   Use the following command to install all the necessary dependencies:

   ```bash
   yarn install
   ```

4. **Start the development server**

   Run the following command to start the development server:

   ```bash
   yarn run dev
   ```

5. **Open the application**

   Open your browser and navigate to `<URL>` shown in the console to view the application.

## Test plan

### Identify the components:

    I would like to test out the `News` and `HotNews` component in regards to what they render. For instance,
    - `News` renders a list of news with first item having an image and rest just title
    - `News` render a list of news in order of their popularity
    - `HotNews` render a list of news in order of latest to oldest

### Test coverage:

    I would simply go with the unit test(component testing) apporach for this project considering the simplicity. Skipping both integration and end-to-end testing for now.

### Testing framework:

    For testing the React components I would go for a testing framework like Jest together with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). However, just to keep things interesting here. I will choose [Vitest](https://vitest.dev/) instead of Jest for this project.

### Notes:

- When the project grows in size and complexity (i.e, more business logic being added). I will do strong emphasis on end-to-end test. It will provide more confidence to the team when releasing changes in future.
- For end-to-end testing I would go with either [Cypress](https://www.cypress.io/) or [Playwright](https://playwright.dev/).
