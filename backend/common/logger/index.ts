import fs from "fs";
import path from "path";
import morgan from "morgan";

const dirPath = path.join(__dirname, '../../logs');

if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath, {recursive: true});
}

const accessLogStream = fs.createWriteStream(path.join(dirPath, 'access.log'), { flags: 'a' });

export const httpLogger =  morgan(':date[iso] ":method :url" :status :res[content-length]', { stream: accessLogStream });
