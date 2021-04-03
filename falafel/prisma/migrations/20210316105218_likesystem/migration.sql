/*
  Warnings:

  - The migration will change the primary key for the `Like` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Like` table. All the data in the column will be lost.
  - You are about to drop the `LikesOnTweets` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `tweetId` to the `Like` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Like` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "LikesOnTweets" DROP CONSTRAINT "LikesOnTweets_likeId_fkey";

-- DropForeignKey
ALTER TABLE "LikesOnTweets" DROP CONSTRAINT "LikesOnTweets_tweetId_fkey";

-- AlterTable
ALTER TABLE "Like" DROP CONSTRAINT "Like_pkey",
DROP COLUMN "id",
ADD COLUMN     "tweetId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD PRIMARY KEY ("tweetId", "userId");

-- DropTable
DROP TABLE "LikesOnTweets";

-- AddForeignKey
ALTER TABLE "Like" ADD FOREIGN KEY ("tweetId") REFERENCES "Tweet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
