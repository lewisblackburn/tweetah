/*
  Warnings:

  - You are about to drop the column `handle` on the `User` table. All the data in the column will be lost.
  - The migration will add a unique constraint covering the columns `[username]` on the table `User`. If there are existing duplicate values, the migration will fail.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User.handle_unique";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "handle",
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User.username_unique" ON "User"("username");
