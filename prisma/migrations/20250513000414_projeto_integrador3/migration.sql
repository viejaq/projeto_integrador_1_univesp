/*
  Warnings:

  - The primary key for the `atividade` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `co_status` on the `atividade` table. All the data in the column will be lost.
  - You are about to drop the column `co_venda` on the `atividade` table. All the data in the column will be lost.
  - You are about to drop the column `dt_criacao` on the `atividade` table. All the data in the column will be lost.
  - The `id` column on the `atividade` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `candidato` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `candidato` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `cliente` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `dt_criacao` on the `cliente` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `cliente` table. All the data in the column will be lost.
  - The primary key for the `orcamento` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `orcamento` table. All the data in the column will be lost.
  - The primary key for the `status` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `descrcao` on the `status` table. All the data in the column will be lost.
  - You are about to drop the column `dt_criacao` on the `status` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `status` table. All the data in the column will be lost.
  - The primary key for the `status_orcamento` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `status_orcamento` table. All the data in the column will be lost.
  - The primary key for the `venda` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `dt_criacao` on the `venda` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `venda` table. All the data in the column will be lost.
  - Added the required column `cod_status` to the `atividade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cod_venda` to the `atividade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data` to the `atividade` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `numero` on the `cliente` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `descricao` to the `status` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `co_cliente` on the `venda` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "atividade" DROP CONSTRAINT "atividade_pkey",
DROP COLUMN "co_status",
DROP COLUMN "co_venda",
DROP COLUMN "dt_criacao",
ADD COLUMN     "cod_status" INTEGER NOT NULL,
ADD COLUMN     "cod_venda" INTEGER NOT NULL,
ADD COLUMN     "data" TIMESTAMP(3) NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "atividade_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "candidato" DROP CONSTRAINT "candidato_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "candidato_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "cliente" DROP CONSTRAINT "cliente_pkey",
DROP COLUMN "dt_criacao",
DROP COLUMN "id",
ADD COLUMN     "id_cliente" SERIAL NOT NULL,
DROP COLUMN "numero",
ADD COLUMN     "numero" INTEGER NOT NULL,
ALTER COLUMN "complemento" DROP NOT NULL,
ADD CONSTRAINT "cliente_pkey" PRIMARY KEY ("id_cliente");

-- AlterTable
ALTER TABLE "orcamento" DROP CONSTRAINT "orcamento_pkey",
DROP COLUMN "id",
ADD COLUMN     "id_orcamento" SERIAL NOT NULL,
ALTER COLUMN "co_status" SET DEFAULT '1',
ADD CONSTRAINT "orcamento_pkey" PRIMARY KEY ("id_orcamento");

-- AlterTable
ALTER TABLE "status" DROP CONSTRAINT "status_pkey",
DROP COLUMN "descrcao",
DROP COLUMN "dt_criacao",
DROP COLUMN "id",
ADD COLUMN     "descricao" TEXT NOT NULL,
ADD COLUMN     "id_status" SERIAL NOT NULL,
ADD CONSTRAINT "status_pkey" PRIMARY KEY ("id_status");

-- AlterTable
ALTER TABLE "status_orcamento" DROP CONSTRAINT "status_orcamento_pkey",
DROP COLUMN "id",
ADD COLUMN     "id_status_orcamento" SERIAL NOT NULL,
ADD CONSTRAINT "status_orcamento_pkey" PRIMARY KEY ("id_status_orcamento");

-- AlterTable
ALTER TABLE "venda" DROP CONSTRAINT "venda_pkey",
DROP COLUMN "dt_criacao",
DROP COLUMN "id",
ADD COLUMN     "id_venda" SERIAL NOT NULL,
ALTER COLUMN "anexo" DROP NOT NULL,
ALTER COLUMN "anexo" SET DATA TYPE TEXT,
DROP COLUMN "co_cliente",
ADD COLUMN     "co_cliente" INTEGER NOT NULL,
ADD CONSTRAINT "venda_pkey" PRIMARY KEY ("id_venda");

-- AddForeignKey
ALTER TABLE "venda" ADD CONSTRAINT "venda_co_cliente_fkey" FOREIGN KEY ("co_cliente") REFERENCES "cliente"("id_cliente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atividade" ADD CONSTRAINT "atividade_cod_venda_fkey" FOREIGN KEY ("cod_venda") REFERENCES "venda"("id_venda") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atividade" ADD CONSTRAINT "atividade_cod_status_fkey" FOREIGN KEY ("cod_status") REFERENCES "status"("id_status") ON DELETE RESTRICT ON UPDATE CASCADE;
