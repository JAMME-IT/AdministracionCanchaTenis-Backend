-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombreUsuario` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `nombre` VARCHAR(100) NOT NULL,
    `apellido` VARCHAR(100) NOT NULL,
    `telefono` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `Usuario_nombreUsuario_key`(`nombreUsuario`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cuota` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fechaInicio` DATETIME(3) NOT NULL,
    `fechaVencimiento` DATETIME(3) NOT NULL,
    `montoTotal` DECIMAL(10, 2) NOT NULL,
    `idUsuario` INTEGER NOT NULL,

    UNIQUE INDEX `Cuota_fechaInicio_key`(`fechaInicio`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LineaDeCuota` (
    `id` INTEGER NOT NULL,
    `idCuota` INTEGER NOT NULL,
    `fechaPago` DATETIME(3) NOT NULL,
    `monto` DECIMAL(10, 2) NOT NULL,

    UNIQUE INDEX `LineaDeCuota_fechaPago_key`(`fechaPago`),
    PRIMARY KEY (`id`, `idCuota`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ValorCuota` (
    `id` INTEGER NOT NULL,
    `idCuota` INTEGER NOT NULL,
    `precio` DECIMAL(10, 2) NOT NULL,
    `fechaCambio` DATETIME(3) NOT NULL,

    UNIQUE INDEX `ValorCuota_fechaCambio_key`(`fechaCambio`),
    PRIMARY KEY (`id`, `idCuota`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Cuota` ADD CONSTRAINT `Cuota_idUsuario_fkey` FOREIGN KEY (`idUsuario`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LineaDeCuota` ADD CONSTRAINT `LineaDeCuota_idCuota_fkey` FOREIGN KEY (`idCuota`) REFERENCES `Cuota`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ValorCuota` ADD CONSTRAINT `ValorCuota_idCuota_fkey` FOREIGN KEY (`idCuota`) REFERENCES `Cuota`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
