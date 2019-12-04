import AchievementCommentModel from "../Models/AchievementCommentModel";
import AchievementCommentRepository from "../../Domain/Core/Achievement/AchievementCommentRepository";
import AchievementComment from "../../Domain/Core/Achievement/AchievementComment";

class DbAchievementCommentRepository implements AchievementCommentRepository {
    async add(achievementComment: AchievementComment): Promise<AchievementComment | boolean> {
        try {
            return await AchievementCommentModel.create(achievementComment);
        } catch (e) {
            return false
        }
    }

    async getAllAchievementComment(itemId: string): Promise<AchievementComment[]> {
        try {
            const achievementsCommentObj = await AchievementCommentModel.find({itemId});
            return achievementsCommentObj.map(achievementCommentObj => {
                return AchievementComment.createFromObject(achievementCommentObj);
            })
        } catch (e) {
            return []
        }
    }

    async updateComment(itemComment: AchievementComment) {
        try {
            const achievementsCommentObj = await AchievementCommentModel.update({id: itemComment.id}, itemComment);
            return achievementsCommentObj.map(achievementCommentObj => {
                return AchievementComment.createFromObject(achievementCommentObj);
            })
        } catch (e) {
            return []
        }
    }

    async deleteComment(achievementCommentId) {
        try {
            await AchievementCommentModel.destroy({id: achievementCommentId});
            return true;
        } catch (e) {
            return false;
        }
    }
}

export default new DbAchievementCommentRepository();