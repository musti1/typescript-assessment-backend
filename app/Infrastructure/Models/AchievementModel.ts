import { prop, Typegoose } from 'typegoose';

class Achievement extends Typegoose {

  @prop()
    id?: number;

  @prop()
    title?: string;

  @prop()
    description?: string;

  @prop()
    points?: number;

  @prop()
    icon?: string;

  @prop()
    criteria?: any;

  @prop()
    accountWide?: boolean;

  @prop()
    factionId?: number;
}

const AchievementModel = new Achievement().getModelForClass(Achievement);

export default AchievementModel;