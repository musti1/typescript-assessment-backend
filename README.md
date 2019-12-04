# Typescript Assessment Backend

This project is build in Typescript (NodeJs). Using Domain Driven Design Pattern, Mongodb as Database AND Graphql. It is a basic backend project to store achievements and items using Blizzard API, and uses TypeGraphql to retrieve list of achievements, items and its comments.

# Available Scripts

```ln -s .env.example .env```

This command will link the .env.development file with .env after this command set the .env file according to your details.

```npm i```

To install the require packages for this project.

```npm run build```

To create the build.

```npm run start```

This command will start the server on defined port.

# Routes

`http://localhost:{port}/graphql`

Access the graphql by this link.

`http://localhost:{port}/wow/achievement/add`

Method: POST
Body: { achievementIds: []}

`http://localhost:{port}/wow/item/add`

Method: POST
Body: { itemIds: []}
