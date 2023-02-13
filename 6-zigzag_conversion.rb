# The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
# (you may want to display this pattern in a fixed font for better legibility)
# 
# P   A   H   N
# A P L S I I G
# Y   I   R
# And then read line by line: "PAHNAPLSIIGYIR"
# Write the code that will take a string and make this conversion given a number of rows:
# string convert(string s, int numRows);
#  
# Example 1:
# 
# Input: s = "PAYPALISHIRING", numRows = 3
# Output: "PAHNAPLSIIGYIR"
# 
# Example 2:
# 
# Input: s = "PAYPALISHIRING", numRows = 4
# Output: "PINALSIGYAHRPI"
# Explanation:
# P     I    N
# A   L S  I G
# Y A   H R
# P     I
# 
# Example 3:
# 
# Input: s = "A", numRows = 1
# Output: "A"
#  
# Constraints:
# 
# 1 <= s.length <= 1000
# s consists of English letters (lower-case and upper-case), ',' and '.'.
# 1 <= numRows <= 1000
#

def convert(s, num_rows)
    return s if num_rows == 1 || s.length <= num_rows
  
    zigzag = Array.new(num_rows) { "" }
    index, step = 0, 1
  
    s.chars.each do |char|
      zigzag[index] += char
      index += step
  
      if index == 0
        step = 1
      elsif index == num_rows - 1
        step = -1
      end
    end
  
    zigzag.join
  end
  