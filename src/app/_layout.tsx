import { ThemeProvider } from "@/components/theme-provider";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs as WebTabs } from "expo-router/tabs";
import { NativeTabs } from "expo-router/unstable-native-tabs";
import { Platform, useWindowDimensions } from "react-native";

export default function Layout() {
  return (
    <ThemeProvider>
      <TabsLayout />
    </ThemeProvider>
  );
}

function TabsLayout() {
  if (process.env.EXPO_OS === "web") {
    return <WebTabsLayout />;
  } else {
    return <NativeTabsLayout />;
  }
}

function WebTabsLayout() {
  const { width } = useWindowDimensions();
  const isMd = width >= 768;
  const isLg = width >= 1024;

  return (
    <WebTabs
      screenOptions={{
        headerShown: false,
        ...(isMd
          ? {
              tabBarPosition: "left",
              tabBarVariant: "material",
              tabBarLabelPosition: isLg ? undefined : "below-icon",
            }
          : {
              tabBarPosition: "bottom",
            }),
      }}
    >
      <WebTabs.Screen
        name="index"
        options={{
          title: "Gods",
          tabBarIcon: (props) => <MaterialIcons {...props} name="flash-on" />,
        }}
      />
      <WebTabs.Screen
        name="creatures"
        options={{
          title: "Creatures",
          tabBarIcon: (props) => <MaterialIcons {...props} name="pets" />,
        }}
      />
      <WebTabs.Screen
        name="realms"
        options={{
          title: "Realms",
          tabBarIcon: (props) => <MaterialIcons {...props} name="public" />,
        }}
      />
      <WebTabs.Screen
        name="stories"
        options={{
          title: "Stories",
          tabBarIcon: (props) => <MaterialIcons {...props} name="menu-book" />,
        }}
      />
    </WebTabs>
  );
}

function NativeTabsLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Gods</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          {...Platform.select({
            ios: { sf: { default: "bolt", selected: "bolt.fill" } },
            default: {
              src: <NativeTabs.Trigger.VectorIcon family={MaterialIcons} name="flash-on" />,
            },
          })}
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="creatures">
        <NativeTabs.Trigger.Label>Creatures</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          {...Platform.select({
            ios: { sf: { default: "pawprint", selected: "pawprint.fill" } },
            default: {
              src: <NativeTabs.Trigger.VectorIcon family={MaterialIcons} name="pets" />,
            },
          })}
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="realms">
        <NativeTabs.Trigger.Label>Realms</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          {...Platform.select({
            ios: { sf: { default: "globe", selected: "globe.americas.fill" } },
            default: {
              src: <NativeTabs.Trigger.VectorIcon family={MaterialIcons} name="public" />,
            },
          })}
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="stories">
        <NativeTabs.Trigger.Label>Stories</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          {...Platform.select({
            ios: { sf: { default: "book", selected: "book.fill" } },
            default: {
              src: <NativeTabs.Trigger.VectorIcon family={MaterialIcons} name="menu-book" />,
            },
          })}
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
