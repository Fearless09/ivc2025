/*
  Warnings:

  - Made the column `name` on table `Member` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Member" ALTER COLUMN "name" SET NOT NULL;
