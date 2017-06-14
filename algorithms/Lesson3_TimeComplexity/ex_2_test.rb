gem 'minitest', '~> 5.0'
require 'minitest/autorun'
require 'minitest/pride'
require_relative 'ex_2'

class AlgorithmTest < Minitest::Test
  def test_equal_jumps
    assert_equal 2, solution(1, 5, 2)
  end

  def test_unequal_jumps
    assert_equal 3, solution(10, 85, 30)
  end
end
