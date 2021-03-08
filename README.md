# Challenge


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Features
    - Add new transaction at the top of the list
    - Reset transaction form to original state.
    - Balance update in transaction form.
    - Text based list filtering.
    - List sorting
    - Responsive support.

## Development features
    - Angular 11
    - Used CSS reset tool for cross-browser consistency.
    - No CSS framework used for design.
    - Styles generated using SASS
    - Modified `arrows.png` and `briefcase.png` images to have background transparency.

## API and HTTP request support.
 
API request support has been included but it is disabled for static deploy to github.
To enable it follow the steps below:
- Browse to the `transactions.service.ts` file.
- Comment the `TransactionsService` class.
- Uncomment the first `TransactionsService` class which is commented by default.
- Uncomment the line that includes the httpclient tool import.
- In a terminal, run `npm run api`. Json-Server will take the `mock/transactions.json` file located in the root directory. An ID has been added to this file for each transaction so that it can work correctly
