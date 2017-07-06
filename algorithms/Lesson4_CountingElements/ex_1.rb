def solution(array)
  cons_array = (1..array.length + 1).to_a
  res_array = cons_array - array
  res_array[0]
end
