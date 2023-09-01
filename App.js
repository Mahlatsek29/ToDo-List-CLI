// App.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import TodoList from './components/TodoList';

const App = () => {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todoText.trim() !== '') {
      // Create a new todo object with a unique ID
      const newTodo = { id: Date.now(), text: todoText };
      // Add the new todo to the todos array
      setTodos([...todos, newTodo]);
      
      setTodoText('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo App</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a todo"
        onChangeText={(text) => setTodoText(text)}
        value={todoText}
      />
      <Button title="Add" onPress={addTodo} />
      <TodoList todos={todos} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
});

export default App;
