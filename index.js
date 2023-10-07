module.exports = function divide(a, b) {
    if (!a || !b) {
        return null;
      }
      if (!a || !b || a === "0" || b === "0" || typeof a === "string" || typeof b === "string") {
        return 0;
      }
      return a / b;
};
