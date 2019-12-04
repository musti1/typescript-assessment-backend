import "reflect-metadata";
import {Field, ObjectType} from "type-graphql";

@ObjectType()
class BonusStats {
    @Field()
    stat: number;

    @Field()
    amount: number
}

@ObjectType()
class ItemSpells {
    @Field()
    spellId: number;

    @Field()
    nCharge: number;

    @Field()
    consumable: boolean;

    @Field()
    categoryId: number;

    @Field()
    trigger: string;

    @Field()
    scaledDescription: string;
}

@ObjectType()
class Damage {
    @Field()
    min: number;

    @Field()
    max: number;

    @Field()
    exactMin: number;

    @Field()
    exactMax: number;
}

@ObjectType()
class WeaponInfo {
    @Field(type => Damage)
    damage: Damage;

    @Field()
    weaponSpeed: number;

    @Field()
    dps: number;
}

@ObjectType()
class ItemSource {
    @Field()
    sourceId: number;

    @Field()
    sourceType: string;
}

@ObjectType()
class BonusSummary {
    @Field(type => [String])
    defaultBonusLists: string[];

    @Field(type => [String])
    chanceBonusLists: string[];

    @Field(type => [String])
    bonusChances: string[];
}

@ObjectType()
class ItemType {

    @Field()
    id: number;

    @Field()
    description: string;

    @Field()
    name: string;

    @Field()
    icon: string;

    @Field()
    stackable: number;

    @Field()
    itemBind: number;

    @Field(type => [BonusStats])
    bonusStats: BonusStats[];

    @Field(type => [ItemSpells])
    itemSpells: ItemSpells[];

    @Field()
    buyPrice: number;

    @Field()
    itemClass: number;

    @Field()
    itemSubClass: number;

    @Field()
    containerSlots: number;

    @Field(type => WeaponInfo)
    weaponInfo: WeaponInfo;

    @Field()
    inventoryType: number;

    @Field()
    equippable: true;

    @Field()
    itemLevel: number;

    @Field()
    maxCount: number;

    @Field()
    maxDurability: number;

    @Field()
    minFactionId: number;

    @Field()
    minReputation: number;

    @Field()
    quality: number;

    @Field()
    sellPrice: number;

    @Field()
    requiredSkill: number;

    @Field()
    requiredLevel: number;

    @Field()
    requiredSkillRank: number;

    @Field(type => ItemSource)
    itemSource: ItemSource;

    @Field()
    baseArmor: number;

    @Field()
    hasSockets: boolean;

    @Field()
    isAuctionable: boolean;

    @Field()
    armor: number;

    @Field()
    displayInfoId: number;

    @Field()
    nameDescription: string;

    @Field()
    nameDescriptionColor: string;

    @Field()
    upgradable: true;

    @Field()
    heroicTooltip: boolean;

    @Field()
    context: string;

    @Field(type => [String])
    bonusLists: string[];

    @Field(type => [String])
    availableContexts: string[];

    @Field(type => BonusSummary)
    bonusSummary: BonusSummary;

    @Field()
    artifactId: number;
}

export default ItemType;