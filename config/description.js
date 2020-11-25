const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '../');

module.exports = () => {
  const file = fs.readFileSync(path.join(rootDir, 'package-lock.json'), 'utf8');
  const json = JSON.parse(file);

  const pdfkitEntry = json.packages['node_modules/pdfkit'];

  if (!pdfkitEntry?.version) {
    throw new Error('Failed to get pdfkit version');
  }

  return `PDFKit v${pdfkitEntry.version}`;
};
