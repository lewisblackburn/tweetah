/*
  Warnings:

  - You are about to drop the column `authorId` on the `Tweet` table. All the data in the column will be lost.
  - You are about to drop the column `commentAmount` on the `Tweet` table. All the data in the column will be lost.
  - You are about to drop the column `retweetAmount` on the `Tweet` table. All the data in the column will be lost.
  - You are about to drop the column `likeAmount` on the `Tweet` table. All the data in the column will be lost.
  - You are about to drop the column `images` on the `Tweet` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `_UserFollows` table. If the table is not empty, all the data it contains will be lost.
  - The migration will add a unique constraint covering the columns `[handle]` on the table `User`. If there are existing duplicate values, the migration will fail.
  - Added the required column `text` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Like` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Retweet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Tweet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Tweet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `handle` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_UserFollows" DROP CONSTRAINT "_UserFollows_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserFollows" DROP CONSTRAINT "_UserFollows_B_fkey";

-- DropForeignKey
ALTER TABLE "Tweet" DROP CONSTRAINT "Tweet_authorId_fkey";

-- DropIndex
DROP INDEX "User.username_unique";

-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "text" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Like" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Retweet" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Tweet" DROP COLUMN "authorId",
DROP COLUMN "commentAmount",
DROP COLUMN "retweetAmount",
DROP COLUMN "likeAmount",
DROP COLUMN "images",
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "username",
ADD COLUMN     "handle" TEXT NOT NULL,
ADD COLUMN     "coverPhoto" TEXT NOT NULL DEFAULT E'url',
ADD COLUMN     "avatar" TEXT NOT NULL DEFAULT E'url',
ADD COLUMN     "bio" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "location" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "website" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "dob" TEXT NOT NULL DEFAULT E'';

-- DropTable
DROP TABLE "_UserFollows";

-- CreateTable
CREATE TABLE "_FollowRelation" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FollowRelation_AB_unique" ON "_FollowRelation"("A", "B");

-- CreateIndex
CREATE INDEX "_FollowRelation_B_index" ON "_FollowRelation"("B");

-- CreateIndex
CREATE UNIQUE INDEX "User.handle_unique" ON "User"("handle");

-- AddForeignKey
ALTER TABLE "_FollowRelation" ADD FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FollowRelation" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tweet" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
