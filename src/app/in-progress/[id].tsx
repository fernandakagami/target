import { View, Text, Button } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

export default function InProgress() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ID: {id}</Text>
      <Text>Em desenvolvimento...</Text>

      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  )
}