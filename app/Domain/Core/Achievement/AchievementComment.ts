const uuid = require('uuid/v1');

import User from "../User";

class AchievementComment {

    commentId: string;
    achievementId: number;
    userId: string;
    comment: string;
    userDetail: User;

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

    setUserDetail(userObj) {
        this.userDetail = new User(userObj.userId, userObj.firstName, userObj.lastName, userObj.email);
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
