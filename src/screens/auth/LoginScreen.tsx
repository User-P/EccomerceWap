import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useForm} from '../../hooks/useForm';

interface Props extends NativeStackScreenProps<any, any> {}

export const LoginScreen = ({navigation}: Props) => {
  const {email, password, onChange} = useForm({
    email: '',
    password: '',
  });

  const onLogin = () => {
    console.log('Login');
    Keyboard.dismiss();
  };

  return (
    <>
      <KeyboardAvoidingView style={{flex: 1}} behavior="height">
        <View>
          <Text>Login</Text>
          <Text>Email:</Text>
          <TextInput
            placeholder="Ingrese email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={value => onChange(value, 'email')}
            value={email}
            onSubmitEditing={onLogin}
          />

          <Text>Contraseña:</Text>
          <TextInput
            placeholder="********"
            secureTextEntry
            onChangeText={value => onChange(value, 'password')}
            onSubmitEditing={onLogin}
            value={password}
          />

          <View>
            <TouchableOpacity onPress={onLogin}>
              <Text>Login</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={() => navigation.replace('Register')}>
              <Text>Crear cuenta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
