gem 'minitest', '~> 5.0'
require 'minitest/autorun'
require 'minitest/pride'
require_relative 'event_manager'

class EventManagerTest < Minitest::Test
  # HomePhone Tests
  def test_phone_more_than_11_digits
    assert_equal false, validate_phone("888888888882")
  end

  def test_phone_less_than_10_digits
    assert_equal false, validate_phone("6743709")
  end

  def test_phone_equals_10_digits
    assert_equal true, validate_phone("8765789065")
  end

  def test_phone_equals_11_digits_firstis_1
    assert_equal "8765789065", validate_phone("18765789065")
  end

  def test_phone_equals_11_digits_firstisnot_1
    assert_equal false, validate_phone("68765789065") 
  end

  def test_phone_digits_only
    assert_equal false, validate_phone("543908h453") 
  end

  def test_phone_else_case
    assert_equal false, validate_phone("6-90+65") 
  end

  # Time Tests
end
