import { build } from "esbuild";

// Build para JavaScript
await build({
    entryPoints: ['./src/index.js'], // Ponto de entrada
    // bundle: true, // Agrupa dependências (se houver)
    outfile: '/src/dist/custom.js', // Arquivo de saída (não minificado)
}).then(() => console.log('JavaScript build (não minificado) concluído!'));

await build({
    entryPoints: ['./src/index.js'],
    // bundle: true,
    outfile: './src/dist/custom.min.js', // Arquivo de saída (minificado)
    minify: true, // Ativa a minificação
}).then(() => console.log('JavaScript build (minificado) concluído!'));