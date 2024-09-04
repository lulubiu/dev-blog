import klaw from 'klaw';
import * as path from 'path';
import { URL } from 'url';
import fs from 'fs';
import Fontmin from 'fontmin';

const __dirname = new URL('.', import.meta.url).pathname;

const textSet = new Set();
const contentDir = path.resolve(__dirname, "../content");
const files = klaw(contentDir);

for await (const file of files) {
  if (!file.stats.isDirectory()) {
    const content = fs.readFileSync(file.path, 'utf8');
    for (let i = 0; i < content.length; i++) {
      textSet.add(content[i]);
    }
  }
}

const allText = Array.from(textSet).join('');
console.log(allText);

const fontmin = new Fontmin()
  .src(path.resolve(__dirname, './LXGWWenKaiLite-Light.ttf'))
  .use(Fontmin.glyph({
    text: allText,
    hinting: false 
  }))
  .use(Fontmin.ttf2woff2())
  .dest(path.resolve(__dirname, '../public/fonts')); // 修改目标路径

fontmin.run(function (err, files) {
  if (err) {
    throw err;
  }

  console.log(`新文本文件已生成: public/fonts 文件夹下`);
});