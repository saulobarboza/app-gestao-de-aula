import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function ClassListing() {
  const navigation = useNavigation();

  function navigateToCountdownTimer() {
    navigation.navigate('CountdownTimer');
  }

  function navigateToTopicListing() {
    navigation.navigate('TopicListing');
  }

  function navigateToClassUpdate() {
    navigation.navigate('ClassUpdate');
  }

  function navigateToClassRegistration() {
    navigation.navigate('ClassRegistration');
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Listagem das aulas</Text>

        <View style={styles.listItemBox}>
          <View style={styles.listItemBoxLineOne}>
            <TouchableOpacity style={styles.playButton} onPress={() => navigateToCountdownTimer()}>
              <Feather name="play" size={60} color="#28E020" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingsButton} onPress={() => navigateToTopicListing()}>
              <Feather name="settings" size={60} color="#333333" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.xButton}>
              <Feather name="x" size={40} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <View style={styles.listItemBoxLineTwo}>
            <Text style={styles.description}>
              Lorem Ipsum
            </Text>
            <TouchableOpacity style={styles.editButton} onPress={() => navigateToClassUpdate()}>
              <Feather name="edit" size={40} color="#333333" />
            </TouchableOpacity>
          </View>

          <View style={styles.listItemBoxLineThree}>
            <Feather name="clock" size={40} style={styles.clockIcon} />
            <Text style={styles.timerText}>0h50m</Text>
          </View>
        </View>

        <View style={styles.listItemBox}>
          <View style={styles.listItemBoxLineOne}>
            <TouchableOpacity style={styles.playButton} onPress={() => navigateToCountdownTimer()}>
              <Feather name="play" size={60} color="#28E020" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingsButton} onPress={() => navigateToTopicListing()}>
              <Feather name="settings" size={60} color="#333333" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.xButton}>
              <Feather name="x" size={40} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <View style={styles.listItemBoxLineTwo}>
            <Text style={styles.description}>
              Lorem Ipsum
            </Text>
            <TouchableOpacity style={styles.editButton} onPress={() => navigateToClassUpdate()}>
              <Feather name="edit" size={40} color="#333333" />
            </TouchableOpacity>
          </View>

          <View style={styles.listItemBoxLineThree}>
            <Feather name="clock" size={40} style={styles.clockIcon} />
            <Text style={styles.timerText}>0h50m</Text>
          </View>
        </View>

        <View style={styles.listItemBox}>
          <View style={styles.listItemBoxLineOne}>
            <TouchableOpacity style={styles.playButton} onPress={() => navigateToCountdownTimer()}>
              <Feather name="play" size={60} color="#28E020" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingsButton} onPress={() => navigateToTopicListing()}>
              <Feather name="settings" size={60} color="#333333" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.xButton}>
              <Feather name="x" size={40} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <View style={styles.listItemBoxLineTwo}>
            <Text style={styles.description}>
              Lorem Ipsum
            </Text>
            <TouchableOpacity style={styles.editButton} onPress={() => navigateToClassUpdate()}>
              <Feather name="edit" size={40} color="#333333" />
            </TouchableOpacity>
          </View>

          <View style={styles.listItemBoxLineThree}>
            <Feather name="clock" size={40} style={styles.clockIcon} />
            <Text style={styles.timerText}>0h50m</Text>
          </View>
        </View>

      </View>

      <TouchableOpacity style={styles.addNewClassButton} onPress={() => navigateToClassRegistration()}>
        <Feather name="plus" size={80} color="#FFFFFF" />
      </TouchableOpacity>
    </>
  )
}