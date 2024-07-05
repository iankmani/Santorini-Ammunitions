/*
  Warnings:

  - You are about to drop the `Users_table` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Users_table";

-- CreateTable
CREATE TABLE "Userform_table" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "gun_licence" TEXT NOT NULL DEFAULT '',
    "Phone_number" TEXT NOT NULL DEFAULT '',
    "password" TEXT NOT NULL,

    CONSTRAINT "Userform_table_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Userform_table_email_key" ON "Userform_table"("email");
