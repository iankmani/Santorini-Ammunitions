/*
  Warnings:

  - You are about to drop the `WeaponS_table` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "WeaponS_table";

-- CreateTable
CREATE TABLE "Weapons" (
    "id" TEXT NOT NULL,
    "Weapon_name" TEXT NOT NULL,
    "Weapon_type" TEXT NOT NULL,
    "Weapon_description" TEXT NOT NULL,
    "Weapon_cost" BIGINT NOT NULL,

    CONSTRAINT "Weapons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
