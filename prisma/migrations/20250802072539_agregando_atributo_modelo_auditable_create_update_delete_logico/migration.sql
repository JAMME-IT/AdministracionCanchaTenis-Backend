/*
  Warnings:

  - You are about to drop the column `fechaCambio` on the `estadocuota` table. All the data in the column will be lost.
  - You are about to drop the column `fechaCambio` on the `valorcuota` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[fechaCreacion]` on the table `ValorCuota` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fechaActualizacion` to the `EstadoUsuario` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `ValorCuota_fechaCambio_key` ON `valorcuota`;

-- AlterTable
ALTER TABLE `cuota` ADD COLUMN `fechaActualizacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `fechaEliminacion` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `estadocuota` DROP COLUMN `fechaCambio`,
    ADD COLUMN `fechaActualizacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `fechaCreacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `fechaEliminacion` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `estadousuario` ADD COLUMN `fechaActualizacion` DATETIME(3) NOT NULL,
    ADD COLUMN `fechaEliminacion` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `lineadecuota` ADD COLUMN `fechaActualizacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `fechaEliminacion` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `usuario` ADD COLUMN `dni` INTEGER NOT NULL DEFAULT 41472891,
    ADD COLUMN `fechaActualizacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `fechaEliminacion` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `valorcuota` DROP COLUMN `fechaCambio`,
    ADD COLUMN `fechaActualizacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `fechaCreacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `fechaEliminacion` DATETIME(3) NULL;

-- CreateTable
CREATE TABLE `Rol` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` ENUM('Admin', 'Socio', 'Invitado') NOT NULL,
    `fechaCreacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fechaActualizacion` DATETIME(3) NOT NULL,
    `fechaEliminacion` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UsuarioRol` (
    `idUsuario` INTEGER NOT NULL,
    `idRol` INTEGER NOT NULL,
    `fechaInicio` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fechaFin` DATETIME(3) NULL,
    `fechaCreacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fechaActualizacion` DATETIME(3) NOT NULL,
    `fechaEliminacion` DATETIME(3) NULL,

    PRIMARY KEY (`idUsuario`, `idRol`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Socio` (
    `numero` INTEGER NOT NULL AUTO_INCREMENT,
    `fechaAlta` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fechaBaja` DATETIME(3) NULL,
    `fechaCreacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fechaActualizacion` DATETIME(3) NOT NULL,
    `fechaEliminacion` DATETIME(3) NULL,
    `idUsuario` INTEGER NOT NULL,

    UNIQUE INDEX `Socio_idUsuario_key`(`idUsuario`),
    PRIMARY KEY (`numero`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `ValorCuota_fechaCreacion_key` ON `ValorCuota`(`fechaCreacion`);

-- AddForeignKey
ALTER TABLE `UsuarioRol` ADD CONSTRAINT `UsuarioRol_idUsuario_fkey` FOREIGN KEY (`idUsuario`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsuarioRol` ADD CONSTRAINT `UsuarioRol_idRol_fkey` FOREIGN KEY (`idRol`) REFERENCES `Rol`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Socio` ADD CONSTRAINT `Socio_idUsuario_fkey` FOREIGN KEY (`idUsuario`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
