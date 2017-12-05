gem 'minitest', '~> 5.0'
require 'minitest/autorun'
require 'minitest/pride'
require_relative 'ex_2'

class AlgorithmTest < Minitest::Test
  def test_basic
    assert_equal 6, solution(5, [1, 3, 1, 4, 2, 3, 5, 4])
  end

  def test_same_nums
    assert_equal -1, solution(2, [2, 2, 2, 2])
  end

  def test_multiple_nums
    assert_equal 11, solution(8, [1, 3, 2, 2, 1, 4, 4, 3, 5, 6, 7, 8, 5, 6])
  end

  def test_multiple_x_input
    assert_equal 4, solution(3, [1, 3, 1, 3, 2, 1, 3])
  end
end
