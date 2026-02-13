import { Image } from "expo-image";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import * as AC from "@bacons/apple-colors";

interface MythologyCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  href?: string;
}

export function MythologyCard({ title, description, imageUrl, href }: MythologyCardProps) {
  const cardContent = (
    <View
      style={{
        backgroundColor: AC.secondarySystemBackground,
        borderRadius: 12,
        borderCurve: "continuous",
        padding: 16,
        margin: 8,
        shadowColor: AC.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      }}
    >
      {imageUrl && (
        <Image
          source={{ uri: imageUrl }}
          style={{
            width: "100%",
            height: 120,
            borderRadius: 8,
            borderCurve: "continuous",
            marginBottom: 12,
          }}
        />
      )}
      <Text
        style={{
          fontSize: 18,
          fontWeight: "600",
          color: AC.label,
          marginBottom: 8,
        }}
        selectable
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: AC.secondaryLabel,
          lineHeight: 20,
        }}
        selectable
      >
        {description}
      </Text>
    </View>
  );

  if (href) {
    return (
      <Link href={href} asChild>
        <Pressable>{cardContent}</Pressable>
      </Link>
    );
  }

  return cardContent;
}