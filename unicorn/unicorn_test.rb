gem 'minitest', '~> 5.0'
require 'minitest/autorun'
require 'minitest/pride'
require_relative 'unicorn'

class UnicornTest < Minitest::Test
  def test_it_has_a_name
    unicorn = Unicorn.new("Robert")
    assert_equal "Robert", unicorn.name
  end

  def test_it_can_be_named_something_else
    unicorn = Unicorn.new("Joseph")
    assert_equal "Joseph", unicorn.name
  end
end



