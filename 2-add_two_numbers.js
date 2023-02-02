/* You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order, and each of their nodes contains a single digit. 
 * Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * Example 1:
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 * 
 * Example 2:
 * Input: l1 = [0], l2 = [0]
 * Output: [0]
 * 
 * Example 3:
 * Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * Output: [8,9,9,9,0,0,0,1]
 * 
 * Constraints:
 * The number of nodes in each linked list is in the range [1, 100].
 * 0 <= Node.val <= 9
 * It is guaranteed that the list represents a number that does not have leading zeros.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let carry = 0; // determines the value to be carried when adding digits
    let current = new ListNode(-1); // creates a new linked list with a head as -1
    let head = current; // points to head of new linked list

    while (l1 || l2 || carry) {
        let l1Val = l1 ? l1.val : 0; // gets value from list1
        let l2Val = l2 ? l2.val : 0; // gets value from list2

        let nextDigit = (l1Val + l2Val + carry) % 10; // gets the right most digit of total
        current.next = new ListNode(nextDigit); // adds the digit as a new node in list
        current = current.next; // points to newly created node

        carry = Math.floor((l1Val + l2Val + carry) / 10); // calculates new carry value

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    return head.next;
};
