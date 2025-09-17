import fs from 'fs';
import path from 'path';
import mime from 'mime-types';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const handler = async (event) => {
  const rawPath = event.rawPath || '/';
  const safePath = rawPath === '/' ? '/index.html' : rawPath;
  const filePath = path.join(__dirname, '.' + decodeURIComponent(safePath));

  // Ngăn chặn truy cập file không hợp lệ
  if (!filePath.startsWith(__dirname)) {
    return {
      statusCode: 400,
      body: 'Invalid path',
    };
  }

  try {
    const fileContent = fs.readFileSync(filePath);
    const contentType = mime.lookup(filePath) || 'application/octet-stream';

    const isBinary = ['image/', 'font/', 'application/octet-stream'].some((type) =>
      contentType.startsWith(type)
    );

    return {
      statusCode: 200,
      headers: {
        'Content-Type': contentType,
      },
      body: isBinary ? fileContent.toString('base64') : fileContent.toString(),
      isBase64Encoded: isBinary,
    };
  } catch (err) {
    return {
      statusCode: 404,
      body: 'File not found',
    };
  }
};