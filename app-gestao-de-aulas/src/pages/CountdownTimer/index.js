import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from "react-native";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import styles from './styles';

export default function TopicListingFilled() {
  return (
    <>
      <View style={styles.navigationButtons}>
        <TouchableOpacity>
          <Feather name="arrow-left" size={100} color="#FFFFFF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuListingButton}>
          <Feather name="list" size={100} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Aula 1 - Ecologia</Text>

      <View style={styles.container}>
        <View style={styles.timerBackground}></View>
        <Text style={styles.hourTimer}>1h</Text>
        <Text style={styles.minuteTimer}>40m</Text>
        
        <AnimatedCircularProgress
          size={800}
          width={70}
          fill={50}
          tintColor="#ffffff"
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#333333"
        />
        <TouchableOpacity style={styles.playOrPauseButton}>
          <Feather name="play" size={100} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </>
  )
}