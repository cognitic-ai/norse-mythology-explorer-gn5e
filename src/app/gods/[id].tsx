import { ScrollView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import * as AC from "@bacons/apple-colors";

const godDetails = {
  odin: {
    name: "Odin",
    title: "All-Father",
    fullDescription: "Odin, the All-Father, is the ruler of the Æsir gods and the king of Asgard. He is a complex deity associated with wisdom, war, death, poetry, and magic. Odin is often depicted as an elderly man with a long beard, wearing a wide-brimmed hat and a cloak, accompanied by his two ravens, Huginn and Muninn, and his eight-legged horse, Sleipnir.\n\nOdin sacrificed his right eye to the giant Mímir in exchange for wisdom and knowledge. He also hung himself from the world tree Yggdrasil for nine days and nights, pierced by his own spear, to gain knowledge of the runes. This act of self-sacrifice demonstrates his relentless pursuit of wisdom.\n\nAs a war god, Odin welcomes half of those who die in battle to his hall, Valhalla, where they become Einherjar and prepare for Ragnarök. He is known for his cunning and is sometimes portrayed as untrustworthy, breaking oaths when it serves his greater purpose of preparing for the end of the world.",
    symbols: ["Ravens (Huginn and Muninn)", "Eight-legged horse (Sleipnir)", "Spear (Gungnir)", "Wide-brimmed hat", "Two wolves (Geri and Freki)"],
    family: "Father: Borr, Mother: Bestla, Wife: Frigg, Sons: Thor, Baldr, Váli, Víðarr, and others",
    domain: "Wisdom, war, death, poetry, magic, runes"
  },
  thor: {
    name: "Thor",
    title: "God of Thunder",
    fullDescription: "Thor, son of Odin, is one of the most prominent gods in Norse mythology. He is the god of thunder, lightning, storms, sacred groves, and strength. Thor is the protector of both gods and humans, defending them against the giants (jötnar) who threaten the cosmic order.\n\nThor wields the mighty hammer Mjolnir, which never misses its target and always returns to his hand after being thrown. He rides across the sky in a chariot pulled by two goats, Tanngrisnir and Tanngnjóstr, whose hoofbeats create thunder. When Thor strikes his hammer, lightning flashes across the sky.\n\nUnlike his father Odin, Thor is straightforward and honest, preferring direct action to cunning. He is immensely strong and has a fierce temper, but he is also loyal and protective of those under his care. Thor is destined to die at Ragnarök, killed by the poison of the world serpent Jormungandr after slaying the beast.",
    symbols: ["Hammer (Mjolnir)", "Belt of strength (Megingjörð)", "Iron gloves (Járngreipr)", "Goats (Tanngrisnir and Tanngnjóstr)"],
    family: "Father: Odin, Mother: Jörð (Earth), Wife: Sif, Sons: Móði and Magni",
    domain: "Thunder, lightning, storms, strength, protection"
  },
  frigg: {
    name: "Frigg",
    title: "Queen of Asgard",
    fullDescription: "Frigg is the wife of Odin and the queen of the Æsir. She is the goddess of marriage, motherhood, and the household. Frigg is known for her wisdom, foresight, and protective nature, particularly towards her children and family.\n\nFrigg has the ability to see the future, though she rarely speaks of what she knows. This gift of prophecy makes her one of the wisest of the gods. She is most famous for her attempts to protect her beloved son Baldr from death, securing oaths from all things in creation not to harm him - except for the mistletoe, which seemed too insignificant to pose a threat.\n\nFrigg dwells in her hall Fensalir and is often depicted spinning clouds or sitting at her spinning wheel. She is a devoted mother and wife, representing the idealized Norse woman who manages the household and protects her family. After Baldr's death, Frigg's grief is profound, and she plays a crucial role in the events that follow.",
    symbols: ["Spinning wheel", "Keys (household authority)", "Falcon feather cloak"],
    family: "Husband: Odin, Sons: Baldr and Höðr, Stepsons: Thor, Váli, Víðarr",
    domain: "Marriage, motherhood, wisdom, foresight, household"
  },
  loki: {
    name: "Loki",
    title: "Trickster God",
    fullDescription: "Loki is one of the most complex figures in Norse mythology. Though often called a god, he is actually a giant (jötunn) who became the blood brother of Odin. Loki is a shape-shifter and trickster, capable of changing his form and gender at will. He is known for his cunning, wit, and ability to both help and harm the gods.\n\nLoki's relationship with the gods is complicated. He often causes problems through his mischievous behavior, but just as frequently helps resolve the situations he creates. However, his actions become increasingly malevolent over time, culminating in his role in the death of Baldr, which marks his final break with the gods.\n\nAs punishment for Baldr's death, Loki is bound in a cave with the venom of a serpent dripping onto his face, causing him great agony. His wife Sigyn catches the poison in a bowl, but when she must empty it, the venom burns Loki, and his thrashing causes earthquakes. At Ragnarök, Loki will break free and lead the forces of chaos against the gods.",
    symbols: ["Fire", "Serpent", "Fishing net", "Falcon feather cloak"],
    family: "Father: Fárbauti, Mother: Laufey, Blood brother: Odin, Wife: Sigyn, Children: Fenrir, Jormungandr, Hel, Sleipnir",
    domain: "Mischief, cunning, fire, shape-shifting, chaos"
  },
  baldr: {
    name: "Baldr",
    title: "God of Light",
    fullDescription: "Baldr, son of Odin and Frigg, is the god of light, purity, beauty, innocence, and reconciliation. He is described as the most beloved of all the gods, known for his fairness, wisdom, and beauty. His hall is called Breidablik, and nothing unclean can enter it.\n\nBaldr's story is one of the most tragic in Norse mythology. When he began having prophetic dreams of his own death, his mother Frigg traveled throughout the cosmos securing oaths from all things not to harm her son. However, she overlooked the mistletoe, considering it too young and harmless to be dangerous.\n\nLoki, discovering this oversight, fashioned a dart from mistletoe and gave it to the blind god Höðr during a game where the gods were throwing things at the now-invulnerable Baldr. The mistletoe dart killed Baldr instantly. His death is seen as the beginning of the end, the first in a chain of events that will lead to Ragnarök. Despite attempts to bring him back from Hel's realm, Baldr remains dead until after Ragnarök, when he will return to the new world.",
    symbols: ["Light", "White flower", "Pure gold", "Sailing ship Hringhorni"],
    family: "Father: Odin, Mother: Frigg, Wife: Nanna, Son: Forseti, Brother: Höðr",
    domain: "Light, purity, beauty, innocence, reconciliation"
  },
  freyja: {
    name: "Freyja",
    title: "Goddess of Love",
    fullDescription: "Freyja is one of the most prominent goddesses in Norse mythology and the leader of the Vanir gods who came to live among the Æsir after the Æsir-Vanir War. She is the goddess of love, beauty, fertility, war, and death. Freyja is known for her fierce independence and powerful magic.\n\nFreyja owns the precious necklace Brísingamen, which she obtained from four dwarfs in exchange for spending a night with each of them. She has a falcon-feather cloak that allows her to fly and travels in a chariot pulled by two cats. Her hall, Sessrúmnir, receives half of those who die in battle, with the other half going to Odin's Valhalla.\n\nFreyja is also associated with seiðr, a form of Norse magic involving prophecy and the manipulation of fate. She taught this magic to Odin, making her one of the most powerful practitioners of the mystical arts. She weeps tears of gold when her husband Óðr goes missing, and her search for him takes her across many lands.",
    symbols: ["Necklace (Brísingamen)", "Falcon-feather cloak", "Cats", "Boar (Hildisvíni)", "Tears of gold"],
    family: "Father: Njörðr, Brother: Freyr, Husband: Óðr, Daughters: Hnoss and Gersemi",
    domain: "Love, beauty, fertility, war, death, seiðr magic"
  },
  freyr: {
    name: "Freyr",
    title: "God of Fertility",
    fullDescription: "Freyr is a god of fertility, prosperity, and peace, as well as being associated with kingship, virility, and fair weather. He is one of the Vanir gods who came to live among the Æsir. Freyr is the brother of Freyja and son of Njörðr, and he rules over rain and sunshine, making him essential for good harvests.\n\nFreyr owns several magical items, including the golden boar Gullinbursti, which can run through air and water faster than any horse, and the ship Skíðblaðnir, which is large enough to hold all the gods but can be folded up and carried in a pocket. He also once owned a magical sword that could fight by itself, but he gave it away to win the love of the giantess Gerðr.\n\nThis sacrifice of his sword proves costly, as Freyr is prophesied to die at Ragnarök because he will face the fire giant Surtr without his magical weapon. Despite this fate, Freyr represents the life-giving aspects of nature and the prosperity that comes from fertility and abundance.",
    symbols: ["Golden boar (Gullinbursti)", "Ship (Skíðblaðnir)", "Sword (given away)", "Stag"],
    family: "Father: Njörðr, Sister: Freyja, Wife: Gerðr",
    domain: "Fertility, prosperity, kingship, peace, rain, sunshine"
  },
  tyr: {
    name: "Tyr",
    title: "God of War",
    fullDescription: "Tyr is the god of war, justice, honor, and oaths. He is one of the oldest gods in the Norse pantheon and is known for his courage and sense of justice. Tyr is unique among the gods for his willingness to sacrifice himself for the greater good, demonstrating the highest ideals of honor and duty.\n\nTyr's most famous act was his sacrifice of his right hand to bind the monstrous wolf Fenrir. When the gods decided to bind Fenrir, the wolf would only allow it if one of the gods placed their hand in his mouth as a pledge of good faith. Only Tyr was brave enough to do so, knowing that when Fenrir realized he had been tricked and could not break free, the wolf would bite off his hand.\n\nDespite losing his sword hand, Tyr continues to be a formidable warrior and a symbol of justice. He is associated with the Thing (assembly) and legal proceedings, representing the law and order that hold society together. At Ragnarök, Tyr will fight the great hound Garmr, and both will perish in their battle.",
    symbols: ["Sword", "Scales of justice", "Missing right hand", "Spear"],
    family: "Father: Odin (in some sources) or Hymir (in others)",
    domain: "War, justice, honor, oaths, courage, law"
  }
};

export default function GodDetailRoute() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const god = godDetails[id as keyof typeof godDetails];

  if (!god) {
    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ backgroundColor: AC.systemBackground }}
      >
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 18, color: AC.label }}>God not found</Text>
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{ backgroundColor: AC.systemBackground }}
    >
      <View style={{ padding: 16 }}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: "700",
            color: AC.label,
            marginBottom: 4,
          }}
          selectable
        >
          {god.name}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "500",
            color: AC.systemBlue,
            marginBottom: 24,
          }}
          selectable
        >
          {god.title}
        </Text>

        <View
          style={{
            backgroundColor: AC.secondarySystemBackground,
            borderRadius: 12,
            borderCurve: "continuous",
            padding: 16,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: AC.label,
              lineHeight: 24,
            }}
            selectable
          >
            {god.fullDescription}
          </Text>
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: AC.label,
              marginBottom: 12,
            }}
            selectable
          >
            Domain
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: AC.secondaryLabel,
              lineHeight: 22,
            }}
            selectable
          >
            {god.domain}
          </Text>
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: AC.label,
              marginBottom: 12,
            }}
            selectable
          >
            Symbols & Attributes
          </Text>
          {god.symbols.map((symbol, index) => (
            <Text
              key={index}
              style={{
                fontSize: 16,
                color: AC.secondaryLabel,
                lineHeight: 22,
                marginBottom: 4,
              }}
              selectable
            >
              • {symbol}
            </Text>
          ))}
        </View>

        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: AC.label,
              marginBottom: 12,
            }}
            selectable
          >
            Family
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: AC.secondaryLabel,
              lineHeight: 22,
            }}
            selectable
          >
            {god.family}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}