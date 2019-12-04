import AchievementModel from "../Models/AchievementModel";
import AchievementRepository from "../../Domain/Core/Achievement/AchievementRepository";
import Achievement from "../../Domain/Core/Achievement/Achievement";

class DbAchievementRepository implements AchievementRepository{

    async add(achievement: Achievement): Promise<boolean> {
        return await AchievementModel.create(achievement);
    }

    async getAll(): Promise<Achievement[]> {
        return await AchievementModel.find({});
    }

    async getByAchievementId(achievementId): Promise<Achievement> {
        return await AchievementModel.findOne({id: achievementId});
    }
}

export default new DbAchievementRepository();