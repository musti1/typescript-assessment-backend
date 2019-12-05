const uuid = require('uuid/v1');

class AchievementComment {

    id: string;
    achievementId: number;
    userId: string;
    comment: string;

    constructor(
        id: string,
        achievementId: number,
        userId: string,
        comment: string
    ) {
        this.id = id;
        this.achievementId = achievementId;
        this.userId = userId;
        this.comment = comment;
    }

    toStoreObject() {
        return {
            id: this.id,
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
            obj.id,
            obj.achievementId,
            obj.userId,
            obj.comment
        );
    }
}

export default AchievementComment;
