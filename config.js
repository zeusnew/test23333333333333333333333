const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "TY0kiDbI#_S1i78sdW9i6IsNCBBqlB2ViMz81TA7NvPiV89Tq9pA",
MODE : process.env.MODE || "public",// groups/public/private
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
