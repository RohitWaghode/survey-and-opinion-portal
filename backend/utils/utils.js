const uuid = require("uuid");

const utils = {
  generateUid: async function generateUid(prefix, val = 10) {
    return `${prefix}${uuid.v4()}`.substring(0, val);
  },
};

module.exports = { utils };
