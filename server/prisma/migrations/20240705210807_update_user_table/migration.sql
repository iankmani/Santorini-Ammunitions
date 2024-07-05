-- AlterTable
ALTER TABLE "Userform_table" ADD COLUMN     "enquiry" TEXT NOT NULL DEFAULT 'Training services',
ADD COLUMN     "message" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'user';
