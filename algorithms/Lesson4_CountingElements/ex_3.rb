def solution(array)
  if array.max == array.length && array == array.uniq
    1
  else
    0
  end
end

# def solution(array)
#   if array.max == array.length && array == array.uniq
#     1
#   else
#     0
#   end
# end
