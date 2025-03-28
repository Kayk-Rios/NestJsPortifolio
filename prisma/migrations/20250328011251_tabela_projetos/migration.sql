-- CreateTable
CREATE TABLE "Projetos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "imagemUrl" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "tecnologiasImg" TEXT NOT NULL,
    "linkCodigo" TEXT NOT NULL
);
