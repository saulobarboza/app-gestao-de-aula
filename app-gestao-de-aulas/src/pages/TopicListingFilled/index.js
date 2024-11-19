import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from "react-native";
import styles from './styles';

export default function TopicListingFilled() {
  return (
    <>
      <View style={styles.arrowLeftBackButton}>
        <TouchableOpacity>
          <Feather name="arrow-left" size={100} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Listagem dos tópicos</Text>
        <Text style={styles.subtitle}>Aula 1 - Ecologia</Text>

        <View style={styles.listItemBox}>
          <View style={styles.listItemBoxLineOne}>
            <TouchableOpacity style={styles.settingsButton}>
              <Feather name="settings" size={60} color="#333333" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.xButton}>
              <Feather name="x" size={40} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <View style={styles.listItemBoxLineTwo}>
            <Text style={styles.description}>
              Definição de Ecologia
            </Text>
            <TouchableOpacity style={styles.editButton}>
              <Feather name="edit" size={40} color="#333333" />
            </TouchableOpacity>
          </View>

          <View style={styles.listItemBoxLineThree}>
            <Feather name="clock" size={40} style={styles.clockIcon} />
            <Text style={styles.timerText}>15m</Text>
          </View>
        </View>

        <View style={styles.listItemBox}>
          <View style={styles.listItemBoxLineOne}>
            <TouchableOpacity style={styles.settingsButton}>
              <Feather name="settings" size={60} color="#333333" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.xButton}>
              <Feather name="x" size={40} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <View style={styles.listItemBoxLineTwo}>
            <Text style={styles.description}>
              Níveis de organização em Ecologia
            </Text>
            <TouchableOpacity style={styles.editButton}>
              <Feather name="edit" size={40} color="#333333" />
            </TouchableOpacity>
          </View>

          <View style={styles.listItemBoxLineThree}>
            <Feather name="clock" size={40} style={styles.clockIcon} />
            <Text style={styles.timerText}>15m</Text>
          </View>
        </View>

        <View style={styles.listItemBox}>
          <View style={styles.listItemBoxLineOne}>
            <TouchableOpacity style={styles.settingsButton}>
              <Feather name="settings" size={60} color="#333333" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.xButton}>
              <Feather name="x" size={40} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <View style={styles.listItemBoxLineTwo}>
            <Text style={styles.description}>
              Importância da Ecologia
            </Text>
            <TouchableOpacity style={styles.editButton}>
              <Feather name="edit" size={40} color="#333333" />
            </TouchableOpacity>
          </View>

          <View style={styles.listItemBoxLineThree}>
            <Feather name="clock" size={40} style={styles.clockIcon} />
            <Text style={styles.timerText}>20m</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.addNewClassButton}>
        <Feather name="plus" size={80} color="#FFFFFF" />
      </TouchableOpacity>
    </>
  )
}