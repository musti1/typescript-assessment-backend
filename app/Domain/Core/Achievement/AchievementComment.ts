const uuid = require('uuid/v1');

class AchievementComment {

    commentId: string;
    achievementId: number;
    userId: string;
    comment: string;

    constructor(
        commentId: string,
        achievementId: number,
        userId: string,
        comment: string
    ) {
        this.commentId = commentId;
        this.achievementId = achievementId;
        this.userId = userId;
        this.comment = comment;
    }

    toStoreObject() {
        return {
            commentId: this.commentId,
            achievementId: this.achievementId,
            userId: this.userId,
            comment: this.comment,
        }
    }

    static createFromDetails(
        achievementId: number,
        userId: string,
        comment: string): AchievementComment {
        return new AchievementComment(
            uuid(),
            achievementId,
            userId,
            comment
        )
    }

    static createFromObject(obj: any): AchievementComment {
        return new AchievementComment(
            obj.commentId,
            obj.achievementId,
            obj.userId,
            obj.comment
        );
    }
}

export default AchievementComment;
