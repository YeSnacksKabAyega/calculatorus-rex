Hi. Welcome to Calculatorus-Rex 🦖.

Run the app: npx ts-node <path>start.ts
This is a string based calculator project built as an example of TDD. Enter a string, and see the sum of all numbers as long as they follow the required format. The whole operation must be in a single string format as shown in the following examples. You may also refer to the test file which shows the tests step by step, so it's like a running documentation.

Example #1: 
Input: ''
Output: 0

Example #2:
Input: '6'
Output: 6

Example #3:
Input: '6,9'
Output: 15

Example #4:
Input: '6,9,4'
Output: 19

Example #5:
Input: '6,9\n4,2'
Output: 21

Example #6:
Input: '//;\n90;09'
Output: 99

Example #7:
Input: '//;\n90;09\n-9,-99'
Output: Exception. Use positive numbers only.

Example #8:
Input: '//;\n9009\n9,99'
Output: 108

Example #9: 
Input: '//[***]\n4***0***4'
Output: 8

Example #10:
Input: '//[%][*]\n86%42*88
Output: 216

Example #11: 
Input: '//[;;;][%%]\n6%%7;;;8'
Output: 21
