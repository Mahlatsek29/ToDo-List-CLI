// TodoList.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const TodoList = ({ todos }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  todoItem: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 8,
  },
});

export default TodoList;
