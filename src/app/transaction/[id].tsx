import { View, Text, Button } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

export default function Transaction() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>ID: {id}</Text>

      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  )
}
