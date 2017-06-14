def solution(array)
  return 1 if array == []
  current_sum = array.reduce(:+)
  correct_array = []
  n = array.length + 1
  counter = 0
  n.times do
    counter += 1
    correct_array.push(counter)
  end
  correct_sum = correct_array.reduce(:+)
  missing_number = correct_sum - current_sum
  missing_number
end
