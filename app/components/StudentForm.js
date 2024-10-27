import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function StudentForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');

  const handleSubmit = () => {
    if (!name || !course) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    onSubmit({ name, course });
    setName('');
    setCourse('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Student Name"
        placeholderTextColor="black"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Course"
        placeholderTextColor="black"
        style={styles.input}
        value={course}
        onChangeText={setCourse}
      />
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: 'black',
  },
  buttonContainer: {
    marginTop: 10,
  },
});
