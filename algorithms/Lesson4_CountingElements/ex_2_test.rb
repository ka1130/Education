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
end
