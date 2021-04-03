/*
  Warnings:

  - You are about to drop the `LikesOnTweets` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "LikesOnTweets" DROP CONSTRAINT "LikesOnTweets_likeId_fkey";

-- DropForeignKey
ALTER TABLE "LikesOnTweets" DROP CONSTRAINT "LikesOnTweets_tweetId_fkey";

-- DropForeignKey
ALTER TABLE "LikesOnTweets" DROP CONSTRAINT "LikesOnTweets_userId_fkey";

-- DropTable
DROP TABLE "LikesOnTweets";

-- CreateTable
CREATE TABLE "_LikeToTweet" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_LikeToTweet_AB_unique" ON "_LikeToTweet"("A", "B");

-- CreateIndex
CREATE INDEX "_LikeToTweet_B_index" ON "_LikeToTweet"("B");

-- AddForeignKey
ALTER TABLE "_LikeToTweet" ADD FOREIGN KEY ("A") REFERENCES "Like"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LikeToTweet" ADD FOREIGN KEY ("B") REFERENCES "Tweet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
