import AchievementCommentModel from "../Models/AchievementCommentModel";
import AchievementCommentRepository from "../../Domain/Core/Achievement/AchievementCommentRepository";
import AchievementComment from "../../Domain/Core/Achievement/AchievementComment";

class DbAchievementCommentRepository implements AchievementCommentRepository {
    async add(achievementComment: AchievementComment): Promise<boolean> {
        try {
            await AchievementCommentModel.create(achievementComment);
            return true;
        } catch (e) {
            return false
        }
    }

    async getAllAchievementComment(achievementId: string): Promise<AchievementComment[]> {
        try {
            const achievementsCommentObj = await AchievementCommentModel.aggregate([
                {
                    $match: {
                        achievementId
                    }
                },
                {
                    $lookup: {
                        from: 'users',
                        localField: 'userId',
                        foreignField: 'userId',
                        as: 'userDetail'
                    }
                },
                {
                    $unwind: "$userDetail"
                }
            ]);
            return achievementsCommentObj.map(achievementCommentObj => {
                const achievementComment = AchievementComment.createFromObject(achievementCommentObj);
                achievementComment.setUserDetail(achievementCommentObj.userDetail);
                return achievementComment;
            })
        } catch (e) {
            return []
        }
    }

    async updateComment(achievementComment: AchievementComment): Promise<boolean> {
        try {
            await AchievementCommentModel.findOneAndUpdate({commentId: achievementComment.commentId}, achievementComment, {new: true});
            return true;
        } catch (e) {
            return false
        }
    }

    async deleteComment(commentId): Promise<boolean> {
        try {
            await AchievementCommentModel.deleteOne({commentId});
            return true;
        } catch (e) {
            return false;
        }
    }
}

export default new DbAchievementCommentRepository();