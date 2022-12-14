const { ERROR_PREFIX } = require("./error.constants");

class InValidInputError extends Error {
  constructor(message) {
    super(`${ERROR_PREFIX} ${message}`);
  }
}
module.exports = InValidInputError;
