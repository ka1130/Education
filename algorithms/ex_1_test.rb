gem 'minitest', '~> 5.0'
require 'minitest/autorun'
require 'minitest/pride'
require_relative 'ex_1'

class AlgorithmTest < Minitest::Test

  def test_ex1_01
    assert_equal 0, solution(1) 
  end

  def test_ex1_02
    assert_equal 5, solution(1_041)
  end

  def test_ex1_03
    assert_equal 0, solution(2_147_483_647)
  end

  def test_ex1_04
    assert_equal 0, solution(4)
  end

  def test_ex1_05
    assert_equal 0, solution(16)
  end

  def test_ex1_06
    assert_equal 0, solution(15)
  end

  def test_ex1_07
    assert_equal 2, solution(328)
  end

  def test_ex1_08
    assert_equal 0, solution(6)
  end

end
