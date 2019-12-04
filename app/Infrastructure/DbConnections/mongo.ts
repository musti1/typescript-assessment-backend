import * as mongoose from 'mongoose';
import db from "../Config/db";

mongoose.connect(`mongodb://${db.mongo.host}:${db.mongo.port}/${db.mongo.db}`);

module.exports = mongoose;