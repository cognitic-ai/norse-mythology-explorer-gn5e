import { ScrollView, Text, View } from "react-native";
import { MythologyCard } from "@/components/mythology-card";
import * as AC from "@bacons/apple-colors";

const norseGods = [
  {
    id: "odin",
    name: "Odin",
    title: "All-Father",
    description: "The one-eyed king of the gods, ruler of Asgard, and seeker of wisdom. Known for sacrificing his eye for knowledge and hanging from Yggdrasil for nine days to learn the runes.",
    domain: "Wisdom, war, death, poetry"
  },
  {
    id: "thor",
    name: "Thor",
    title: "God of Thunder",
    description: "Son of Odin, wielder of the mighty hammer Mjolnir. Protector of Midgard and Asgard, known for his strength and battles against the giants.",
    domain: "Thunder, strength, protection"
  },
  {
    id: "frigg",
    name: "Frigg",
    title: "Queen of Asgard",
    description: "Odin's wife and queen of the gods. Goddess of marriage and motherhood, known for her wisdom and foresight. Mother of Baldr.",
    domain: "Marriage, motherhood, wisdom"
  },
  {
    id: "loki",
    name: "Loki",
    title: "Trickster God",
    description: "Shape-shifter and blood brother of Odin. Known for his cunning and mischief, both helping and hindering the gods. Father of many monsters including Fenrir and Jormungandr.",
    domain: "Mischief, fire, cunning"
  },
  {
    id: "baldr",
    name: "Baldr",
    title: "God of Light",
    description: "Son of Odin and Frigg, beloved by all. Known for his beauty, purity, and tragic death by mistletoe, which triggered the events leading to Ragnarök.",
    domain: "Light, purity, beauty"
  },
  {
    id: "freyja",
    name: "Freyja",
    title: "Goddess of Love",
    description: "Leader of the Vanir gods, goddess of love and fertility. Owns the necklace Brísingamen and receives half of the war dead in her hall Sessrúmnir.",
    domain: "Love, fertility, war, death"
  },
  {
    id: "freyr",
    name: "Freyr",
    title: "God of Fertility",
    description: "Brother of Freyja, god of fertility and prosperity. Rules over rain and sunshine, and is associated with kingship and peace.",
    domain: "Fertility, prosperity, kingship"
  },
  {
    id: "tyr",
    name: "Tyr",
    title: "God of War",
    description: "One-handed god of war and justice. Lost his hand to the wolf Fenrir when the gods bound the creature. Known for his courage and honor.",
    domain: "War, justice, courage"
  }
];

export default function GodsRoute() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{
        backgroundColor: AC.systemBackground,
      }}
    >
      <View style={{ padding: 16 }}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "700",
            color: AC.label,
            marginBottom: 8,
          }}
          selectable
        >
          Norse Gods
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: AC.secondaryLabel,
            marginBottom: 24,
            lineHeight: 22,
          }}
          selectable
        >
          The powerful deities of Norse mythology who ruled from Asgard and shaped the fate of all nine realms.
        </Text>
      </View>

      {norseGods.map((god) => (
        <MythologyCard
          key={god.id}
          title={`${god.name} - ${god.title}`}
          description={`${god.description}\n\nDomain: ${god.domain}`}
          href={`/gods/${god.id}`}
        />
      ))}
    </ScrollView>
  );
}
