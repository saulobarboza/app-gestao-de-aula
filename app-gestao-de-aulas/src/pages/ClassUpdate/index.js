import { Feather } from '@expo/vector-icons';
import { Text, View, TextInput, Alert, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import styles from './styles';

export default function ClassUpdate() {
  const {
    control,
    handleSubmit,
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
        <Text style={styles.title}>Atualização da aula</Text>
        <Text style={styles.formLabel}>Tema da aula:*</Text>

        <Controller
          control={control}
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

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.submitButtonText}>Atualizar</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}