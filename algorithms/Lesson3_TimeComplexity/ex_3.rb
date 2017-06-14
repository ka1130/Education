def solution(array)
  n = array.length - 1
  counter = 0
  results = []
  n.times do
    first_part = array[0..counter]
    second_part = array[(counter + 1)..n]
    first_sum = first_part.reduce(0, :+)
    second_sum = second_part.reduce(0, :+)
    results.push(first_sum - second_sum)
    counter += 1
  end
  results.map(&:abs).min
end

print solution([3, 1, 2, 4, 3])
print solution([-1000, 1000])

# def solution(array)
#   n = array.length
#   counter = 0
#   first_sum = 0
#   second_sum = 0
#   results = []
#   if array.length == 2
#     first_sum = array[0]
#     second_sum = array[1]
#     result = (first_sum - second_sum).abs
#     return result
#   else
#     n.times do
#       counter += 1
#       first_part = array.take(counter)
#       second_part = array[counter..n]
#       first_sum = first_part.reduce(0, :+)
#       second_sum = second_part.reduce(0, :+)
#       result = (first_sum - second_sum).abs
#       results.push(result)
#     end
#   end
#   minimum_val = results.min
#   minimum_val
# end

# timesem nie licz sumy, podziałem będzie index, czyli po indexach, [0..n-1]
