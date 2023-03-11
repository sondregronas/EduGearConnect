function getRedirectPath(affiliation) {
  /**
   * Redirects the user to the correct page after authentication
   * @param affiliation - The users affiliation
   * @returns {string} - The path to redirect the user to
   * @type {(affiliation: string) => string}
   */
  switch (affiliation) {
    case "student":
      return "/register";
    case "employee":
      return "/register";
  }
  return "/logout";
}

module.exports = {
  getRedirectPath,
};
