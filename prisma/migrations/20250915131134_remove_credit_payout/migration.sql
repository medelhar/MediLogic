/*
  Warnings:

  - You are about to drop the `CreditTransaction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Payout` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."CreditTransaction" DROP CONSTRAINT "CreditTransaction_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Payout" DROP CONSTRAINT "Payout_doctorId_fkey";

-- DropTable
DROP TABLE "public"."CreditTransaction";

-- DropTable
DROP TABLE "public"."Payout";

-- DropEnum
DROP TYPE "public"."PayoutStatus";

-- DropEnum
DROP TYPE "public"."TransactionType";
