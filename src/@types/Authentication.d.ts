import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
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

  type StackParamList = {
    Login: undefined;
    Signup: undefined;
  };

  type LoginScreenParamList = NativeStackScreenProps<StackParamList, 'Login'>;
  type SignupScreenParamList = NativeStackScreenProps<StackParamList, 'Signup'>;

  interface User extends Partial<SignupFormData> {
    id?: string;
  }
}
