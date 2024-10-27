import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FirebaseFetcher from '../components/FirebaseFetcher';

export default function StudentListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student List</Text>
      <FirebaseFetcher />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});
