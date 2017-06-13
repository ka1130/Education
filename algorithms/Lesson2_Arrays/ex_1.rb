def solution(array)
  counter = Hash.new(0)
  array.each { |num| counter[num] += 1 }
  odd_values_array = counter.values.find(&:odd?)
  counter.key(odd_values_array)
end
