/*
  Warnings:

  - The primary key for the `Socio` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `numero` on the `Socio` table. All the data in the column will be lost.
  - Added the required column `numeroSocio` to the `Cuota` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numeroSocio` to the `Socio` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Cuota` DROP FOREIGN KEY `Cuota_idUsuario_fkey`;

-- DropIndex
DROP INDEX `Cuota_idUsuario_fkey` ON `Cuota`;

-- AlterTable
ALTER TABLE `Cuota` ADD COLUMN `numeroSocio` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Socio` DROP PRIMARY KEY,
    DROP COLUMN `numero`,
    ADD COLUMN `numeroSocio` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`numeroSocio`);

-- AddForeignKey
ALTER TABLE `Cuota` ADD CONSTRAINT `Cuota_numeroSocio_fkey` FOREIGN KEY (`numeroSocio`) REFERENCES `Socio`(`numeroSocio`) ON DELETE RESTRICT ON UPDATE CASCADE;
