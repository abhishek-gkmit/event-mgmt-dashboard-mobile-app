import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { useEffect, useCallback, useRef, useState, useContext } from 'react';

import Button from '@components/Button';
import Input from '@components/Input';

import colors from '@constants/colors';
import { usernameRegEx } from '@constants/regularExpressions';
import ROUTES from '@constants/routes';

import styles from '@screens/Login/styles';

import API from '@utility/UserAsyncStorage';
import { UserContext } from '@src/contexts/UserContextProvider';

const initLoginFormData: LoginFormData = {
  username: '',
  password: '',
};

function Login({ navigation }: LoginScreenParamList) {
  const [formData, setFormData] = useState(initLoginFormData);
  const [errors, setErrors] = useState<LoginFormErrors>({});
  const inputRef = useRef<TextInput>(null);

  const { users, setLoggedInUserId } = useContext(UserContext);

  const handleChange = useCallback(
    function handleChange(data: Partial<LoginFormData>) {
      setFormData(formData => ({ ...formData, ...data }));
    },
    [setFormData],
  );

  const handleSubmit = useCallback(
    async function handleSubmit() {
      const errors: LoginFormErrors = {};
      let isError = false;

      if (formData.username.trim() === '') {
        errors.username = 'Please enter email';
        isError = true;
      } else if (!new RegExp(usernameRegEx).test(formData.username)) {
        errors.username = 'Username should only contain A-Z, a-z, 0-9 and _';
        isError = true;
      }

      if (
        formData.password.trim() === '' ||
        formData.password.trim().length < 8
      ) {
        errors.password = 'Password should be at least 8 letters long';
        isError = true;
      }

      if (isError) {
        setErrors(errors);
        return;
      }

      const user = await API.getUserByUsername(users, formData.username);
      if (!user) {
        Alert.alert('Username does not exists');
        return;
      }

      if (formData.password !== user.password) {
        Alert.alert('Password does not match');
        return;
      }

      user.id && (await API.setLoggedInUser(user.id));

      user.id && setLoggedInUserId(user.id);

      // clearing errors after successful verification
      setErrors({});
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
            label="Username"
            autoCapitalize="none"
            placeholder="Enter username"
            setValue={value => handleChange({ username: value })}
            icon={{ name: 'at', color: colors.primary }}
            ref={inputRef}
            errorMsg={errors.username}
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
