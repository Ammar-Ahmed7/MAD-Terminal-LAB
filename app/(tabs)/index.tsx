import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function TabOneScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* For Buyers */}
      <Link href={{pathname:"/BuyerRegistration"}} asChild>
        <TouchableOpacity style={{ backgroundColor: "green", padding: 10, marginBottom: 10 }}>
          <Text style={{ color: "white", fontSize: 16 }}>For Buyers</Text>
        </TouchableOpacity>
      </Link>

      {/* For Sellers */}
      <TouchableOpacity style={{ backgroundColor: "red", padding: 10 }}>
        <Text style={{ color: "white", fontSize: 16 }}>For Sellers</Text>
      </TouchableOpacity>
    </View>
  );
}
