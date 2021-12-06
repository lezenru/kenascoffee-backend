/*
  Warnings:

  - You are about to drop the column `loaction` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "loaction",
ADD COLUMN     "location" TEXT;
