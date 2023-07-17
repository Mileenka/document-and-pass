'use strict';

/**
 * Given year is a leap year or not
 *
 * @param { number } year - The year to check.
 * @returns { boolean } - True if the year is a leap year, false otherwise.
 */

const leapYears = (year) => {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  };
  
module.exports = leapYears;
