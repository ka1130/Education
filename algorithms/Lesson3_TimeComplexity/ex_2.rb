def solution(x, y, d)
  jumps = ((y - x) / d.to_f).ceil
  jumps
end
