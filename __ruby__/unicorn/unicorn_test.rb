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

  def test_it_is_white_by_default
    unicorn = Unicorn.new("Margaret")
    assert_equal "white", unicorn.color
  end

  def test_it_knows_if_it_is_white
    unicorn = Unicorn.new("Elisabeth")
    assert unicorn.white?, "Elisabeth should be white, but isn't."
  end

  def test_it_does_not_have_to_be_white
    unicorn = Unicorn.new("Barbara", "purple")
    assert_equal "purple", unicorn.color
  end

  def test_it_knows_if_it_is_not_white
    unicorn = Unicorn.new("Roxanne", "green")
    refute unicorn.white?, "I guess Roxanne thinks she's white, when really she is green."
  end

  def test_unicorn_says_sparkly_stuff
    unicorn = Unicorn.new("Francis")
    assert_equal "**;* I don't like you very much. **;*", unicorn.say("I don't like you very much.")
  end
end



