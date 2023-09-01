import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const addTask = () => {
    if (task) {
      if (editIndex !== null) {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = task;
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks([...tasks, task]);
      }
      setTask('');
    }
  };
  const editTask = (index) => {
    setTask(tasks[index]);
    setEditIndex(index);
  };
  return (
    <View style={{ padding: '27%' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 , alignSelf: 'center'}}>To-Do List</Text>
      <TextInput
        placeholder="Enter a task"
        value={task}
        onChangeText={(text) => setTask(text)}
        style={{ marginBottom: 10, padding: 10, borderStyle: 'solid', borderWidth: 1, alignItems: 'center' }}
      />
      <Button title={editIndex !== null ? "Update Task" : "Add Task"} onPress={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <Text>{item}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Button
                title="Edit"
                onPress={() => editTask(index)}
                style={{ marginRight: 10 }}
              />
              <Button
                title="Remove"
                onPress={() => {
                  const updatedTasks = [...tasks];
                  updatedTasks.splice(index, 1);
                  setTasks(updatedTasks);
                }}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};
export default App;