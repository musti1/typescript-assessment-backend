import DbAchievementRepository from "../../Infrastructure/MongoRepository/DbAchievementRepository";
import DbAchievementCommentRepository from "../../Infrastructure/MongoRepository/DbAchievementCommentRepository";
import AchievementComment from "../Core/Achievement/AchievementComment";

class AchievementService {
    static async AllAchievements() {
        try {
            return await DbAchievementRepository.getAll();
        } catch (e) {
            return false;
        }
    }

    static async getAchievement(achievementId) {
        try {
            return await DbAchievementRepository.getByAchievementId(achievementId);
        } catch (e) {
            return false;
        }
    }

    static async getComments(achievementId) {
        try {
            return await DbAchievementCommentRepository.getAllAchievementComment(achievementId);
        } catch (e) {
            return false;
        }
    }

    static async newComment(achievementId, userId, comment) {
        try {
            const achievementComment = AchievementComment.createFromDetails(achievementId, userId, comment);
            return await DbAchievementCommentRepository.add(achievementComment);
        } catch (e) {
            return false;
        }
    }

    static async editComment(achievementCommentObj) {
        try {
            const achievementComment = AchievementComment.createFromObject(achievementCommentObj);
            return await DbAchievementCommentRepository.updateComment(achievementComment);
        } catch (e) {
            return false;
        }
    }

    static async removeComment(commentId) {
        try {
            return await DbAchievementCommentRepository.deleteComment(commentId);
        } catch (e) {
            return false;
        }
    }
}

export default AchievementService;