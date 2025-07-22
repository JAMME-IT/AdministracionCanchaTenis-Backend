/*
  Warnings:

  - You are about to alter the column `metodoPago` on the `lineadecuota` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `VarChar(30)`.

*/
-- AlterTable
ALTER TABLE `lineadecuota` MODIFY `metodoPago` VARCHAR(30) NOT NULL;
