import { Link, router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/colors';
import { Guest } from '../../migrations/00000-createTableGuests';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.text,
    fontSize: 20,
  },
  button: {
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    width: '100%',
    textAlign: 'center',
    backgroundColor: colors.cardBackground,
    fontSize: 24,
  },
});

export default function Guests() {
  const { guestId } = useLocalSearchParams();

  const [guest, setGuest] = useState<Guest>();

  const imageContext = require.context('../../assets', false, /\.(avif)$/);

  useEffect(() => {
    async function loadGuest() {
      try {
        if (typeof guestId !== 'string') {
          return;
        }
        const response = await fetch(`/api/${guestId}`);
        const fetchedGuest = await response.json();
        setGuest(fetchedGuest.guest);
      } catch (error) {
        console.error('Error fetching guest', error);
      }
    }
    loadGuest().catch(console.error);
  }, [guestId]);

  if (!guest) {
    return null;
  }

  if (typeof guestId !== 'string') {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {guest.firstName} {guest.lastName}
      </Text>
      <Text style={styles.text}>
        {guest.attending ? 'Attending' : 'Not attending'}
      </Text>
      <Pressable
        style={({ pressed }) => [
          {
            width: '100%',
            opacity: pressed ? 0.5 : 1,
          },
        ]}
        onPress={async () => {
          await fetch(`/api/${guestId}`, {
            method: 'DELETE',
          });
          router.push('/');
        }}
      >
        <Text style={styles.button}>Delete Guest</Text>
      </Pressable>

      <Link style={styles.button} href="/">
        Back
      </Link>
    </View>
  );
}
