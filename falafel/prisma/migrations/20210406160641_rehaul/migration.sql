/*
  Warnings:

  - Added the required column `followingAmount` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `followerAmount` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "followingAmount" INTEGER NOT NULL,
ADD COLUMN     "followerAmount" INTEGER NOT NULL;
