import blizzardConfig from "../../../../Config/BlizardConfig";
import DbAchievementRepository from "../../../Infrastructure/MongoRepository/DbAchievementRepository";
import DbItemRepository from "../../../Infrastructure/MongoRepository/DbItemRepository";
import Item from "../../Core/Item/Item";

const blizzard = require('blizzard.js');

class WowApiService {

    static async getAchievements(achievementId) {
        try {
            const blizzardLib = blizzard.initialize({
                key: blizzardConfig.auth.key,
                secret: blizzardConfig.auth.secret,
            });
            await blizzardLib.getApplicationToken()
                .then(response => {
                    blizzardLib.defaults.token = response.data.access_token
                });
            const achievementObj = await blizzardLib.wow.achievement({id: achievementId});
            await DbAchievementRepository.add(achievementObj.data);
        } catch (e) {
            console.log(e);
        }
    }

    static async getItems(itemId) {
        try {
            const blizzardLib = blizzard.initialize({
                key: blizzardConfig.auth.key,
                secret: blizzardConfig.auth.secret,
            });
            await blizzardLib.getApplicationToken()
                .then(response => {
                    blizzardLib.defaults.token = response.data.access_token
                });
            const itemObj = await blizzardLib.wow.item({id: itemId});

            const item = Item.createFromObject(itemObj.data);
            await DbItemRepository.add(item);
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

}

export default WowApiService;