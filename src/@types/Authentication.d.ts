interface LoginFormData {
  email: string;
  password: string;
}

type LoginFormErrors = Partial<LoginFormData>;

interface SignupFormData {
  name: string;
  username: string;
  email: string;
  gender: string;
  age: string;
  password: string;
  confirmPassword: stirng;
}

type SignupFormErrors = Partial<SignupFormData>;

interface User extends SignupFormData {
  id?: string;
}
