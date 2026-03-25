/*
  Warnings:

  - You are about to drop the column `fechaActualizacion` on the `Cuota` table. All the data in the column will be lost.
  - You are about to drop the column `fechaCreacion` on the `Cuota` table. All the data in the column will be lost.
  - You are about to drop the column `fechaEliminacion` on the `Cuota` table. All the data in the column will be lost.
  - You are about to drop the column `fechaActualizacion` on the `EstadoCuota` table. All the data in the column will be lost.
  - You are about to drop the column `fechaCreacion` on the `EstadoCuota` table. All the data in the column will be lost.
  - You are about to drop the column `fechaEliminacion` on the `EstadoCuota` table. All the data in the column will be lost.
  - You are about to drop the column `fechaActualizacion` on the `EstadoUsuario` table. All the data in the column will be lost.
  - You are about to drop the column `fechaCambio` on the `EstadoUsuario` table. All the data in the column will be lost.
  - You are about to drop the column `fechaEliminacion` on the `EstadoUsuario` table. All the data in the column will be lost.
  - You are about to drop the column `fechaActualizacion` on the `LineaDeCuota` table. All the data in the column will be lost.
  - You are about to drop the column `fechaCreacion` on the `LineaDeCuota` table. All the data in the column will be lost.
  - You are about to drop the column `fechaEliminacion` on the `LineaDeCuota` table. All the data in the column will be lost.
  - You are about to drop the column `fechaActualizacion` on the `Rol` table. All the data in the column will be lost.
  - You are about to drop the column `fechaCreacion` on the `Rol` table. All the data in the column will be lost.
  - You are about to drop the column `fechaEliminacion` on the `Rol` table. All the data in the column will be lost.
  - You are about to drop the column `fechaActualizacion` on the `Socio` table. All the data in the column will be lost.
  - You are about to drop the column `fechaCreacion` on the `Socio` table. All the data in the column will be lost.
  - You are about to drop the column `fechaEliminacion` on the `Socio` table. All the data in the column will be lost.
  - You are about to drop the column `fechaActualizacion` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `fechaEliminacion` on the `Usuario` table. All the data in the column will be lost.
  - You are about to alter the column `nombre` on the `Usuario` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(100)`.
  - You are about to alter the column `apellido` on the `Usuario` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(100)`.
  - You are about to drop the column `fechaActualizacion` on the `UsuarioRol` table. All the data in the column will be lost.
  - You are about to drop the column `fechaCreacion` on the `UsuarioRol` table. All the data in the column will be lost.
  - You are about to drop the column `fechaEliminacion` on the `UsuarioRol` table. All the data in the column will be lost.
  - You are about to drop the column `fechaActualizacion` on the `ValorCuota` table. All the data in the column will be lost.
  - You are about to drop the column `fechaCreacion` on the `ValorCuota` table. All the data in the column will be lost.
  - You are about to drop the column `fechaEliminacion` on the `ValorCuota` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `estado` to the `LineaDeCuota` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Cuota` DROP COLUMN `fechaActualizacion`,
    DROP COLUMN `fechaCreacion`,
    DROP COLUMN `fechaEliminacion`,
    MODIFY `fechaInicio` DATE NOT NULL,
    MODIFY `fechaVencimiento` DATE NOT NULL;

-- AlterTable
ALTER TABLE `EstadoCuota` DROP COLUMN `fechaActualizacion`,
    DROP COLUMN `fechaCreacion`,
    DROP COLUMN `fechaEliminacion`,
    ADD COLUMN `fechaHora` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `EstadoUsuario` DROP COLUMN `fechaActualizacion`,
    DROP COLUMN `fechaCambio`,
    DROP COLUMN `fechaEliminacion`,
    ADD COLUMN `fechaHora` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `LineaDeCuota` DROP COLUMN `fechaActualizacion`,
    DROP COLUMN `fechaCreacion`,
    DROP COLUMN `fechaEliminacion`,
    ADD COLUMN `estado` INTEGER NOT NULL,
    MODIFY `fechaPago` DATE NOT NULL;

-- AlterTable
ALTER TABLE `Rol` DROP COLUMN `fechaActualizacion`,
    DROP COLUMN `fechaCreacion`,
    DROP COLUMN `fechaEliminacion`;

-- AlterTable
ALTER TABLE `Socio` DROP COLUMN `fechaActualizacion`,
    DROP COLUMN `fechaCreacion`,
    DROP COLUMN `fechaEliminacion`,
    MODIFY `estado` VARCHAR(30) NOT NULL;

-- AlterTable
ALTER TABLE `Usuario` DROP COLUMN `fechaActualizacion`,
    DROP COLUMN `fechaEliminacion`,
    ADD COLUMN `username` VARCHAR(100) NULL,
    MODIFY `nombre` VARCHAR(100) NOT NULL,
    MODIFY `apellido` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `UsuarioRol` DROP COLUMN `fechaActualizacion`,
    DROP COLUMN `fechaCreacion`,
    DROP COLUMN `fechaEliminacion`,
    MODIFY `fechaInicio` DATE NOT NULL,
    MODIFY `fechaFin` DATE NULL;

-- AlterTable
ALTER TABLE `ValorCuota` DROP COLUMN `fechaActualizacion`,
    DROP COLUMN `fechaCreacion`,
    DROP COLUMN `fechaEliminacion`,
    ADD COLUMN `fechaCambio` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateTable
CREATE TABLE `Cancha` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nroCancha` INTEGER NOT NULL,

    UNIQUE INDEX `Cancha_nroCancha_key`(`nroCancha`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EstadoCancha` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `iluminacion` BOOLEAN NOT NULL,
    `fechaCambio` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `descripcion` VARCHAR(300) NOT NULL,
    `valorState` ENUM('Disponible', 'En_Mantenimiento', 'Inhabilitada') NOT NULL,
    `suelo` ENUM('Dura', 'Polvo_De_Ladrillo', 'Cesped') NOT NULL,
    `idCancha` INTEGER NOT NULL,

    INDEX `EstadoCancha_idCancha_idx`(`idCancha`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Luz` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `costoLuz` DECIMAL(10, 2) NOT NULL,
    `franjaHorariaInicio` TIME(0) NOT NULL,
    `franjaHorariaFin` TIME(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EstadoLuz` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `costoXHora` DECIMAL(10, 2) NOT NULL,
    `fecha` DATETIME(3) NOT NULL,
    `idLuz` INTEGER NOT NULL,

    INDEX `EstadoLuz_idLuz_idx`(`idLuz`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ValorTurno` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `costoXHora` DECIMAL(10, 2) NOT NULL,
    `fechaCambio` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoTurno` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `duracionMax` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DiaFuncionamientoClub` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `diaSemana` ENUM('Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo') NOT NULL,
    `habilitado` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RangoHorario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `horaInicio` TIME(0) NOT NULL,
    `horaFin` TIME(0) NOT NULL,
    `idDiaFuncionamientoClub` INTEGER NOT NULL,

    INDEX `RangoHorario_idDiaFuncionamientoClub_idx`(`idDiaFuncionamientoClub`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Turno` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha` DATE NOT NULL,
    `horaInicio` TIME(0) NOT NULL,
    `horaFin` TIME(0) NOT NULL,
    `costoTurnoNS` DECIMAL(10, 2) NOT NULL,
    `estadoActual` ENUM('Confirmado', 'Cancelado', 'Iniciado', 'Finalizado', 'No_Asistio', 'Impago', 'Pago') NOT NULL,
    `idCancha` INTEGER NOT NULL,
    `idLuz` INTEGER NULL,
    `idUsuario` INTEGER NOT NULL,
    `idTipoTurno` INTEGER NOT NULL,
    `idValorTurno` INTEGER NOT NULL,
    `idDiaFuncionamientoClub` INTEGER NOT NULL,

    INDEX `Turno_idCancha_idx`(`idCancha`),
    INDEX `Turno_idLuz_idx`(`idLuz`),
    INDEX `Turno_idUsuario_idx`(`idUsuario`),
    INDEX `Turno_idTipoTurno_idx`(`idTipoTurno`),
    INDEX `Turno_idValorTurno_idx`(`idValorTurno`),
    INDEX `Turno_idDiaFuncionamientoClub_idx`(`idDiaFuncionamientoClub`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EstadoTurno` (
    `idEstadoTurno` INTEGER NOT NULL AUTO_INCREMENT,
    `valorEstado` ENUM('Confirmado', 'Cancelado', 'Iniciado', 'Finalizado', 'No_Asistio', 'Impago', 'Pago') NOT NULL,
    `fechaYHora` DATETIME(3) NOT NULL,
    `idTurno` INTEGER NOT NULL,

    INDEX `EstadoTurno_idTurno_idx`(`idTurno`),
    PRIMARY KEY (`idEstadoTurno`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PagoTurno` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `montoTotTurno` DECIMAL(10, 2) NOT NULL,
    `fechaPago` DATE NOT NULL,
    `idTurno` INTEGER NOT NULL,

    UNIQUE INDEX `PagoTurno_idTurno_key`(`idTurno`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LineasTurnoPago` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `montoTurnoPago` DECIMAL(10, 2) NOT NULL,
    `idPagoTurno` INTEGER NOT NULL,

    INDEX `LineasTurnoPago_idPagoTurno_idx`(`idPagoTurno`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PagoLuz` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `montoTotalLuz` DECIMAL(10, 2) NOT NULL,
    `fechaPago` DATE NOT NULL,
    `idLuz` INTEGER NOT NULL,

    UNIQUE INDEX `PagoLuz_idLuz_key`(`idLuz`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Cuota_idUsuario_idx` ON `Cuota`(`idUsuario`);

-- CreateIndex
CREATE UNIQUE INDEX `Usuario_username_key` ON `Usuario`(`username`);

-- AddForeignKey
ALTER TABLE `Cuota` ADD CONSTRAINT `Cuota_idUsuario_fkey` FOREIGN KEY (`idUsuario`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EstadoCancha` ADD CONSTRAINT `EstadoCancha_idCancha_fkey` FOREIGN KEY (`idCancha`) REFERENCES `Cancha`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EstadoLuz` ADD CONSTRAINT `EstadoLuz_idLuz_fkey` FOREIGN KEY (`idLuz`) REFERENCES `Luz`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RangoHorario` ADD CONSTRAINT `RangoHorario_idDiaFuncionamientoClub_fkey` FOREIGN KEY (`idDiaFuncionamientoClub`) REFERENCES `DiaFuncionamientoClub`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Turno` ADD CONSTRAINT `Turno_idCancha_fkey` FOREIGN KEY (`idCancha`) REFERENCES `Cancha`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Turno` ADD CONSTRAINT `Turno_idLuz_fkey` FOREIGN KEY (`idLuz`) REFERENCES `Luz`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Turno` ADD CONSTRAINT `Turno_idUsuario_fkey` FOREIGN KEY (`idUsuario`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Turno` ADD CONSTRAINT `Turno_idTipoTurno_fkey` FOREIGN KEY (`idTipoTurno`) REFERENCES `TipoTurno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Turno` ADD CONSTRAINT `Turno_idValorTurno_fkey` FOREIGN KEY (`idValorTurno`) REFERENCES `ValorTurno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Turno` ADD CONSTRAINT `Turno_idDiaFuncionamientoClub_fkey` FOREIGN KEY (`idDiaFuncionamientoClub`) REFERENCES `DiaFuncionamientoClub`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EstadoTurno` ADD CONSTRAINT `EstadoTurno_idTurno_fkey` FOREIGN KEY (`idTurno`) REFERENCES `Turno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PagoTurno` ADD CONSTRAINT `PagoTurno_idTurno_fkey` FOREIGN KEY (`idTurno`) REFERENCES `Turno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LineasTurnoPago` ADD CONSTRAINT `LineasTurnoPago_idPagoTurno_fkey` FOREIGN KEY (`idPagoTurno`) REFERENCES `PagoTurno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PagoLuz` ADD CONSTRAINT `PagoLuz_idLuz_fkey` FOREIGN KEY (`idLuz`) REFERENCES `Luz`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `Cuota` RENAME INDEX `Cuota_idValorCuota_fkey` TO `Cuota_idValorCuota_idx`;

-- RenameIndex
ALTER TABLE `Cuota` RENAME INDEX `Cuota_numeroSocio_fkey` TO `Cuota_numeroSocio_idx`;

-- RenameIndex
ALTER TABLE `EstadoCuota` RENAME INDEX `EstadoCuota_idCuota_fkey` TO `EstadoCuota_idCuota_idx`;

-- RenameIndex
ALTER TABLE `EstadoUsuario` RENAME INDEX `EstadoUsuario_idUsuario_fkey` TO `EstadoUsuario_idUsuario_idx`;

-- RenameIndex
ALTER TABLE `LineaDeCuota` RENAME INDEX `LineaDeCuota_idCuota_fkey` TO `LineaDeCuota_idCuota_idx`;

-- RenameIndex
ALTER TABLE `UsuarioRol` RENAME INDEX `UsuarioRol_idRol_fkey` TO `UsuarioRol_idRol_idx`;
