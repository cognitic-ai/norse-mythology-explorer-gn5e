import { ScrollView, Text, View } from "react-native";
import { MythologyCard } from "@/components/mythology-card";
import * as AC from "@bacons/apple-colors";

const norseCreatures = [
  {
    id: "fenrir",
    name: "Fenrir",
    type: "Giant Wolf",
    description: "The monstrous wolf, son of Loki, who was bound by the gods with the chain Gleipnir. Prophesied to kill Odin at Ragnarök, Fenrir grows larger and more dangerous each day. Only the brave god Tyr was willing to place his hand in Fenrir's mouth when the gods bound him, losing his hand when the wolf realized the deception."
  },
  {
    id: "jormungandr",
    name: "Jörmungandr",
    type: "World Serpent",
    description: "The massive serpent that encircles Midgard, child of Loki and the giantess Angrboda. So large that it can grasp its own tail, when it releases its tail and emerges from the ocean, Ragnarök will begin. Thor is destined to kill Jörmungandr but will die from its poison shortly after."
  },
  {
    id: "sleipnir",
    name: "Sleipnir",
    type: "Eight-Legged Horse",
    description: "Odin's magnificent eight-legged horse, the fastest steed in all the nine realms. Born when Loki shapeshifted into a mare, Sleipnir can gallop through the air and over water, and has the ability to travel between worlds. He carries Odin on his journeys across the cosmos."
  },
  {
    id: "huginn-muninn",
    name: "Huginn and Muninn",
    type: "Ravens",
    description: "Odin's two ravens whose names mean 'thought' and 'memory.' Each day they fly across all nine worlds gathering information and return to whisper news in Odin's ears. They represent the All-Father's vast network of knowledge and his ability to see all that transpires."
  },
  {
    id: "ratatoskr",
    name: "Ratatoskr",
    type: "Squirrel",
    description: "The gossiping squirrel that runs up and down Yggdrasil, the World Tree. Ratatoskr carries messages between the eagle at the top of the tree and the dragon Níðhöggr at its roots, often stirring up conflict by embellishing or distorting the messages he carries."
  },
  {
    id: "nidhogg",
    name: "Níðhöggr",
    type: "Dragon",
    description: "The malevolent dragon that gnaws at the roots of Yggdrasil from below. Níðhöggr feeds on corpses in the realm of the dead and constantly works to damage the World Tree. He represents destruction and chaos, opposing the cosmic order that Yggdrasil represents."
  },
  {
    id: "geri-freki",
    name: "Geri and Freki",
    type: "Wolves",
    description: "Odin's two wolves whose names mean 'ravenous' and 'greedy.' They accompany the All-Father and are fed from his table, as Odin himself needs no food, sustaining himself only on wine. They represent the warrior aspect of Odin's nature."
  },
  {
    id: "gullinbursti",
    name: "Gullinbursti",
    type: "Golden Boar",
    description: "Freyr's magnificent golden boar, created by the dwarfs. Gullinbursti can run through air and water faster than any horse, and its bristles glow with light that can illuminate the darkest places. It symbolizes fertility, abundance, and the life-giving power of the sun."
  },
  {
    id: "tanngrisnir-tanngnjostr",
    name: "Tanngrisnir and Tanngnjóstr",
    type: "Goats",
    description: "Thor's two goats that pull his chariot across the sky, their names meaning 'teeth-barer' and 'teeth-grinder.' The sound of their hoofbeats creates thunder. Thor can slaughter and eat them, then resurrect them the next day by blessing their bones with his hammer Mjolnir."
  },
  {
    id: "hel",
    name: "Hel",
    type: "Goddess of Death",
    description: "Daughter of Loki, ruler of the realm of the dead that bears her name. Half of her body is that of a living woman, while the other half is decayed or skeletal. She receives those who die of sickness or old age, and has the power to release or keep the dead."
  }
];

export default function CreaturesRoute() {
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
          Norse Creatures
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
          The fantastic beasts, mythical animals, and supernatural beings that inhabit the nine realms of Norse cosmology.
        </Text>
      </View>

      {norseCreatures.map((creature) => (
        <MythologyCard
          key={creature.id}
          title={`${creature.name} - ${creature.type}`}
          description={creature.description}
        />
      ))}
    </ScrollView>
  );
}