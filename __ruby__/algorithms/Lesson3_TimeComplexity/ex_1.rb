def solution(array)
  return 1 if array == []
  n = array.length + 1
  current_sum = array.reduce(:+)
  correct_sum = ((1.0 + n) / 2.0) * n
  missing_number = correct_sum - current_sum
  missing_number.to_i
end
