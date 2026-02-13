import { ScrollView, Text, View } from "react-native";
import { MythologyCard } from "@/components/mythology-card";
import * as AC from "@bacons/apple-colors";

const nineRealms = [
  {
    id: "asgard",
    name: "Asgard",
    type: "Realm of the Æsir",
    description: "The heavenly realm where the Æsir gods dwell, connected to Midgard by the rainbow bridge Bifrost. Home to Valhalla, Odin's great hall, and many other divine halls. Surrounded by a great wall built by a giant, Asgard is the center of divine power and the seat of cosmic order."
  },
  {
    id: "midgard",
    name: "Midgard",
    type: "Realm of Humans",
    description: "The world of humans, encircled by the great World Serpent Jörmungandr. Created from the body of the primordial giant Ymir, Midgard is connected to Asgard by the rainbow bridge Bifrost. It represents the middle ground between the divine and chaotic realms."
  },
  {
    id: "jotunheim",
    name: "Jötunheim",
    type: "Realm of the Giants",
    description: "The wild, mountainous realm of the giants (jötnar), ancient enemies and occasional allies of the gods. A place of chaos and primal forces, where the old powers dwell. Many important events in Norse mythology take place here, often involving conflicts between gods and giants."
  },
  {
    id: "alfheim",
    name: "Alfheim",
    type: "Realm of the Light Elves",
    description: "The beautiful realm of the light elves (ljósálfar), beings of light and beauty. Ruled by the god Freyr, Alfheim is described as a place of eternal light and beauty. The light elves are considered more beautiful than the sun and are benevolent toward humans."
  },
  {
    id: "vanaheim",
    name: "Vanaheim",
    type: "Realm of the Vanir",
    description: "Home of the Vanir gods, the other family of Norse deities associated with fertility, wisdom, and prophecy. After the Æsir-Vanir War ended in peace, many Vanir came to live in Asgard, but Vanaheim remains their ancestral home. It represents the older, earth-based religious traditions."
  },
  {
    id: "nidavellir",
    name: "Nidavellir (Svartalfheim)",
    type: "Realm of the Dwarfs",
    description: "The underground realm of the dark elves and dwarfs, master craftsmen who forge magical items for the gods. Also called Svartalfheim, this realm is filled with mines, forges, and workshops where legendary weapons and treasures like Mjolnir and Odin's spear Gungnir were created."
  },
  {
    id: "helheim",
    name: "Helheim",
    type: "Realm of the Dead",
    description: "The realm of the dead, ruled by Hel, daughter of Loki. Those who die of sickness or old age come here, while those who die in battle may go to Valhalla or Folkvangr. A cold, misty realm beneath the roots of Yggdrasil, guarded by the hound Garmr at the bridge Gjallarbru."
  },
  {
    id: "muspelheim",
    name: "Muspelheim",
    type: "Realm of Fire",
    description: "The primordial realm of fire, ruled by the fire giant Surtr. One of the first realms to exist, along with Niflheim, from their interaction the cosmos was born. At Ragnarök, Surtr will lead the fire giants out of Muspelheim to destroy the world, bringing the final conflagration."
  },
  {
    id: "niflheim",
    name: "Niflheim",
    type: "Realm of Ice and Mist",
    description: "The primordial realm of ice, cold, and mist, one of the first realms to exist. Home to the spring Hvergelmir, from which all rivers flow. The interaction between the fire of Muspelheim and the ice of Niflheim created the conditions for life to begin, including the birth of the giant Ymir."
  }
];

export default function RealmsRoute() {
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
          The Nine Realms
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: AC.secondaryLabel,
            marginBottom: 16,
            lineHeight: 22,
          }}
          selectable
        >
          The nine worlds of Norse cosmology, all connected by and supported by the great World Tree, Yggdrasil.
        </Text>

        <View
          style={{
            backgroundColor: AC.secondarySystemBackground,
            borderRadius: 12,
            borderCurve: "continuous",
            padding: 16,
            marginBottom: 24,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              color: AC.label,
              marginBottom: 8,
            }}
            selectable
          >
            Yggdrasil - The World Tree
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: AC.secondaryLabel,
              lineHeight: 20,
            }}
            selectable
          >
            The great ash tree that connects all nine realms. Its roots extend into three wells: Urd's well (fate), Mimir's well (wisdom), and Hvergelmir (the source of all rivers). An eagle perches in its crown, the dragon Níðhöggr gnaws at its roots, and the squirrel Ratatoskr runs up and down its trunk carrying messages.
          </Text>
        </View>
      </View>

      {nineRealms.map((realm) => (
        <MythologyCard
          key={realm.id}
          title={`${realm.name} - ${realm.type}`}
          description={realm.description}
        />
      ))}
    </ScrollView>
  );
}