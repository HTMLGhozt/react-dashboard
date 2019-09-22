const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '../');

module.exports = {
  rootDir: ROOT_DIR,
  moduleFileExtensions: ['js', 'json'],
  moduleDirectories: ['node_modules', 'src'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
