import {prop, Typegoose} from 'typegoose';

class Item extends Typegoose {

    @prop()
    id: number;

    @prop()
    description: string;

    @prop()
    name: string;

    @prop()
    icon: string;

    @prop()
    stackable: number;

    @prop()
    itemBind: number;

    @prop()
    bonusStats: [];

    @prop()
    itemSpells: [];

    @prop()
    buyPrice: number;

    @prop()
    itemClass: number;

    @prop()
    itemSubClass: number;

    @prop()
    containerSlots: number;

    @prop()
    weaponInfo: any;

    @prop()
    inventoryType: number;

    @prop()
    equippable: true;

    @prop()
    itemLevel: number;

    @prop()
    maxCount: number;

    @prop()
    maxDurability: number;

    @prop()
    minFactionId: number;

    @prop()
    minReputation: number;

    @prop()
    quality: number;

    @prop()
    sellPrice: number;

    @prop()
    requiredSkill: number;

    @prop()
    requiredLevel: number;

    @prop()
    requiredSkillRank: number;

    @prop()
    itemSource: any;

    @prop()
    baseArmor: number;

    @prop()
    hasSockets: boolean;

    @prop()
    isAuctionable: boolean;

    @prop()
    armor: number;

    @prop()
    displayInfoId: number;

    @prop()
    nameDescription: string;

    @prop()
    nameDescriptionColor: string;

    @prop()
    upgradable: true;

    @prop()
    heroicTooltip: boolean;

    @prop()
    context: string;

    @prop()
    bonusLists: [];

    @prop()
    availableContexts: [];

    @prop()
    bonusSummary: any;

    @prop()
    artifactId: number;

}

const ItemModel = new Item().getModelForClass(Item);

export default ItemModel;