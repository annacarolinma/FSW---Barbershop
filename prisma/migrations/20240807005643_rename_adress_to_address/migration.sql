/*
  Warnings:

  - You are about to drop the column `Description` on the `Barbershop` table. All the data in the column will be lost.
  - You are about to drop the column `ImageUrl` on the `Barbershop` table. All the data in the column will be lost.
  - Added the required column `description` to the `Barbershop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Barbershop` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Barbershop" DROP COLUMN "Description",
DROP COLUMN "ImageUrl",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL;
