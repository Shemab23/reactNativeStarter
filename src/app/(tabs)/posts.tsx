import { Star } from "lucide-react-native";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Screen } from "../../components/ui/Screen";
import { useApp } from "../../context/AppContext";
import { usePosts } from "../../features/posts/usePosts";

export default function PostsScreen() {
  const {
    data,
    isLoading,
    error,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = usePosts();
  const { favorites, toggleFavorite } = useApp();

  return (
    <Screen name="Posts">
      {isLoading && <ActivityIndicator color="#38bdf8" />}

      {error && (
        <TouchableOpacity onPress={() => refetch()}>
          <Text className="text-red-400">{error.message}. Tap to retry.</Text>
        </TouchableOpacity>
      )}

      <FlatList
        data={data?.items}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{ gap: 12, paddingBottom: 24 }}
        onEndReached={() =>
          hasNextPage && !isFetchingNextPage && fetchNextPage()
        }
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isFetchingNextPage ? <ActivityIndicator color="#38bdf8" /> : null
        }
        renderItem={({ item }) => {
          const isFav = favorites.includes(item.id);
          return (
            <View className="bg-slate-800 rounded-2xl p-4 flex-row gap-3">
              <View className="flex-1">
                <Text className="text-white font-semibold">{item.title}</Text>
                <Text className="text-slate-400 text-xs mt-1">
                  {item.excerpt}
                </Text>
              </View>
              <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
                <Star
                  size={22}
                  color="#f59e0b"
                  fill={isFav ? "#f59e0b" : "transparent"}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </Screen>
  );
}
