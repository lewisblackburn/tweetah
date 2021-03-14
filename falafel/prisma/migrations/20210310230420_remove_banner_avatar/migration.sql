/*
  Warnings:

  - You are about to drop the column `avatar` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `banner` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User.avatar_unique";

-- DropIndex
DROP INDEX "User.banner_unique";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "avatar",
DROP COLUMN "banner";
