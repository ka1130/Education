def solution(arr, n)
  return [] if arr == []
  n = n % arr.length if n > arr.length
  n.times do
    arr.unshift(arr.pop)
  end
  arr
end

solution([3, 3, 5, 5, 3], 42)
