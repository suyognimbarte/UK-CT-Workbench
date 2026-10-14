// Copies the web app into ./app so Electron can package it.
const fs = require('fs'), path = require('path');
const src = path.join(__dirname, '..'), dst = path.join(__dirname, 'app');
fs.rmSync(dst, { recursive: true, force: true }); fs.mkdirSync(dst, { recursive: true });
['index.html', 'manifest.webmanifest'].forEach(f => fs.copyFileSync(path.join(src, f), path.join(dst, f)));
['icons', 'lib'].forEach(d => fs.cpSync(path.join(src, d), path.join(dst, d), { recursive: true }));
console.log('App files copied to', dst);
