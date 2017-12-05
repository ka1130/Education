def solution(x, array)
  index = -1
  if x > 0
    hit_array = Array.new(x)
    points_left = 0
    for i in 1..x do
      hit_array[i - 1] = 1
      points_left += i
    end
    for i in 0...array.length do
      current_leaf_position = array[i]
      if hit_array[current_leaf_position - 1] == 1
        hit_array[current_leaf_position - 1] = 0
        points_left -= current_leaf_position
      end
      if points_left == 0
        index = i
        break
      end
    end
  end
  index
end
