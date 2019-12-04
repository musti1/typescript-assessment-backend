import Achievement from "./Achievement";

interface AchievementRepository {
    /**
     * @param {Achievement} achievement
     * @return Promise<boolean>
     */
    add(achievement: Achievement): Promise<boolean>;

    /**
     * @return Promise<Achievement[]>
     */
    getAll(): Promise<Achievement[]>;

}

export default AchievementRepository;
