/**
 * Check if http status code is successful (200 - 299)
 * @param {int} status https status code to be validated
 */
export const IsSuccess = (status) => status >= 200 && status <= 299;
