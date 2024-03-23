import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

const RowView = ({ label, value }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 5,
        marginBottom: 8,
      }}
    >
      <View>
        <Text
          style={{
            fontFamily: "Inter-Regular",
            color: "#303030",
            fontSize: 11,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          {label}
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontFamily: "Inter-Bold",
            color: "#303030",
            fontSize: 18,
            letterSpacing: 2,
          }}
        >
          {value}
        </Text>
      </View>
    </View>
  );
};

export default function App() {
  let [fontsLoaded] = useFonts({
    "Inter-Regular": Inter_400Regular,
    "Inter-Bold": Inter_700Bold,
  });

  const [showMore, setShowMore] = useState(false);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("./assets/light-bg.png")}
        style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            paddingHorizontal: 26,
            paddingTop: 50,
          }}
        >
          {/* Upper Portion */}
          {!showMore && (
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontFamily: "Inter-Regular",
                    fontSize: 14,
                    color: "white",
                    lineHeight: 22,
                  }}
                >
                  "The science of operations, as derived from mathematics more
                  especially, is a science of itself, and has its own abstract
                  truth and value."
                </Text>
                <Text
                  style={{
                    fontFamily: "Inter-Bold",
                    fontSize: 15,
                    color: "white",
                    marginTop: 8,
                  }}
                >
                  -Ada Lovelace
                </Text>
              </View>
              <Image
                source={require("./assets/refresh.png")}
                style={{ width: 25, height: 25 }}
              />
            </View>
          )}

          {/* Bottom Portion */}
          <View style={{ marginBottom: 36 }}>
            {/* Greeting Text */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={require("./assets/sun.png")}
                style={{ width: 25, height: 25 }}
              />
              <Text
                style={{
                  fontFamily: "Inter-Regular",
                  color: "white",
                  fontSize: 16,
                  marginLeft: 8,
                  letterSpacing: 3,
                }}
              >
                GOOD MORNING
              </Text>
            </View>

            <View style={{ marginTop: 8 }}>
              {/* Time */}
              <Text>
                <Text
                  style={{
                    fontFamily: "Inter-Bold",
                    fontSize: 100,
                    color: "white",
                  }}
                >
                  11.30
                </Text>
                <Text
                  style={{
                    fontFamily: "Inter-Regular",
                    fontSize: 16,
                    color: "white",
                  }}
                >
                  BST
                </Text>
              </Text>
            </View>

            {/* Location */}
            <View style={{ marginTop: 10 }}>
              <Text
                style={{
                  fontFamily: "Inter-Bold",
                  color: "white",
                  letterSpacing: 3,
                }}
              >
                IN LONDON, UK
              </Text>
            </View>

            {/* Button */}

            <TouchableOpacity
              onPress={() => {
                setShowMore(!showMore);
              }}
              style={{
                flexDirection: "row",
                height: 40,
                width: 115,
                backgroundColor: "#fff",
                borderRadius: 30,
                marginTop: 50,
                justifyContent: "space-between",
                paddingLeft: 16,
                paddingRight: 4,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Inter-Bold",
                  fontSize: 13,
                  color: "#000",
                  letterSpacing: 2,
                }}
              >
                {showMore ? "Less" : "More"}
              </Text>

              <View
                style={{
                  padding: 5,
                }}
              >
                <Image
                  source={
                    showMore
                      ? require("./assets/arrow-up.png")
                      : require("./assets/arrow-down.png")
                  }
                  style={{
                    height: 25,
                    width: 25,
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Expanded View */}

        {showMore && (
          <View
            style={{
              backgroundColor: "#fff",
              opacity: 0.8,
              paddingVertical: 48,
              paddingHorizontal: 20,
            }}
          >
            <RowView label={"Current Timezone"} value={"Europe/London"} />
            <RowView label={"Day of the year"} value={"295"} />
            <RowView label={"Day of the week"} value={"5"} />
            <RowView label={"Week Number"} value={"42"} />
          </View>
        )}
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
