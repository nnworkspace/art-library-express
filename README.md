# API Server using Express for the App Artwork Library of Alpha Org

This is API server using Express and MongoDB for the App *Artwork Library of Alpha Org*.

## Prerequisites for building this project

1. Install tools: nodejs, npm.

1. Install OpenAPI Generator for npm
    ```shell
    npm install @openapitools/openapi-generator-cli -g
    openapi-generator-cli version
    ```

1. Clone the [art-library-api Repository](https://github.com/nnworkspace/art-library-api) to your
   local computer. Path of the API project must be this project's *sibling*.
   If the path is wrong, the build script of this project won't work. Relevant code in `package.json`,
   pay attention to the input path:
   ```json
   "gen:api:inventory": "openapi-generator-cli generate -g nodejs-express-server -i ../art-library-api/art-library-inventory-api.yml -o ./src/gen/inventory",
    "gen:api:lending": "openapi-generator-cli generate -g nodejs-express-server -i ../art-library-api/art-library-lending-api.yml -o ./src/gen/lending",
    "prestart": "npm run gen:api:inventory && npm run gen:api:lending",
    "start": "ng serve",
    "prebuild": "npm run gen:api:inventory && npm run gen:api:lending",
   ```
