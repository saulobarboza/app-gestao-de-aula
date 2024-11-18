import { Feather } from '@expo/vector-icons';
import { Text, View, TextInput, Alert, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import styles from './styles';

export default function ClassRegistration() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      classTheme: ""
    },
  })
  const onSubmit = (data) => Alert.alert(data)

  return (
    <>
      <View style={styles.arrowLeftBackButton}>
        <TouchableOpacity>
          <Feather name="arrow-left" size={100} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Cadastro da aula</Text>
        <Text style={styles.formLabel}>Tema da aula:*</Text>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Digite o tema da aula"
              placeholderTextColor={'#B8B8B8'}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.inputField}
            />
          )}
          name="classTheme"
        />
        {errors.classTheme && <Text style={styles.inputFieldMessageError}>Esse campo é obrigatório!</Text>}

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.submitButtonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}