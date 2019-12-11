import {Arg, Mutation, Query, Resolver} from "type-graphql";
import AchievementType from "../../../app/Infrastructure/Graphql/Types/Achievement";
import AchievementService from "../../../app/Domain/Services/AchievementService";
import AchievementCommentType from "../../../app/Infrastructure/Graphql/Types/AchievementComment";

@Resolver()
class AchievementResolver {

    @Query(() => [AchievementType])
    async getAllAchievement() {
        return await AchievementService.AllAchievements();
    }

    @Query(() => AchievementType)
    async getAchievement(@Arg('achievementId') achievementId: number) {
        return await AchievementService.getAchievement(achievementId);
    }

    @Mutation(() => [AchievementCommentType])
    async getAchievementComments(@Arg("achievementId") achievementId: number) {
        return await AchievementService.getComments(achievementId);
    }

    @Mutation(() => Boolean)
    async addAchievementComment(
        @Arg("achievementId") achievementId: number,
        @Arg("userId") userId: string,
        @Arg("comment")comment: string
    ) {
        return await AchievementService.newComment(achievementId, userId, comment);
    }

    @Mutation(() => Boolean)
    async editAchievementComment(
        @Arg("commentId") commentId: string,
        @Arg('comment') comment: string
    ) {
        return await AchievementService.editComment({commentId, comment});
    }

    @Mutation(() => Boolean)
    async deleteAchievementComment(@Arg("commentId") commentId: string) {
        return await AchievementService.removeComment(commentId);
    }
}

export default AchievementResolver;