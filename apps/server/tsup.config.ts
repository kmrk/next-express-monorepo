import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/index.ts'],
  noExternal: ['@repo'], // Bundle any package starting with `@example` and their dependencies
  splitting: false,
  bundle: true,
  outDir: './dist',
  clean: true,
  env: { IS_SERVER_BUILD: 'true' },
  loader: { '.json': 'copy' },
  minify: false,
  sourcemap: true,
})