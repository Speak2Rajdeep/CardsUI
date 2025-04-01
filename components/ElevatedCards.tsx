import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView style={styles.container} horizontal={true}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>This</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>views</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>are</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>scrollable</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>horizontally</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 10,
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
