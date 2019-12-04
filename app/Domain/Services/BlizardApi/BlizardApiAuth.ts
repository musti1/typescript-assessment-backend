import blizzard from "../../../../Config/BlizardConfig";
import Axios from "axios";

class BlizardApiAuth {

    static async getAuthToken() {
        return await Axios.get(blizzard.endpoint.authToken, {
            auth: {
                username: blizzard.auth.key,
                password: blizzard.auth.secret,
            },
            params: {
                grant_type: blizzard.params.grantType,
            },
        });
    }
}

export default BlizardApiAuth;