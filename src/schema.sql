-- CreateTable
CREATE TABLE `User_miscord_X` (
    `idUser` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `img` VARCHAR(191) NULL,
    `roleId` VARCHAR(191) NOT NULL,
    `google` BOOLEAN NOT NULL DEFAULT false,
    `suspencionIsActive` BOOLEAN NOT NULL DEFAULT true,
    `dar_Baja` BOOLEAN NOT NULL DEFAULT false,
    `created_At` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_At` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_miscord_X_idUser_key`(`idUser`),
    UNIQUE INDEX `User_miscord_X_username_key`(`username`),
    UNIQUE INDEX `User_miscord_X_email_key`(`email`),
    INDEX `User_miscord_X_roleId_idx`(`roleId`),
    PRIMARY KEY (`idUser`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Role_miscord_X` (
    `idRole` VARCHAR(191) NOT NULL,
    `role_Name` VARCHAR(191) NOT NULL,
    `create_At` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Role_miscord_X_idRole_key`(`idRole`),
    UNIQUE INDEX `Role_miscord_X_role_Name_key`(`role_Name`),
    PRIMARY KEY (`idRole`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ToDo_miscord_X` (
    `idTodo` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `todoName` VARCHAR(191) NOT NULL,
    `Is_Completed` BOOLEAN NOT NULL DEFAULT true,
    `create_At` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_At` DATETIME(3) NOT NULL,

    UNIQUE INDEX `ToDo_miscord_X_idTodo_key`(`idTodo`),
    INDEX `ToDo_miscord_X_userId_idx`(`userId`),
    PRIMARY KEY (`idTodo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User_miscord_X` ADD CONSTRAINT `User_miscord_X_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role_miscord_X`(`role_Name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ToDo_miscord_X` ADD CONSTRAINT `ToDo_miscord_X_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User_miscord_X`(`idUser`) ON DELETE RESTRICT ON UPDATE CASCADE;
