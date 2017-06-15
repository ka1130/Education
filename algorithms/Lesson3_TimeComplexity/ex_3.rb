def solution(array)
  n = array.length - 1
  counter = 0
  results = []
  sums = []
  arrays = []
  n.times do
    first_part = array[0..counter]
    second_part = array[(counter + 1)..n]
    arrays.push(first_part)
    arrays.push(second_part)
    counter += 1
  end
  m = arrays.length - 1
  for i in 0..m do
    sums.push(arrays[i].reduce(0, :+))
  end
  o = sums.length / 2
  i = 0
  o.times do
    results.push(sums[i].to_i - sums[i + 1].to_i)
    i += 2
  end
  results.map(&:abs).min
end

# def count_sum(array)
#   array.reduce(0, :+)
# end

# def solution(array)
#   n = array.length - 1
#   counter = 0
#   results = []
#   n.times do
#     first_part = array[0..counter]
#     second_part = array[(counter + 1)..n]
#     first_sum = count_sum(first_part)
#     second_sum = count_sum(second_part)
#     results.push(first_sum - second_sum)
#     counter += 1
#   end
#   results.map(&:abs).min
# end
