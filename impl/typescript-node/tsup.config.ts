import { defineConfig } from "tsup"

export default defineConfig({
    tsconfig: './tsconfig-build.json',
    entry: ["src/index.ts"],
    format: ["cjs", "esm"], // Build for commonJS and ESmodules
    dts: true, // Generate declarative file (.d.ts)
    splitting: false,
    sourcemap: true,
    clean: true
})