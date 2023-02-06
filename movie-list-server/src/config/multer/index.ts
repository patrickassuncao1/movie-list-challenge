import multer from "multer";
import path from "path";
import crypto from "crypto"

import { AppError } from "../../errors/AppError";

const multerConfig: multer.Options = {
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    storage: multer.diskStorage({
        destination(request, file, callback) {
            const url = path.resolve(__dirname, '..', '..', 'tmp', 'uploads');

            callback(null, url);
        },
        filename(request, file, callback) {
            crypto.randomBytes(16, (err, hash) => {
                //@ts-ignore
                if (err) callback(new AppError(err.message), null);

                const fileName = `${hash.toString("hex")}-${file.originalname}`;

                callback(null, fileName);
            });
        },
    }),
    limits: {
        fileSize: 2 * 1024 * 1024 // 2mb
    },
    fileFilter(request, file, callback) {
        const allowedMimes = [
            "image/jpeg",
            "image/png",
            "image/jpg"
        ];

        if (allowedMimes.includes(file.mimetype)) {
            callback(null, true);
        } else {
            // @ts-ignore
            callback(new AppError('Tipo de arquivo Inválido'));
        }
    }
}

export { multerConfig }