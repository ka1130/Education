def solution(array)
  n = array.length
  counter = 0
  results = []
  n.times do
    while counter < n
      counter += 1
      first_part = array.take(counter)
      second_part = array[counter..n]
      first_sum = first_part.reduce(0, :+)
      second_sum = second_part.reduce(0, :+)
      result = (first_sum - second_sum).abs
      results.push(result)
    end
  end
  minimum_val = results.min
  print minimum_val
end

solution([3, 1, 2, 4, 3])
