import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from "react-native";
import styles from './styles';

export default function ClassListingFilled() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Listagem das aulas</Text>

        <View style={styles.listItemBox}>
          <View style={styles.listItemBoxLineOne}>
            <TouchableOpacity style={styles.playButton}>
              <Feather name="play" size={60} color="#28E020" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingsButton}>
              <Feather name="settings" size={60} color="#333333" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.xButton}>
              <Feather name="x" size={40} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <View style={styles.listItemBoxLineTwo}>
            <Text style={styles.description}>
              Aula 1 - Ecologia
            </Text>
            <TouchableOpacity style={styles.editButton}>
              <Feather name="edit" size={40} color="#333333" />
            </TouchableOpacity>
          </View>

          <View style={styles.listItemBoxLineThree}>
            <Feather name="clock" size={40} style={styles.clockIcon} />
            <Text style={styles.timerText}>50m</Text>
          </View>
        </View>

        <View style={styles.listItemBox}>
          <View style={styles.listItemBoxLineOne}>
            <TouchableOpacity style={styles.playButton}>
              <Feather name="play" size={60} color="#28E020" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingsButton}>
              <Feather name="settings" size={60} color="#333333" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.xButton}>
              <Feather name="x" size={40} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <View style={styles.listItemBoxLineTwo}>
            <Text style={styles.description}>
              Aula 2 - Botânica
            </Text>
            <TouchableOpacity style={styles.editButton}>
              <Feather name="edit" size={40} color="#333333" />
            </TouchableOpacity>
          </View>

          <View style={styles.listItemBoxLineThree}>
            <Feather name="clock" size={40} style={styles.clockIcon} />
            <Text style={styles.timerText}>50m</Text>
          </View>
        </View>

        <View style={styles.listItemBox}>
          <View style={styles.listItemBoxLineOne}>
            <TouchableOpacity style={styles.playButton}>
              <Feather name="play" size={60} color="#28E020" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingsButton}>
              <Feather name="settings" size={60} color="#333333" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.xButton}>
              <Feather name="x" size={40} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <View style={styles.listItemBoxLineTwo}>
            <Text style={styles.description}>
              Aula 3 - Genética
            </Text>
            <TouchableOpacity style={styles.editButton}>
              <Feather name="edit" size={40} color="#333333" />
            </TouchableOpacity>
          </View>

          <View style={styles.listItemBoxLineThree}>
            <Feather name="clock" size={40} style={styles.clockIcon} />
            <Text style={styles.timerText}>50m</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.addNewClassButton}>
        <Feather name="plus" size={80} color="#FFFFFF" />
      </TouchableOpacity>
    </>
  )
}