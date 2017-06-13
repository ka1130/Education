def solution(n)
 
  counter = 0
  max_value = 0

    binary_arr = n.to_s(2).split('')   
    binary_arr.each do |number|    
      if number == '1'
        max_value = counter if counter > max_value
        counter = 0       
      elsif number == '0'
        counter += 1           
      end    
    end  
   return max_value    
end
