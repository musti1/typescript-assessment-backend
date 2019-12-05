import UserService from "../../app/Domain/Services/UserService";
import {Response, Request, NextFunction} from "express";

export const login = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body;
        const user = await UserService.signIn(email, password);
        if (user) {
            return res.status(200).send({user});
        }
        return res.status(401).send({error: "Unauthorized: User name or Password Incorrect"});
    } catch (e) {
        return res.status(500).send({error: e});
    }
};

export const signUp = async (req: Request, res: Response) => {
    try {
        const {body} = req;
        const user = await UserService.newUser(body);
        res.status(200).send({user});
    } catch (e) {
        res.status(500).send({error: e});
    }
};