gem 'minitest', '~> 5.0'
require 'minitest/autorun'
require 'minitest/pride'
require_relative 'ex_2'

class AlgorithmTest < Minitest::Test
  def test_basic
    assert_equal 5, solution([1, 8, 4, 7, 3, 2, 6])
  end
end
