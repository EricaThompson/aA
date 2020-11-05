require 'rails_helper'
# require 'user'


RSpec.describe User, type: :model do

  subject(:cool_dude) { User.create(username: 'Cool Dude', age: 40, password: 'password')}

  describe 'validations' do
  #BAD
  #   it 'validates presence of email' do
  #     incomplete_user = User.new(email: '', username: 'test', password: 11111111)
  #     expect(incomplete_user).to_not be_valid
  #   end 
    #shoulda matchers need should
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_presence_of(:session_token) }
    it { should validate_presence_of(:username) }

    it {should validate_uniqueness_of(:email)}
    # it { should validate_length_of(:password) >= 6 }
  
  end

  #! validations of associations
  # describe 'associations' do
  #   it {should have_many(:chirps)}
  #   it {should have_many(:chirps)}
  #   it {should have_many(:chirps)}
  # end

  #! validation of methods
  describe 'is_password?' do
    # first :user is the local variable name
    # second :user is the name of our factory
    # .create will persist information to the test database
    # .build will instantiate the object, but NOT save it to the db
    let(:user) {FactoryBot.create(:user)}

    context 'with a valid password' do
      it 'should return true' do
        expect(user.is_password?('password')).to be true
      end  
    end

    context 'with an invalid password' do
      it 'should return false' do
        expect(user.is_password?('something else')).to be false
      end
    end
  end

  #! additional test coverage demo
  describe 'password encryption' do
    it 'does not save passwords to the database' do
      FactoryBot.create(:Harry_Potter) 
      user = User.find_by(username: 'Harry Potter')
      expect(user.password).not_to eq('starwars')
    end

    it 'encrypts password using BCrypt' do
      #makes sure when we create a user that it actually encrypts it
      expect(BCrypt::Password).to receive(:create).with('abcdef')
      #we can manually overwrite factory bot column values
      FactoryBot.build(:user, password: 'abcdef') 
    end
  end

  
  # desribe 'reset_session_token' do
  #   it 'should exist?'
  # end

  # describe 'self.find_by_credentials' do
  #   it 'should exist?'
  # end

end


#! users_controller_spec.rb

RSpec.describe UsersController, type: :controller do
  describe 'get#new' do
    it 'renders our new user template' do
      get :new
      expect(response).to render_template(:new)
    end
  end

  describe 'post#create' do
    let(:valid_params) {{user: {username: 'Cooler dude', :age: 41, password: 'password'} }}
    let(:invalid_params) {{user: {username: 'Cooler dude', :age: 41, password: ''}}}
    let(:user) {User.find_by(username: 'Cooler Dude')}
    context 'with valid params' do
      before :each do
        post :create, params: valid_params
      end

      it 'logs in the user' do 
        expect(session[:session_token]).to eq(user.session_token)
      end

      it 'redirects to users show page' do
        expect(response).to redirect_to(user_url(user))
      end
    end

    context 'with invalid params' do
      it 'renders the new template' do
        post :create, params: invalid_params
        expect(response).to render_template(:new)
      end
    end

  end

end


#!features/auth_spec.rb for user testing

feature 'Signing Up', type: :feature do
  background :each do
    visit new_user_url
  end

  scenario 'has a user sign up page' do
    #the have_content has to be exactly the same text as on page
    expect(page).to have_content('Sign Up')
  end

  scenario 'takes a username, password and age' do
    expect(page).to have_content('Username')
    expect(page).to have_content('Password')
    expect(page).to have_content('Age')
  end


  scenario 'will redirect to user show page and display username on success' do
    #needs label for username and id in input to find it
    fill_in 'Username', with: 'Cool Capy'
    fill_in 'Age', with: 270
    fill_in 'Password', with: 'ImSuperCappy'
    click_button 'Sign Up' 

    expect(page).to have_content('Cool Capy')
    user = Usr.find_by(username: "Cool Capy")
    expect(current_path).to eq(user_path(user))
    
  end

  scenario 'rerenders sign up page with invalid user info' do
    #needs label for username and id in input to find it
    fill_in 'Username', with: 'Cool Capy'
    fill_in 'Age', with: 270
    click_button 'Sign Up' 

    #save_and_open_page (to see what capy sees)
    expect(page).to have_content('Password is too short (minimum is 6 characters)')
    
  end

end
