import react from 'react';
import {
  Text,
  View
} from 'react-native';

import styles from './styles';

export default function Notification() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notification</Text>
    </View>
  );
}
