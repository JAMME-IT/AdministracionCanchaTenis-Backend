/*
  Warnings:

  - The values [De_Baja] on the enum `EstadoUsuario_valor` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `estadousuario` MODIFY `valor` ENUM('Pendiente', 'Activo', 'Deudor', 'Suspendido', 'Inactivo') NOT NULL;

-- CreateTable
CREATE TABLE `EstadoCuota` (
    `idEstado` INTEGER NOT NULL AUTO_INCREMENT,
    `fechaCambio` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `valor` ENUM('Pendiente', 'Pagada', 'Pagada_Parcial', 'Adeudada', 'Cancelada') NOT NULL,
    `idCuota` INTEGER NOT NULL,

    PRIMARY KEY (`idEstado`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `EstadoCuota` ADD CONSTRAINT `EstadoCuota_idCuota_fkey` FOREIGN KEY (`idCuota`) REFERENCES `Cuota`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
