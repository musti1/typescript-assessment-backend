import express = require('express');
import * as UserController from "../Controllers/UserController";

const router = express.Router({});

router.post('/login', UserController.login);
router.post('/register', UserController.signUp);

export default router;
