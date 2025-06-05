-- DropIndex
DROP INDEX `Cuota_fechaInicio_key` ON `cuota`;

-- AlterTable
ALTER TABLE `valorcuota` ALTER COLUMN `fechaCambio` DROP DEFAULT;
