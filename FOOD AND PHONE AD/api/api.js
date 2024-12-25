const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

const read_file = (file_name) => {
    try {
        const filePath = path.join(__dirname, '../module', file_name);
        const fileData = readFileSync(filePath, 'utf-8');
        return JSON.parse(fileData);
    } catch (error) {
        console.error(`Error reading file ${file_name}:`, error.message);
        return [];
    }
};

const write_file = (file_name, data) => {
    try {
        const filePath = path.join(__dirname, '../module', file_name);
        writeFileSync(filePath, JSON.stringify(data, null, 4));
    } catch (error) {
        console.error(`Error writing file ${file_name}:`, error.message);
    }
};

module.exports = {
    read_file,
    write_file
};
