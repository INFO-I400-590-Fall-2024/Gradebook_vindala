import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="student-list" options={{ title: 'Student List' }} />
      <Tabs.Screen name="add-student" options={{ title: 'Add Student' }} />
    </Tabs>
  );
}
