gem 'minitest', '~> 5.0'
require 'minitest/autorun'
require 'minitest/pride'
require_relative 'ex_1'

class AlgorithmTest < Minitest::Test
  def test_basic
    assert_equal 5, solution([2, 4, 4, 2, 5])
  end

  def test_odd_values
    assert_equal 3, solution([3, 3, 5, 5, 3])
  end
end
