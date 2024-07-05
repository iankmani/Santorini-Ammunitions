-- CreateTable
CREATE TABLE "WeaponS_table" (
    "id" TEXT NOT NULL,
    "Weapon_name" TEXT NOT NULL,
    "Weapon_type" TEXT NOT NULL,
    "Weapon_description" TEXT NOT NULL,
    "Weapon_cost" BIGINT NOT NULL,

    CONSTRAINT "WeaponS_table_pkey" PRIMARY KEY ("id")
);
