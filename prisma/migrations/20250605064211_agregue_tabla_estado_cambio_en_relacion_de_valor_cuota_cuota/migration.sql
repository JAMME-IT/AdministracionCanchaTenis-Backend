/*
  Warnings:

  - You are about to drop the column `idCuota` on the `valorcuota` table. All the data in the column will be lost.
  - Added the required column `idValorCuota` to the `Cuota` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `valorcuota` DROP FOREIGN KEY `ValorCuota_idCuota_fkey`;

-- DropIndex
DROP INDEX `ValorCuota_idCuota_fkey` ON `valorcuota`;

-- AlterTable
ALTER TABLE `cuota` ADD COLUMN `idValorCuota` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `valorcuota` DROP COLUMN `idCuota`,
    MODIFY `fechaCambio` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateTable
CREATE TABLE `EstadoUsuario` (
    `idEstado` INTEGER NOT NULL AUTO_INCREMENT,
    `fechaHora` DATETIME(3) NOT NULL,
    `valor` ENUM('Activo', 'Deudor', 'De_Baja') NOT NULL,
    `idUsuario` INTEGER NOT NULL,

    PRIMARY KEY (`idEstado`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `EstadoUsuario` ADD CONSTRAINT `EstadoUsuario_idUsuario_fkey` FOREIGN KEY (`idUsuario`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cuota` ADD CONSTRAINT `Cuota_idValorCuota_fkey` FOREIGN KEY (`idValorCuota`) REFERENCES `ValorCuota`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
