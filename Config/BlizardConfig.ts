require('dotenv').config();

const blizzard = {
    endpoint: {
        authToken: 'https://us.battle.net/oauth/token',
    },
    auth: {
        key: process.env.BLIZARD_CLIENT_KEY,
        secret: process.env.BLIZARD_CLIENT_SECRET
    },
    params: {
        grantType: 'client_credentials'
    },
    WOWEndpoints: {
        achievementsIndex: 'https://us.api.blizzard.com/data/wow/achievement/index',
        achievements: 'https://us.api.blizzard.com/data/wow/achievement/',
        items: 'https://us.api.blizzard.com/data/wow/item-class/index',
        creatureFamily: 'https://us.api.blizzard.com/data/wow/creature-family/index',
        creatureType: ' https://us.api.blizzard.com/data/wow/creature-type/index'
    },
    WOWParams: {
        region: process.env.WOW_PARAM_REGION,
        namespace: process.env.WOW_PARAM_NAMESPACE,
        locale: process.env.WOW_PARAM_LOCALE
    }
};

export default blizzard;