const fs = require('fs');
const util = require('util');

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);
/**
 *  Function to write data to the JSON file given a destination and some content
 *  @param {string} destination The file you want to write to.
 *  @param {object} content The content you want to write to the file.
 *  @returns {void} Nothing
 */
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );
/**
 *  Function to read data from a given a file and append some content
 *  @param {object} content The content you want to append to the file.
 *  @param {string} file The path to the file you want to save to.
 *  @returns {void} Nothing
 */


  // readAndAppend besecally accept callback (content, file) 
  // then fs.readFile using callback (err, data)
  // if there's an err pass us err otherwise pass us data
  // read from the (file)

const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);                    // we check the err first and if there's no error
    } else {                                 // we're goint to parse that data read from file
      const parsedData = JSON.parse(data);   // then we push the (content) and then we're going 
      parsedData.push(content);              // to use writeToFile to parse (file, parsedData)
      writeToFile(file, parsedData);         // file destination and content on line 12
    }
  });
};

module.exports = { readFromFile, writeToFile, readAndAppend };