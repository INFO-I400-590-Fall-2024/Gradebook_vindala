import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase.config';
import { useRouter } from 'expo-router';
import StudentForm from '../components/StudentForm'; // Import the form component

export default function AddStudentScreen() {
  const router = useRouter();

  const handleAddStudent = async (studentData) => {
    try {
      await addDoc(collection(db, 'students'), studentData);
      Alert.alert('Success', 'Student added successfully', [
        { text: 'OK', onPress: () => router.push('/student-list') },
      ]); // Navigate only after pressing OK
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      <StudentForm onSubmit={handleAddStudent} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});
