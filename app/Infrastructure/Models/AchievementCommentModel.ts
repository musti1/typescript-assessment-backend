import { prop, Typegoose } from 'typegoose';

class AchievementComment extends Typegoose {

    @prop()
    id?: string;

    @prop()
    achievementId?: number;

    @prop()
    userId?: string;

    @prop()
    comment?: string;
}

const AchievementCommentModel = new AchievementComment().getModelForClass(AchievementComment);

export default AchievementCommentModel;