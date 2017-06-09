def solution(n)
 binary_arr = n.to_s(2).split("")
  counter = 0

  binary_arr.each_with_index do |element, index| 

    if binary_arr[index] == "0"
      counter = counter + 1
    end

    if binary_arr[index + 1] == "1" 
      return counter
    end
  end
end
