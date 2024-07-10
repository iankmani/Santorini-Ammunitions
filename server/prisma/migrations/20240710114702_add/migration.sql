-- CreateTable
CREATE TABLE "booking_table" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "quantity" BIGINT NOT NULL,
    "Total_Price" BIGINT NOT NULL,
    "Payment_method" BIGINT NOT NULL,
    "Date_of_booking" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "booking_table_pkey" PRIMARY KEY ("id")
);
