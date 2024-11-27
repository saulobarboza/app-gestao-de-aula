import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function TopicListing() {
  const navigation = useNavigation();

  function navigateToClassListing() {
    navigation.navigate('ClassListing');
  }

  function navigateToTopicUpdate() {
    navigation.navigate('TopicUpdate');
  }

  function navigateToTopicRegistration() {
    navigation.navigate('TopicRegistration');
  }

  return (
    <>
      <View style={styles.arrowLeftBackButton}>
        <TouchableOpacity onPress={() => navigateToClassListing()}>
          <Feather name="arrow-left" size={100} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Listagem dos tópicos</Text>
        <Text style={styles.subtitle}>Lorem Ipsum</Text>

        <View style={styles.listItemBox}>
          <View style={styles.listItemBoxLineOne}>
            <TouchableOpacity style={styles.settingsButton} onPress={() => navigateToTopicUpdate()}>
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
          </View>

          <View style={styles.listItemBoxLineThree}>
            <Feather name="clock" size={40} style={styles.clockIcon} />
            <Text style={styles.timerText}>0h15m</Text>
          </View>
        </View>

        <View style={styles.listItemBox}>
          <View style={styles.listItemBoxLineOne}>
            <TouchableOpacity style={styles.settingsButton} onPress={() => navigateToTopicUpdate()}>
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
          </View>

          <View style={styles.listItemBoxLineThree}>
            <Feather name="clock" size={40} style={styles.clockIcon} />
            <Text style={styles.timerText}>0h15m</Text>
          </View>
        </View>

        <View style={styles.listItemBox}>
          <View style={styles.listItemBoxLineOne}>
            <TouchableOpacity style={styles.settingsButton} onPress={() => navigateToTopicUpdate()}>
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
          </View>

          <View style={styles.listItemBoxLineThree}>
            <Feather name="clock" size={40} style={styles.clockIcon} />
            <Text style={styles.timerText}>0h15m</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.addNewClassButton} onPress={() => navigateToTopicRegistration()}>
        <Feather name="plus" size={80} color="#FFFFFF" />
      </TouchableOpacity>
    </>
  )
}