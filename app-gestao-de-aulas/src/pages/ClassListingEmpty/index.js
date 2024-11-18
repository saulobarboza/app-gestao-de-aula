import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from "react-native";
import styles from './styles';

export default function ClassListingEmpty() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Listagem das aulas</Text>
        <Text style={styles.description}>Ainda não foram encontradas aulas cadastradas.</Text>
        <View style={styles.bigPlusCircleIcon}>
          <Feather name="plus" size={360} color="#333333" />
        </View>
        <Text style={styles.description}>Cadastre novas aulas clicando no botão verde com sinal de "+" abaixo.</Text>
      </View>
      <TouchableOpacity style={styles.addNewClassButton}>
        <Feather name="plus" size={80} color="#FFFFFF" />
      </TouchableOpacity>
    </>
  )
}