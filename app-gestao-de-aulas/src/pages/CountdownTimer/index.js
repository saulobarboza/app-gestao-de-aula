import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import styles from './styles';

export default function TopicListing() {
  const navigation = useNavigation();

  function navigateToClassListing() {
    navigation.navigate('ClassListing');
  }

  return (
    <>
      <View style={styles.navigationButton}>
        <TouchableOpacity onPress={() => navigateToClassListing()}>
          <Feather name="arrow-left" size={100} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Lorem Ipsum</Text>

      <View style={styles.container}>
        <View style={styles.timerBackground}></View>
        <Text style={styles.hourTimer}>0h</Text>
        <Text style={styles.minuteTimer}>50m</Text>
        
        <AnimatedCircularProgress
          size={800}
          width={70}
          fill={50}
          tintColor="#28E020"
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#FFFFFF"
        />
        <TouchableOpacity style={styles.playOrPauseButton}>
          <Feather name="play" size={100} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </>
  )
}