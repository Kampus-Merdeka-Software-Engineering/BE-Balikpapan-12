-- CreateTable
CREATE TABLE `Class` (
    `id_kelas` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_kelas` VARCHAR(191) NOT NULL,
    `gambar_kelas` VARCHAR(191) NOT NULL,
    `jumlah_video` INTEGER NOT NULL,
    `deskripsi` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_kelas`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
