/*
  Warnings:

  - Added the required column `metodoPago` to the `LineaDeCuota` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `lineadecuota` ADD COLUMN `metodoPago` ENUM('Efectivo', 'MercadoPago', 'Transferencia') NOT NULL;
