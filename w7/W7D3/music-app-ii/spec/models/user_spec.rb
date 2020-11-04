# require 'rails_helper'
require 'user'


RSpec.describe User, type: :model do
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_length_of(:password) >= 6 }

  describe 'is_password?' do
    it 'should exist?'
      expect{is_password?(password)}.to raise
  end

  desribe 'reset_session_token' do
    it 'should exist?'
  end

  describe 'self.find_by_credentials' do
    it 'should exist?'
  end

end

