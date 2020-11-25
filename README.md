# PDFKit AWS Lambda Layer
Build and publish an AWS Lambda Layer which provides PDFKit.

## Requirements
- Docker
- Linux
- Node

## Release
A layer called `pdfkit-aws-lambda-layer` will be published with [Serverless Framewok](https://www.serverless.com/).

```sh
npm install
npm run release

# release option
npm run release -- --stage dev --region ap-southeast-1
```

## Usage
If you attach the layer to a lambda function, `pdfkit` will be installed under `/opt/nodejs/node_modules`.

```js
const PDFDocument = require('pdfkit');
```

## License
MIT
