import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';

export default function Index() {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: '#f6f8fb',
        paddingHorizontal: 24,
        paddingVertical: 32,
      }}
      keyboardShouldPersistTaps="handled"
    >
      <View style={{ alignItems: 'center', marginBottom: 48 }}>
        <Text
          style={{
            fontSize: 42,
            fontWeight: 'bold',
            color: '#0f172a',
            marginBottom: 16,
          }}
        >
          Piupiwer
        </Text>

        <Text
          style={{
            fontSize: 18,
            color: '#64748b',
            textAlign: 'center',
            lineHeight: 28,
          }}
        >
          Conecte-se, compartilhe e descubra novas amizades
        </Text>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => router.push('/(auth)/login')}
          style={{
            backgroundColor: '#2563eb',
            padding: 18,
            borderRadius: 16,
            marginBottom: 12,
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: 'bold',
            }}
          >
            Entrar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push('/(auth)/cadastro')}
          style={{
            backgroundColor: '#10b981',
            padding: 18,
            borderRadius: 16,
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: 'bold',
            }}
          >
            Criar Conta
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
