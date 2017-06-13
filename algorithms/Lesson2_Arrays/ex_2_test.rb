gem 'minitest', '~> 5.0'
require 'minitest/autorun'
require 'minitest/pride'
require_relative 'ex_2'

class AlgorithmTest < Minitest::Test
  def test_1
    assert_equal [6, 3, 8, 9, 7], solution([3, 8, 9, 7, 6], 1)
  end

  def test_2
    assert_equal [21, 7, -1000, 3, 999], solution([-1000, 3, 999, 21, 7], 2)
  end
end
