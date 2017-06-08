gem 'minitest', '~> 5.0'
require 'minitest/autorun'
require 'minitest/pride'
require 'date'
require_relative 'event_methods'

class EventManagerTest < Minitest::Test
  # Sanitize Phone Tests
  def test_sanitize_phone_first_digit_is_1
    assert_equal "7634901241", sanitize_phone("17634901241")
  end

  def test_sanitize_phone_first_digit_is_not_1
    assert_equal "", sanitize_phone("97634901241")
  end

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
  def test_date
    assert_equal DateTime.new(2008, 11, 12, 10, 47), parse_date("11/12/08 10:47")
  end
end
