import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

export const deleteFile = (fileName: string) => {
    promisify(fs.unlink)(
        path.resolve(__dirname, "..", "..", "tmp", "uploads", fileName)
    );
}