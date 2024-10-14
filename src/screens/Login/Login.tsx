import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { useEffect, useCallback, useRef, useState } from 'react';

import Button from '@components/Button';
import Input from '@components/Input';

import colors from '@constants/colors';
import { emailRegEx } from '@constants/regularExpressions';

import styles from '@screens/Login/styles';
import API from '@src/utility/UserAsyncStorage';

const initLoginFormData: LoginFormData = {
  email: '',
  password: '',
};

function Login({ navigation }) {
  const [formData, setFormData] = useState(initLoginFormData);
  const [errors, setErrors] = useState<LoginFormErrors>({});
  const inputRef = useRef<TextInput>(null);

  function handleChange(data: Partial<LoginFormData>) {
    setFormData(formData => ({ ...formData, ...data }));
  }

  const handleSubmit = useCallback(
    async function handleSubmit() {
      const errors: LoginFormErrors = {};
      let isError = false;

      if (formData.email.trim() === '') {
        errors.email = 'Please enter email';
        isError = true;
      } else if (!new RegExp(emailRegEx).test(formData.email)) {
        errors.email = "Email should be of 'username@example.com' format";
        isError = true;
      }

      if (
        formData.password.trim() === '' ||
        formData.password.trim().length < 4
      ) {
        errors.password = 'Password should be at least 4 letters long';
        isError = true;
      }

      if (isError) {
        setErrors(errors);
        return;
      }

      const user = await API.getUserByEmail(formData.email);
      if (!user) {
        Alert.alert('Email does not exists');
        return;
      }

      if (formData.password !== user.password) {
        Alert.alert('Password does not match');
        return;
      }

      user.id && (await API.setLoggedInUser(user.id));

      // clearing errors after successful verification
      setErrors({});
      Alert.alert('Login successful');
    },
    [formData],
  );

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <SafeAreaView style={styles.loginFormContainer}>
      <View style={styles.loginForm}>
        <View>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Login here</Text>

            <Text style={[styles.heading, styles.welcome]}>Welcome back!</Text>
          </View>

          <Input
            label="Email"
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="Enter email"
            setValue={value => handleChange({ email: value })}
            icon={{ name: 'email', color: colors.primary }}
            ref={inputRef}
            errorMsg={errors.email}
          />

          <Input
            label="Password"
            inputMode="text"
            keyboardType="visible-password"
            placeholder="Enter password"
            setValue={value => handleChange({ password: value })}
            secureTextEntry
            icon={{ name: 'lock', color: colors.primary }}
            errorMsg={errors.password}
          />

          <Button
            title="Sign in"
            onPress={handleSubmit}
            btnStyle={styles.btnStyle}
            btnTextStyle={styles.btnTextStyle}
          />
        </View>

        <View style={styles.signupOptionContainer}>
          <Text style={styles.signupQuestion}>You don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.replace('Signup')}>
            <Text style={styles.signupOptionIndicator}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;
