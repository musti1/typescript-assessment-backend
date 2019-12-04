import WowApiService from "../../app/Domain/Services/BlizardApi/WowApiService";
import {Response, Request, NextFunction} from "express";

export const getAchievements = async (req: Request, res: Response) => {
    try {
        const {achievementIds} = req.body;
        const response = achievementIds.map(async (achievementId) => {
            await WowApiService.getAchievements(achievementId);
        });
        Promise.all(response);
        res.status(200).send({message: "data dumped"});
    } catch (e) {
        res.status(500).send({error: e});
    }
};

export const getItems = async (req: Request, res: Response) => {
    try {
        const {itemIds} = req.body;
        const response = itemIds.map(async (itemId) => {
            return await WowApiService.getItems(itemId);
        });
        Promise.all(response);
        res.status(200).send({message: "data dumped"});
    } catch (e) {
        res.status(500).send({error: e});
    }
};