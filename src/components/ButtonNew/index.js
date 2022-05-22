import React from 'react';
import {
  View,
} from 'react-native';

import { Entypo } from '@expo/vector-icons';

import styles from './styles';

export default function ButtonNew({ size, color, focused }) {
  return (
    <View style={[styles.container, { backgroundColor: focused ? "#0e9cc5" : "#2ebce5", borderRadius: 30 }]}>
      <Entypo name="plus" size={size} color={focused ? "#fff" : "#0e9cc5"} />
    </View>
  );
}
