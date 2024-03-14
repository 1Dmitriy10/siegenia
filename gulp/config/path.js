//Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;       //Путь к папке с результатом
const srcFolder = `./src`;      //Путь к папке с исходниками

//Основной объект 
export const path = {
    build: {                                        // Пути для создания
        js: `${buildFolder}/assets/js/`,
        vendorJs: `${buildFolder}/assets/js/`,
        css: `${buildFolder}/assets/css/`,
        vendorCss: `${buildFolder}/assets/css/`,
        html: `${buildFolder}/`,
        img: `${buildFolder}/assets/img/`,
        fonts: `${buildFolder}/fonts/`,
        files: `${buildFolder}/files/`,
    },
    src: {                                  // пути исходников
        js: `${srcFolder}/js/main.js`,
        vendorJs: `${srcFolder}/js/vendor.js`,
        img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        vendorScss: `${srcFolder}/scss/vendor.scss`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
    },
    watch: {                                      //Следить за изменениями этих файлов
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: `test`
}