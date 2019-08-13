import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default function TodoItem(props) {
    const statusStyle = {
        backgroundColor: props.todo.status === 'Done' ? 'blue' : 'green'
    };
    return (
        <TouchableOpacity
            key={props.todo.body}
            onPress={() => props.onToggleTodo(props.todo.id)}
            style={[styles.todoItem, statusStyle]}
        >
            <Text style={styles.todoText}>
                {props.idx + 1}: {props.todo.body}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    todoItem: {
      margin: 5,
      padding: 10,
      minHeight: 50,
      width: '95%',
      color: 'white',
      borderRadius: 5,
      flexWrap: 'wrap'
    },
    todoText: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold'
    },
});