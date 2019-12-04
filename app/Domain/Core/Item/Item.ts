class Item {
    id: number;
    description: string;
    name: string;
    icon: string;
    stackable: number;
    itemBind: number;
    bonusStats: any;
    itemSpells: any;
    buyPrice: number;
    itemClass: number;
    itemSubClass: number;
    containerSlots: number;
    weaponInfo: any;
    inventoryType: number;
    equippable: true;
    itemLevel: number;
    maxCount: number;
    maxDurability: number;
    minFactionId: number;
    minReputation: number;
    quality: number;
    sellPrice: number;
    requiredSkill: number;
    requiredLevel: number;
    requiredSkillRank: number;
    itemSource: any;
    baseArmor: number;
    hasSockets: boolean;
    isAuctionable: boolean;
    armor: number;
    displayInfoId: number;
    nameDescription: string;
    nameDescriptionColor: string;
    upgradable: true;
    heroicTooltip: boolean;
    context: string;
    bonusLists: string[];
    availableContexts: string[];
    bonusSummary: any;
    artifactId: number;

    constructor(
        id: number,
        description: string,
        name: string,
        icon: string,
        stackable: number,
        itemBind: number,
        bonusStats: any,
        itemSpells: any,
        buyPrice: number,
        itemClass: number,
        itemSubClass: number,
        containerSlots: number,
        weaponInfo: any,
        inventoryType: number,
        equippable: true,
        itemLevel: number,
        maxCount: number,
        maxDurability: number,
        minFactionId: number,
        minReputation: number,
        quality: number,
        sellPrice: number,
        requiredSkill: number,
        requiredLevel: number,
        requiredSkillRank: number,
        itemSource: any,
        baseArmor: number,
        hasSockets: boolean,
        isAuctionable: boolean,
        armor: number,
        displayInfoId: number,
        nameDescription: string,
        nameDescriptionColor: string,
        upgradable: true,
        heroicTooltip: boolean,
        context: string,
        bonusLists: string[],
        availableContexts: string[],
        bonusSummary: any,
        artifactId: number
    ) {
        this.id = id;
        this.description = description;
        this.name = name;
        this.icon = icon;
        this.stackable = stackable;
        this.itemBind = itemBind;
        this.bonusStats = bonusStats;
        this.itemSpells = itemSpells;
        this.buyPrice = buyPrice;
        this.itemClass = itemClass;
        this.itemSubClass = itemSubClass;
        this.containerSlots = containerSlots;
        this.weaponInfo = weaponInfo;
        this.inventoryType = inventoryType;
        this.equippable = equippable;
        this.itemLevel = itemLevel;
        this.maxCount = maxCount;
        this.maxDurability = maxDurability;
        this.minFactionId = minFactionId;
        this.minReputation = minReputation;
        this.quality = quality;
        this.sellPrice = sellPrice;
        this.requiredSkill = requiredSkill;
        this.requiredLevel = requiredLevel;
        this.requiredSkillRank = requiredSkillRank;
        this.itemSource = itemSource;
        this.baseArmor = baseArmor;
        this.hasSockets = hasSockets;
        this.isAuctionable = isAuctionable;
        this.armor = armor;
        this.displayInfoId = displayInfoId;
        this.nameDescription = nameDescription;
        this.nameDescriptionColor = nameDescriptionColor;
        this.upgradable = upgradable;
        this.heroicTooltip = heroicTooltip;
        this.context = context;
        this.bonusLists = bonusLists;
        this.availableContexts = availableContexts;
        this.bonusSummary = bonusSummary;
        this.artifactId = artifactId;
    }

    toStoreObject() {
        return {
            id: this.id,
            description: this.description,
            name: this.name,
            icon: this.icon,
            stackable: this.stackable,
            itemBind: this.itemBind,
            bonusStats: this.bonusStats,
            itemSpells: this.itemSpells,
            buyPrice: this.buyPrice,
            itemClass: this.itemClass,
            itemSubClass: this.itemSubClass,
            containerSlots: this.containerSlots,
            weaponInfo: this.weaponInfo,
            inventoryType: this.inventoryType,
            equippable: this.equippable,
            itemLevel: this.itemLevel,
            maxCount: this.maxCount,
            maxDurability: this.maxDurability,
            minFactionId: this.minFactionId,
            minReputation: this.minReputation,
            quality: this.quality,
            sellPrice: this.sellPrice,
            requiredSkill: this.requiredSkill,
            requiredLevel: this.requiredLevel,
            requiredSkillRank: this.requiredSkillRank,
            itemSource: this.itemSource,
            baseArmor: this.baseArmor,
            hasSockets: this.hasSockets,
            isAuctionable: this.isAuctionable,
            armor: this.armor,
            displayInfoId: this.displayInfoId,
            nameDescription: this.nameDescription,
            nameDescriptionColor: this.nameDescriptionColor,
            upgradable: this.upgradable,
            heroicTooltip: this.heroicTooltip,
            context: this.context,
            bonusLists: this.bonusLists,
            availableContexts: this.availableContexts,
            bonusSummary: this.bonusSummary,
            artifactId: this.artifactId,
        }
    }

    static createFromObject(obj: any): Item {
        return new Item(
            obj.id,
            obj.description,
            obj.name,
            obj.icon,
            obj.stackable,
            obj.itemBind,
            obj.bonusStats,
            obj.itemSpells,
            obj.buyPrice,
            obj.itemClass,
            obj.itemSubClass,
            obj.containerSlots,
            obj.weaponInfo,
            obj.inventoryType,
            obj.equippable,
            obj.itemLevel,
            obj.maxCount,
            obj.maxDurability,
            obj.minFactionId,
            obj.minReputation,
            obj.quality,
            obj.sellPrice,
            obj.requiredSkill,
            obj.requiredLevel,
            obj.requiredSkillRank,
            obj.itemSource,
            obj.baseArmor,
            obj.hasSockets,
            obj.isAuctionable,
            obj.armor,
            obj.displayInfoId,
            obj.nameDescription,
            obj.nameDescriptionColor,
            obj.upgradable,
            obj.heroicTooltip,
            obj.context,
            obj.bonusLists,
            obj.availableContexts,
            obj.bonusSummary,
            obj.artifactId,
        );
    }
}

export default Item;
