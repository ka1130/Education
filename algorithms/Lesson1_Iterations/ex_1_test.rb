gem 'minitest', '~> 5.0'
require 'minitest/autorun'
require 'minitest/pride'
require_relative 'ex_1'

class AlgorithmTest < Minitest::Test

  def test_single_one
    assert_equal 0, solution(1) 
  end

  def test_sequence_of_zeros_on_the_left
    assert_equal 5, solution(1_041)
  end

  def test_largest_number
    assert_equal 0, solution(2_147_483_647)
  end

  def test_sequence_of_zeros_at_the_end_only
    assert_equal 0, solution(4)
  end

  def test_multiple_ones
    assert_equal 0, solution(15)
  end

  def test_largest_sequence_of_zeros_at_the_end
    assert_equal 2, solution(328)
  end

  def test_single_zero_at_the_end
    assert_equal 0, solution(6)
  end

end
