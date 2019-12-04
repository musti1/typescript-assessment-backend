class Achievement {
    id: number;
    title: string;
    description: string;
    points: number;
    icon: string;
    criteria: [];
    accountWide: boolean;
    factionId: number;

    constructor(
        id: number,
        title: string,
        description: string,
        points: number,
        icon: string,
        criteria: [],
        accountWide: boolean,
        factionId: number
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.points = points;
        this.icon = icon;
        this.criteria = criteria;
        this.accountWide = accountWide;
        this.factionId = factionId;
    }

    toStoreObject() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            points: this.points,
            icon: this.icon,
            criteria: this.criteria,
            accountWide: this.accountWide,
            factionId: this.factionId,
        }
    }

    static createFromDetails(
        id: number,
        title: string,
        description: string,
        points: number,
        icon: string,
        criteria: [],
        accountWide: boolean,
        factionId: number): Achievement {
        return new Achievement(
            id,
            title,
            description,
            points,
            icon,
            criteria,
            accountWide,
            factionId
        )
    }

    static createFromObject(obj: any): Achievement {
        return new Achievement(
            obj.id,
            obj.title,
            obj.description,
            obj.points,
            obj.icon,
            obj.criteria,
            obj.accountWide,
            obj.factionId
        );
    }
}

export default Achievement;
