import { ScrollView, Text, View } from "react-native";
import { MythologyCard } from "@/components/mythology-card";
import * as AC from "@bacons/apple-colors";

const norseStories = [
  {
    id: "creation",
    title: "The Creation of the World",
    type: "Creation Myth",
    description: "In the beginning, there was only the void called Ginnungagap, bordered by the fire realm Muspelheim and the ice realm Niflheim. When fire and ice met, they created the primordial giant Ymir and the cosmic cow Audhumla. From Ymir's body, the gods Odin, Vili, and Vé created the world, using his flesh for earth, his blood for seas, his bones for mountains, and his skull for the sky."
  },
  {
    id: "baldrs-death",
    title: "The Death of Baldr",
    type: "Tragedy",
    description: "Beloved Baldr began having dreams of his own death, prompting his mother Frigg to secure oaths from all things not to harm him. She overlooked mistletoe, which Loki used to craft a dart. During a game where gods threw things at the now-invulnerable Baldr, Loki guided the blind god Höðr to throw the mistletoe dart, killing Baldr instantly. This event marked the beginning of the end times."
  },
  {
    id: "binding-fenrir",
    title: "The Binding of Fenrir",
    type: "Heroic Tale",
    description: "As Fenrir the wolf grew larger and more dangerous, the gods decided he must be bound. They commissioned the dwarfs to create Gleipnir, a chain that appeared as thin as silk but was stronger than any metal. Fenrir agreed to be bound only if one god placed their hand in his mouth as surety. Only Tyr was brave enough, and when Fenrir couldn't break free, he bit off Tyr's hand in rage."
  },
  {
    id: "thors-fishing",
    title: "Thor's Fishing Trip",
    type: "Adventure",
    description: "Thor went fishing with the giant Hymir, using the head of the giant's largest ox as bait. He hooked Jörmungandr, the World Serpent, and began pulling the massive creature from the ocean depths. The serpent thrashed so violently that it shook the earth, and Hymir, terrified by what he saw, cut the fishing line before Thor could land his catch."
  },
  {
    id: "lokis-children",
    title: "Loki's Monstrous Children",
    type: "Prophecy Tale",
    description: "Loki bore three children with the giantess Angrboda: Fenrir the wolf, Jörmungandr the serpent, and Hel half-dead goddess. Prophecies foretold these children would bring great harm to the gods. Odin threw Jörmungandr into the sea where it grew to encircle the world, cast Hel into the realm of the dead to rule there, and attempted to bind Fenrir in Asgard."
  },
  {
    id: "ragnarok",
    title: "Ragnarök - The Twilight of the Gods",
    type: "Apocalyptic Myth",
    description: "The end of the world begins with three years of war among men, followed by the Fimbulwinter - three years of unending cold. The bonds holding Loki and Fenrir break, the dead rise from Hel, and the final battle begins. Gods and giants clash on the plain Vigrid. Odin falls to Fenrir, Thor kills but dies from Jörmungandr's poison, and Surtr's fire consumes the world. From the ashes, a new world emerges."
  },
  {
    id: "theft-mjolnir",
    title: "The Theft of Mjolnir",
    type: "Comedy",
    description: "When Thor's hammer Mjolnir was stolen by the giant Thrym, who demanded Freyja as his bride in return, the gods devised a plan. Thor disguised himself as Freyja, complete with bridal veil and dress, while Loki accompanied him as a bridesmaid. At the wedding feast, when Mjolnir was brought out to consecrate the marriage, Thor seized it and slaughtered all the giants present."
  },
  {
    id: "mead-poetry",
    title: "The Mead of Poetry",
    type: "Quest Tale",
    description: "The precious mead that granted the gift of poetry was guarded by the giant Suttungr in a mountain. Odin transformed into a serpent, bored through the mountain, and seduced Suttungr's daughter Gunnlöð to gain access to the mead. After drinking it all, he transformed into an eagle and flew back to Asgard, spitting the mead into waiting vessels. Some drops fell to Midgard, giving humans lesser poetic ability."
  },
  {
    id: "freyr-gerdr",
    title: "Freyr and Gerðr",
    type: "Love Story",
    description: "Freyr fell deeply in love with the beautiful giantess Gerðr after seeing her from afar. To win her hand, he sent his servant Skírnir to woo her, but had to give up his magical sword as payment. Gerðr eventually agreed to meet Freyr, and they were married. However, Freyr's loss of his sword would prove fatal at Ragnarök when he faced the fire giant Surtr defenseless."
  },
  {
    id: "building-asgards-wall",
    title: "The Building of Asgard's Wall",
    type: "Trickster Tale",
    description: "A giant builder offered to construct a wall around Asgard in exchange for the sun, moon, and Freyja as his wife. The gods agreed, thinking it impossible to complete in the allotted time. When the giant's horse Svadilfari proved incredibly fast and the wall neared completion, Loki transformed into a mare to distract the horse. The giant failed to finish on time, Thor killed him, and Loki later bore Sleipnir, Odin's eight-legged horse."
  }
];

export default function StoriesRoute() {
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
          Norse Stories
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
          The great tales and legends from Norse mythology, filled with gods, giants, heroes, and the eternal struggle between order and chaos.
        </Text>
      </View>

      {norseStories.map((story) => (
        <MythologyCard
          key={story.id}
          title={`${story.title} - ${story.type}`}
          description={story.description}
        />
      ))}
    </ScrollView>
  );
}