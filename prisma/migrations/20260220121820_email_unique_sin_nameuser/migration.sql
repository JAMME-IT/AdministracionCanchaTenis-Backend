/*
  Warnings:

  - You are about to drop the column `nombreUsuario` on the `Usuario` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[dni]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `Usuario_nombreUsuario_key` ON `Usuario`;

-- AlterTable
ALTER TABLE `Usuario` DROP COLUMN `nombreUsuario`,
    ALTER COLUMN `dni` DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX `Usuario_email_key` ON `Usuario`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `Usuario_dni_key` ON `Usuario`(`dni`);
