import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from "react-native";
import styles from './styles';

export default function TopicListing() {
  return (
    <>
      <View style={styles.arrowLeftBackButton}>
        <TouchableOpacity>
          <Feather name="arrow-left" size={40} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Listagem dos tópicos</Text>
        <Text style={styles.subtitle}>Aula 1 - Ecologia</Text>
        <Text style={styles.description}>Ainda não foram encontrados tópicos cadastrados.</Text>
        <View style={styles.bigPlusCircleIcon}>
          <Feather name="plus" size={150} color="#333333" />
        </View>
        <Text style={styles.description}>Cadastre novos tópicos à aula clicando no botão verde com sinal de "+" abaixo.</Text>
      </View>
      <TouchableOpacity style={styles.addNewClassButton}>
        <Feather name="plus" size={30} color="#FFFFFF" />
      </TouchableOpacity>
    </>
  )
}