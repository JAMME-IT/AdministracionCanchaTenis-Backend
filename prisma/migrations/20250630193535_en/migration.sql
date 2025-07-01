/*
  Warnings:

  - You are about to drop the column `fechaHora` on the `estadousuario` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `LineaDeCuota_fechaPago_key` ON `lineadecuota`;

-- AlterTable
ALTER TABLE `cuota` ADD COLUMN `fechaCreacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `estadousuario` DROP COLUMN `fechaHora`,
    ADD COLUMN `fechaCambio` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `lineadecuota` ADD COLUMN `fechaCreacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `usuario` ADD COLUMN `fechaCreacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
