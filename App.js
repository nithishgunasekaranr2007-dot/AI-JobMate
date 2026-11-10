import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI JobMate</Text>
      <Text style={styles.subtitle}>
        Your AI-powered career assistant
      </Text>
      <Text style={styles.feature}>💼 Find Jobs</Text>
      <Text style={styles.feature}>📄 AI Resume Builder</Text>
      <Text style={styles.feature}>🎤 Interview Copilot</Text>
      <Text style={styles.feature}>💻 Coding Compiler</Text>
      <Text style={styles.feature}>📝 Online Assessment</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1020',
    justifyContent: 'center',
    padding: 25,
  },
  title: {
    color: '#5278FF',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontSize: 17,
    marginBottom: 25,
  },
  feature: {
    color: 'white',
    fontSize: 18,
    padding: 12,
    backgroundColor: '#171F33',
    marginBottom: 10,
    borderRadius: 10,
  },
});
