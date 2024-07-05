/*
  Warnings:

  - A unique constraint covering the columns `[gun_licence]` on the table `Users_table` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Users_table" ADD COLUMN     "Phone_number" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "gun_licence" TEXT NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "Users_table_gun_licence_key" ON "Users_table"("gun_licence");
