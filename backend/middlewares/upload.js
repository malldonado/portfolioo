const multer = require('multer');
const path = require('path');

// Configuração do armazenamento em disco
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueSuffix);
  },
});

// Filtro de tipo de arquivo
const fileFilter = (req, file, cb) => {
  const isImage = file.mimetype.startsWith('image/');
  cb(isImage ? null : new Error('File type not supported!'), isImage);
};

// Inicialização do multer com armazenamento e filtro
const upload = multer({ 
  storage, 
  fileFilter 
});

// Exporta o middleware de upload
module.exports = upload;
