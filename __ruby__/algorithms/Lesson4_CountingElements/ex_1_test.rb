gem 'minitest', '~> 5.0'
require 'minitest/autorun'
require 'minitest/pride'
require_relative 'ex_1'

class AlgorithmTest < Minitest::Test
  def test_permutatiom
    assert_equal 1, solution([5, 2, 1, 4, 3, 6])
  end

  def test_not_a_permutation_1
    assert_equal 0, solution([2, 1, 4, 3, 6])
  end

  def test_not_a_permutation_2
    assert_equal 0, solution([4, 1, 3])
  end

  def test_not_a_permutation_3
    assert_equal 0, solution([2, 5, 3, 4])
  end

  def test_antisum
    assert_equal 0, solution([9, 5, 7, 3, 2, 7, 3, 1, 10, 8])
  end
end
