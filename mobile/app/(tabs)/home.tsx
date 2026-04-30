import { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";

import CreatePost from "~/components/post/CreatePost";
import PostCard from "~/components/post/PostCard";

type Post = {
  id: number;
  nome: string;
  user: string;
  texto: string;
  likes: number;
  comentarios: number;
};

export default function HomeScreen() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      nome: "Guilherme",
      user: "@gui",
      texto: "Primeiro piu no app mobile do Piupiwer!",
      likes: 12,
      comentarios: 3,
    },
    {
      id: 2,
      nome: "Poli Jr",
      user: "@polijr",
      texto: "Treinamento de React Native em andamento 🚀",
      likes: 25,
      comentarios: 8,
    },
    {
      id: 3,
      nome: "Maria",
      user: "@maria",
      texto: "Achei muito legal essa nova rede social!",
      likes: 7,
      comentarios: 1,
    },
  ]);

  const handleNewPost = (texto: string) => {
    const novoPost: Post = {
      id: Date.now(),
      nome: "Guilherme",
      user: "@gui",
      texto,
      likes: 0,
      comentarios: 0,
    };

    setPosts([novoPost, ...posts]);
  };

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#f6f8fb" }}
      contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
    >
      <View style={{ alignItems: "center", marginTop: 24, marginBottom: 24 }}>
        <Image
          source={require("~/assets/logo.png")}
          style={{ width: 76, height: 76, marginBottom: 10 }}
        />

        <Text style={{ fontSize: 34, fontWeight: "bold", color: "#2563eb" }}>
          Piupiwer
        </Text>

        <Text style={{ color: "#64748b", fontSize: 15, marginTop: 4 }}>
          Compartilhe seus pius com o mundo
        </Text>
      </View>

      <CreatePost onPost={handleNewPost} />

      <Text
        style={{
          fontSize: 23,
          fontWeight: "bold",
          color: "#0f172a",
          marginBottom: 14,
        }}
      >
        Feed
      </Text>

      {posts.map((item) => (
        <PostCard
          key={item.id}
          nome={item.nome}
          user={item.user}
          texto={item.texto}
          likes={item.likes}
          comentarios={item.comentarios}
        />
      ))}
    </ScrollView>
  );
}