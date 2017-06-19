def solution(x, array)
  n = array.index(x) if array.include? x
  return -1 unless n

  subarray = array[0..n].uniq
  m = subarray.length
  print subarray

  m.times do
    x -= 1
    return n if x.zero?
    if subarray.include? x
      next
    else
      return -1
    end
  end
  n
end

puts solution(5, [1, 3, 1, 4, 2, 3, 5, 4])
puts solution(2, [2, 2, 2, 2])
puts solution(8, [1, 3, 2, 2, 1, 4, 4, 3, 5, 6, 7, 8, 5, 6])
