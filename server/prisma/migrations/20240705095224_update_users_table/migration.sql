/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Weapons` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "Weapons";

-- CreateTable
CREATE TABLE "Weapons_table" (
    "id" TEXT NOT NULL,
    "Weapon_name" TEXT NOT NULL,
    "Weapon_type" TEXT NOT NULL,
    "Weapon_description" TEXT NOT NULL,
    "Weapon_cost" BIGINT NOT NULL,

    CONSTRAINT "Weapons_table_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users_table" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Users_table_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_table_email_key" ON "Users_table"("email");
