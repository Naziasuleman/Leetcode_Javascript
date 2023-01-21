/** There are n seats and n students in a room. You are given an array seats of length n,
 *  where seats[i] is the position of the ith seat. You are also given the array students
 * of length n, where students[j] is the position of the jth student. Return the minimum
 * number of moves required to move each student to a seat such that no two students are in the same seat.*/

var minMovesToSeat = function (seats, students) {
  let result = 0;
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);
  for (let i in students) result += Math.abs(seats[i] - students[i]);

  return result;
};

console.log(minMovesToSeat([3, 1, 5], [2, 7, 4]));
