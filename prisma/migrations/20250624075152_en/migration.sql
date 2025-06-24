-- AlterTable
ALTER TABLE `cuota` MODIFY `montoTotal` DECIMAL(10, 2) NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `valorcuota` ALTER COLUMN `fechaCambio` DROP DEFAULT;
