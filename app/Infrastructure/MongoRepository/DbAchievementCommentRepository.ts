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

    async getAllAchievementComment(achievementId: string): Promise<AchievementComment[]> {
        try {
            const achievementsCommentObj = await AchievementCommentModel.find({achievementId});
            return achievementsCommentObj.map(achievementCommentObj => {
                return AchievementComment.createFromObject(achievementCommentObj);
            })
        } catch (e) {
            return []
        }
    }

    async updateComment(achievementComment: AchievementComment): Promise<AchievementComment | boolean> {
        try {
            const achievementCommentObj = await AchievementCommentModel.findOneAndUpdate({commentId: achievementComment.commentId}, achievementComment, {new: true});
            return AchievementComment.createFromObject(achievementCommentObj)
        } catch (e) {
            return false
        }
    }

    async deleteComment(commentId) {
        try {
            await AchievementCommentModel.deleteOne({ commentId });
            return true;
        } catch (e) {
            return false;
        }
    }
}

export default new DbAchievementCommentRepository();