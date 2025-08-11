/*
  Warnings:

  - You are about to alter the column `nombreUsuario` on the `usuario` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(30)`.
  - You are about to alter the column `password` on the `usuario` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(30)`.
  - You are about to alter the column `email` on the `usuario` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(30)`.
  - You are about to alter the column `nombre` on the `usuario` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(30)`.
  - You are about to alter the column `apellido` on the `usuario` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(30)`.
  - You are about to drop the column `fechaCambio` on the `valorcuota` table. All the data in the column will be lost.
*/

-- ❌ Línea eliminada porque el índice ya no existe:
-- DROP INDEX `ValorCuota_fechaCambio_key` ON `valorcuota`;

-- AlterTable
ALTER TABLE `cuota` ALTER COLUMN `fechaActualizacion` DROP DEFAULT;

-- AlterTable
ALTER TABLE `estadocuota` ALTER COLUMN `fechaActualizacion` DROP DEFAULT;

-- AlterTable
ALTER TABLE `lineadecuota` ALTER COLUMN `fechaActualizacion` DROP DEFAULT;

-- AlterTable
ALTER TABLE `usuario` 
    MODIFY `nombreUsuario` VARCHAR(30) NOT NULL,
    MODIFY `password` VARCHAR(30) NOT NULL,
    MODIFY `email` VARCHAR(30) NOT NULL,
    MODIFY `nombre` VARCHAR(30) NOT NULL,
    MODIFY `apellido` VARCHAR(30) NOT NULL,
    ALTER COLUMN `fechaActualizacion` DROP DEFAULT;

-- AlterTable
-- ALTER TABLE `valorcuota` 
--     DROP COLUMN `fechaCambio`,
--     ALTER COLUMN `fechaActualizacion` DROP DEFAULT;
