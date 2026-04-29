import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>Expo Router</Text>

      <Button title="Nova meta" onPress={() => router.navigate('/target')} />

      <Button title="Transação" onPress={() => router.navigate('/transaction/123')} />

      <Button title="Em Desenvolvimento" onPress={() => router.navigate('/in-progress/123')} />
    </View>
  )
}