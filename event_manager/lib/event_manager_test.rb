gem 'minitest', '~> 5.0'
require 'minitest/autorun'
require 'minitest/pride'
require_relative 'event_manager'

class EventManagerTest < Minitest::Test
  def test_phone_more_than_11_digits
    assert_equal validate_phone("888888888882"), false
  end

  def test_phone_less_than_10_digits
    assert_equal validate_phone("6743709"), false
  end

    def test_phone_equals_10_digits
    assert_equal validate_phone("8765789065"), true
  end
end
