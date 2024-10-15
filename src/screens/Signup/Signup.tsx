import {
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useState, useEffect, useRef, useCallback } from 'react';

import Button from '@components/Button';
import Input from '@components/Input';
import DropdownBox from '@components/DropdownBox';

import {
  nameRegEx,
  emailRegEx,
  ageRegEx,
  usernameRegEx,
  passwordRegEx,
} from '@constants/regularExpressions';
import colors from '@constants/colors';

import API from '@utility/UserAsyncStorage';

import styles from '@screens/Signup/styles';

const initSignupFormData: SignupFormData = {
  name: '',
  username: '',
  gender: '',
  age: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function Signup({ navigation }: SignupScreenParamList) {
  const [formData, setFormData] = useState(initSignupFormData);
  const [errors, setErrors] = useState<SignupFormErrors>({});
  const inputRef = useRef<TextInput>(null);

  function handleChange(data: Partial<SignupFormData>) {
    setFormData(formData => ({ ...formData, ...data }));
  }

  const handleSubmit = useCallback(
    async function handleSubmit() {
      const errors: SignupFormErrors = {};
      let isError = false;

      // validating form inputs
      if (formData.name.trim() === '') {
        errors.name = 'Name is required';
        isError = true;
      } else if (!new RegExp(nameRegEx).test(formData.name)) {
        errors.name = 'Name should only contain a-z, A-Z and spaces';
        isError = true;
      }

      if (formData.email.trim() === '') {
        errors.email = 'Email is required';
        isError = true;
      } else if (!new RegExp(emailRegEx).test(formData.email)) {
        errors.email = "Email should be of 'username@example.com' format";
        isError = true;
      }

      if (
        formData.gender !== 'male' &&
        formData.gender !== 'female' &&
        formData.gender !== 'other'
      ) {
        errors.gender = 'Gender is required';
        isError = true;
      }

      if (formData.username.trim() === '') {
        errors.username = 'Username is required';
        isError = true;
      } else if (!new RegExp(usernameRegEx).test(formData.username)) {
        errors.username = 'Username should only contain A-Z, a-z, 0-9 and _';
        isError = true;
      }

      if (formData.age.trim() === '') {
        errors.age = 'Age is required';
        isError = true;
      } else if (!new RegExp(ageRegEx).test(formData.age)) {
        errors.age = 'Age should be between 10 to 99';
        isError = true;
      }

      if (formData.password.trim() === '') {
        errors.password = 'Password is required';
        isError = true;
      } else if (!new RegExp(passwordRegEx).test(formData.password)) {
        errors.password =
          'Password must be 8 letters long and contain at least one uppercase letter, one digit and one special character.';
        isError = true;
      }

      if (formData.confirmPassword?.trim() === '') {
        errors.confirmPassword = 'Please confirm password';
        isError = true;
      } else if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = 'Password should be the same';
        isError = true;
      }

      if (isError) {
        setErrors(errors);
        return;
      }

      const emailExists = await API.emailExists(formData.email);
      if (emailExists) {
        Alert.alert('Email already exists. Please use a different email');
        return;
      }

      const usernameExists = await API.usernameExists(formData.username);
      if (usernameExists) {
        Alert.alert('Username already exists. Please use a different username');
        return;
      }

      try {
        delete formData.confirmPassword;
        await API.addUser({ ...formData, events: [] });
      } catch (err) {
        Alert.alert('There was some error in saving user data.');
        return;
      }

      // emptying erros after successful verification
      setErrors({});

      Alert.alert('Signup successful. Please login to continue');

      navigation.replace('Login');
    },
    [formData],
  );

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <SafeAreaView style={styles.signupFormContainer}>
      <View style={styles.signupForm}>
        <View>
          <View style={styles.headingContainer}>
            <Text style={[styles.heading]}>Sign-Up</Text>
          </View>

          <Input
            label="Full Name"
            autoCapitalize="none"
            placeholder="Enter full name"
            value={formData.name}
            setValue={value => handleChange({ name: value })}
            icon={{ name: 'alpha-a-box', color: colors.primary }}
            ref={inputRef}
            errorMsg={errors.name}
          />

          <Input
            label="Email"
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="Enter email"
            value={formData.email}
            setValue={value => handleChange({ email: value })}
            icon={{ name: 'email', color: colors.primary }}
            errorMsg={errors.email}
          />

          <DropdownBox
            name="Select Gender"
            label="Gender"
            items={[
              { value: 'male', name: 'Male' },
              { value: 'female', name: 'Female' },
              { value: 'other', name: 'Other' },
            ]}
            value={formData.gender}
            setValue={value => handleChange({ gender: value })}
            errorMsg={errors.gender}
          />

          <Input
            label="Username"
            autoCapitalize="none"
            placeholder="Enter username"
            value={formData.username}
            setValue={value => handleChange({ username: value })}
            icon={{ name: 'at', color: colors.primary }}
            errorMsg={errors.username}
          />

          <Input
            label="Age"
            inputMode="numeric"
            placeholder="Enter age"
            value={formData.age}
            setValue={value => handleChange({ age: value })}
            icon={{ name: 'account', color: colors.primary }}
            errorMsg={errors.age}
          />

          <Input
            label="Password"
            inputMode="text"
            placeholder="Enter password"
            value={formData.password}
            setValue={value => handleChange({ password: value })}
            secureTextEntry
            icon={{ name: 'lock', color: colors.primary }}
            errorMsg={errors.password}
          />

          <Input
            label="Confirm Password"
            inputMode="text"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            setValue={value => handleChange({ confirmPassword: value })}
            secureTextEntry
            icon={{ name: 'lock', color: colors.primary }}
            errorMsg={errors.confirmPassword}
          />

          <Button
            title="Sign up"
            onPress={handleSubmit}
            btnStyle={styles.btnStyle}
            btnTextStyle={styles.btnTextStyle}
          />
        </View>

        <View style={styles.loginOptionContainer}>
          <Text style={styles.loginQuestion}>You have an account?</Text>
          <TouchableOpacity onPress={() => navigation.replace('Login')}>
            <Text style={styles.loginOptionIndicator}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Signup;
