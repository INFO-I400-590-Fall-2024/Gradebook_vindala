import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button title="Go to Student List" onPress={() => router.push('/student-list')} />
      <Button title="Add New Student" onPress={() => router.push('/add-student')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
