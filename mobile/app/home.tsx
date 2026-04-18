import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { useAuth } from '~/contexts/AuthContext';

export default function HomeScreen() {
  const { signOut, user } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    router.replace('/');
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f6f8fb',
        padding: 24,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
          color: '#0f172a',
          marginBottom: 12,
        }}
      >
        Bem-vindo!
      </Text>

      <Text
        style={{
          fontSize: 16,
          color: '#64748b',
          marginBottom: 8,
          textAlign: 'center',
        }}
      >
        {user?.name || 'Usuário'}
      </Text>

      <Text
        style={{
          fontSize: 14,
          color: '#94a3b8',
          marginBottom: 32,
          textAlign: 'center',
        }}
      >
        Você está logado e pronto para usar o Piupiwer
      </Text>

      <TouchableOpacity
        onPress={handleSignOut}
        style={{
          backgroundColor: '#ef4444',
          padding: 16,
          borderRadius: 16,
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
          }}
        >
          Fazer Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
}
