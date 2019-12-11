import AchievementComment from "./AchievementComment";

interface AchievementCommentRepository {

    /**
     *
     * @param {AchievementComment} achievementComment
     * @return Promise<AchievementComment>
     */
    add(achievementComment: AchievementComment): Promise<boolean>;

    /**
     *
     * @param achievementId
     * @return Promise<AchievementComment[]>
     */
    getAllAchievementComment(achievementId: string): Promise<AchievementComment[]>;

    /**
     *
     * @param {AchievementComment} achievementComment
     * @return Promise<AchievementComment>
     */
    updateComment(achievementComment: AchievementComment): Promise<boolean>;

    /**
     *
     * @param achievementCommentId
     * @return Promise<boolean>
     */
    deleteComment(achievementCommentId): Promise<boolean>;
}

export default AchievementCommentRepository;