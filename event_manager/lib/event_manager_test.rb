gem 'minitest', '~> 5.0'
require 'minitest/autorun'
require 'minitest/pride'
require_relative 'event_manager'

class EventManagerTest < Minitest::Test
  def test_homephone
    assert_equal 3, 1 + 1
  end
end
