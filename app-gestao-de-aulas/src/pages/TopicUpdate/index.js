import { Feather } from '@expo/vector-icons';
import { Text, View, TextInput, Alert, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from "react-hook-form";
import styles from './styles';

export default function TopicUpdate() {
  const navigation = useNavigation();

  function navigateToTopicListing() {
    navigation.navigate('TopicListing');
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      classTopic: "",
      topicDurationInHours: 0,
      topicDurationInMinutes: 0,
    },
  })
  const onSubmit = (data) => Alert.alert(data)

  return (
    <>
      <View style={styles.arrowLeftBackButton}>
        <TouchableOpacity onPress={() => navigateToTopicListing()}>
          <Feather name="arrow-left" size={100} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Atualização do tópico</Text>
        <Text style={styles.formLabel}>Tópico da aula:*</Text>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Digite o tópico da aula"
              placeholderTextColor={'#B8B8B8'}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.inputField}
            />
          )}
          name="classTopic"
        />
        {errors.classTopic && <Text style={styles.inputFieldMessageError}>Esse campo é obrigatório!</Text>}

        <Text style={styles.formLabel}>Horas:*</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Digite um número entre 0 e 24"
              placeholderTextColor={'#B8B8B8'}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.inputField}
            />
          )}
          name="topicDurationInHours"
        />
        {errors.topicDurationInHours && <Text style={styles.inputFieldMessageError}>Esse campo é obrigatório!</Text>}


        <Text style={styles.formLabel}>Minutos:*</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Digite um número entre 0 e 59"
              placeholderTextColor={'#B8B8B8'}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.inputField}
            />
          )}
          name="topicDurationInMinutes"
        />
        {errors.topicDurationInMinutes && <Text style={styles.inputFieldMessageError}>Esse campo é obrigatório!</Text>}

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.submitButtonText}>Atualizar</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}