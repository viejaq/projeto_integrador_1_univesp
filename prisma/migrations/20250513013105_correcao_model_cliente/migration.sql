/*
  Warnings:

  - Added the required column `tell` to the `cliente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cliente" ADD COLUMN     "email" TEXT,
ADD COLUMN     "tell" TEXT NOT NULL,
ALTER COLUMN "numero" SET DATA TYPE TEXT;
