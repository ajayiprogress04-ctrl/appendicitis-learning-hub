# Bundled SPSS reader

Source: https://github.com/everydaydesign/datareader-spss
Package: datareader-spss 0.2.1, MIT license (SPSS_READER_LICENSE.txt).
Browser IIFE bundled using esbuild 0.28.2 using the command:

```
npx esbuild node_modules/datareader-spss/dist/index.js --bundle --format=iife --global-name=HUB_SPSS --platform=browser --target=es2020 --outfile=vendor/spss-reader.js
```

No package installation or build is required to run the delivered app. The parser performs no network operations. Future changes require testing against SPSS fixtures again. Native browser DecompressionStream is required by the reader for zlib-compressed files; this delivery validates uncompressed and row-compressed SAV only. Parser limits: 1,500,000 cells and 64 MiB inflated bytes; importer limits: 15 MiB input, 5,000 records, 300 variables.
