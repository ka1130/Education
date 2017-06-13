def solution(array)
  counter = Hash.new 0
  array.each.with_index do |num, _i|
    counter[num] += 1
  end
  odd_values_array = counter.values.select(&:odd?)
  counter.key(odd_values_array[0])
end
