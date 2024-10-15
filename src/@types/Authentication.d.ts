interface LoginFormData {
  username: string;
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
  confirmPassword: string;
}

type SignupFormErrors = Partial<SignupFormData>;
