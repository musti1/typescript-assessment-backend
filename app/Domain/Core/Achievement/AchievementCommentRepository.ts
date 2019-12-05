import AchievementComment from "./AchievementComment";

interface AchievementCommentRepository {

    /**
     *
     * @param {AchievementComment} achievementComment
     * @return Promise<AchievementComment>
     */
    add(achievementComment: AchievementComment): Promise<AchievementComment | boolean>;

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
    updateComment(achievementComment: AchievementComment): Promise<AchievementComment | boolean>;

    /**
     *
     * @param achievementCommentId
     * @return Promise<boolean>
     */
    deleteComment(achievementCommentId): Promise<boolean>;
}

export default AchievementCommentRepository;