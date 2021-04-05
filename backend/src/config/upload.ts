/* eslint-disable import/no-anonymous-default-export */
import multer from 'multer';
import path from 'path';


export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'), // destination é para onde serão armazenados os arquivos após fazer o upload
    filename: (request, file, cb) => { // filename recebe o nome do arquivo
      const filename = `${Date.now()}-${file.originalname}`; // `` string

      cb(null, filename);
    },
  })
};