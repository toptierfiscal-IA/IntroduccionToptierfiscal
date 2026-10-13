import { cpSync, copyFileSync, existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const output = 'dist';
if (existsSync(output)) rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });
copyFileSync('index.html', join(output, 'index.html'));
cpSync('assets', join(output, 'assets'), { recursive: true });
const expected = ['index.html', 'assets/styles.css', 'assets/app.js', 'assets/logo-top-tier-header.png', 'assets/logo-top-tier-footer.png', 'assets/favicon.png'];
for (const file of expected) {
  if (!existsSync(join(output, file))) throw new Error(`Falta un archivo del proyecto: ${file}`);
}
console.log('Guía Top Tier Fiscal lista para publicar en Vercel.');
console.log('Directorio de salida: dist/');
console.log('Archivos generados:', expected.join(', '));
