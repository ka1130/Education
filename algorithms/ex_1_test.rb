gem 'minitest', '~> 5.0'
require 'minitest/autorun'
require 'minitest/pride'
require_relative 'ex_1'

class AlgorithmTest < Minitest::Test

  def test_ex1
    assert_equal 5, solution(1041)
  end

end
