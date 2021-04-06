-- AlterTable
ALTER TABLE "Tweet" ADD COLUMN     "commentAmount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "likeAmount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "retweetAmount" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "coverPhoto" SET DEFAULT E'https://via.placeholder.com/1500x500',
ALTER COLUMN "avatar" SET DEFAULT E'https://via.placeholder.com/400x400';
