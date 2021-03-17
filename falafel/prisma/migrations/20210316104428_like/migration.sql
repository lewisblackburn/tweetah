/*
  Warnings:

  - You are about to drop the `_LikeToTweet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_LikeToTweet" DROP CONSTRAINT "_LikeToTweet_A_fkey";

-- DropForeignKey
ALTER TABLE "_LikeToTweet" DROP CONSTRAINT "_LikeToTweet_B_fkey";

-- DropTable
DROP TABLE "_LikeToTweet";

-- CreateTable
CREATE TABLE "LikesOnTweets" (
    "tweetId" INTEGER NOT NULL,
    "likeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("tweetId","likeId")
);

-- AddForeignKey
ALTER TABLE "LikesOnTweets" ADD FOREIGN KEY ("tweetId") REFERENCES "Tweet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikesOnTweets" ADD FOREIGN KEY ("likeId") REFERENCES "Like"("id") ON DELETE CASCADE ON UPDATE CASCADE;
