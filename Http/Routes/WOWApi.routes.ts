import express = require('express');
import * as WOWApiController from "../Controllers/WOWApiController";

const router = express.Router({});

router.post('/achievement/add', WOWApiController.getAchievements);
router.post('/item/add', WOWApiController.getItems);

export default router;
