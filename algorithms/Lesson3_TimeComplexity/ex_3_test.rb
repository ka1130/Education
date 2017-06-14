gem 'minitest', '~> 5.0'
require 'minitest/autorun'
require 'minitest/pride'
require_relative 'ex_3'

class AlgorithmTest < Minitest::Test
  def test_basic
    assert_equal 1, solution([3, 1, 2, 4, 3])
  end

  def test_two_elements
    assert_equal 2000, solution([-1000, 1000])
  end
end
