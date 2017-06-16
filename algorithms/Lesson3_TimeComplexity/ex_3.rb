def solution(array)
  n = array.length - 1
  counter = 0
  left_sum = 0
  right_sum = array.reduce(0, :+)
  result = Float::INFINITY
  while counter < n
    left_sum += array[counter]
    right_sum -= array[counter]
    result = (left_sum - right_sum).abs if (left_sum - right_sum).abs < result
    counter += 1
  end
  result
end
