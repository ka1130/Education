gem 'minitest', '~> 5.0'
require 'minitest/autorun'
require 'minitest/pride'
require_relative 'event_manager'

class EventManagerTest < Minitest::Test
  def test_phone
    assert_equal validate_phone("888888888882"), false
  end
end
