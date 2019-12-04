import errorHandler = require("errorhandler");
import "reflect-metadata";
import {ApolloServer} from "apollo-server-express";
import {Container} from "typedi";
import {buildSchema} from "type-graphql";
import app from "./app";
import AchievementResolver from "../Http/GraphQl/Resolvers/Achievement";
import ItemResolver from "../Http/GraphQl/Resolvers/Item";
import UserResolver from "../Http/GraphQl/Resolvers/User";

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

const apollo = async () => {
    const schema = await buildSchema({
        resolvers: [AchievementResolver, ItemResolver, UserResolver],
        validate: false
    });
    const apolloServer = new ApolloServer({
        schema,
        context: ({req, res}) => ({ req, res}),
    });

    apolloServer.applyMiddleware({app, path: '/graphql'});
};

apollo().then(() => {
    console.log('Apollo Server Started')
}).catch((err) => {
    console.log(err)
});

/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), '0.0.0.0', () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
});

export default server;