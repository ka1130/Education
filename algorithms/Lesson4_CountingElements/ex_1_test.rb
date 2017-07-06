gem 'minitest', '~> 5.0'
require 'minitest/autorun'
require 'minitest/pride'
require_relative 'ex_1'

class AlgorithmTest < Minitest::Test
  def test_basic
    assert_equal 5, solution([1, 3, 6, 4, 1, 2])
  end

  def test_zero
    assert_equal 1, solution([0])
  end
end
