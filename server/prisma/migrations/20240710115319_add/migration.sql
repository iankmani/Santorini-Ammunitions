/*
  Warnings:

  - Added the required column `product` to the `booking_table` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "booking_table" ADD COLUMN     "product" TEXT NOT NULL;
