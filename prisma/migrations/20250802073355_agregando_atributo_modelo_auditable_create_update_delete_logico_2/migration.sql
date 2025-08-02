/*
  Warnings:

  - A unique constraint covering the columns `[fechaCambio]` on the table `ValorCuota` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `ValorCuota_fechaCreacion_key` ON `valorcuota`;

-- AlterTable
ALTER TABLE `cuota` ALTER COLUMN `fechaActualizacion` DROP DEFAULT;

-- AlterTable
ALTER TABLE `estadocuota` ALTER COLUMN `fechaActualizacion` DROP DEFAULT;

-- AlterTable
ALTER TABLE `lineadecuota` ALTER COLUMN `fechaActualizacion` DROP DEFAULT;

-- AlterTable
ALTER TABLE `usuario` ALTER COLUMN `fechaActualizacion` DROP DEFAULT;

-- AlterTable
ALTER TABLE `valorcuota` ADD COLUMN `fechaCambio` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ALTER COLUMN `fechaActualizacion` DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX `ValorCuota_fechaCambio_key` ON `ValorCuota`(`fechaCambio`);
