import React, { useState, useEffect } from "./node_modules/react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { useNavigation } from "./node_modules/@react-navigation/native";
import { Feather } from "./node_modules/@expo/vector-icons";
import api from "../../services/api";
import styles from "./styles";
import logoImg from "../../assets/logo.png";

export default function Map() {
  const navigation = useNavigation();
  const [makers, setMakers] = useState([]);
  const [currentRegion, setCurrentRegion] = useState(null);
  const [filters, setFilters] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    async function loadMyInitialPosition() {
      const { granted } = await requestPermissionsAsync();
      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        });
      }
    }
    loadMyInitialPosition();
    loadMakers();
  }, []);

  function setModalFilters() {
    // 
    loadMakers()
  }

  async function loadMakers() {
    const response = await api.get("/search", {
      params: { currentRegion, filters },
    });
    setMakers(response);
  }

  function openMaker(maker) {
    navigation.navigate("Maker", maker.id);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerTitle}>Bem-vindo!</Text>
      </View>

      <TouchableOpacity
        style={styles.modalButton}
        onPress={() => setModalVisible(true)}
      >
        <Feather name="arrow-left" size={28} color="#E02041" />
      </TouchableOpacity>

      <Modal isVisible={modalVisible} style={styles.modal}>
        <Text>I am the modal content!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(false)}
        >
          <Feather name="arrow-left" size={28} color="#E02041" />
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </Modal>

      <View style={styles.body}>
        <MapView
          onRegionChangeComplete={handleRegionChanged}
          initialRegion={currentRegion}
          style={styles.bodyMap}
        >
          {makers.map((maker) => (
            <Marker
              key={maker._id}
              coordinate={{
                longitude: maker.location.coordinates[0],
                latitude: maker.location.coordinates[1],
              }}
            >
              <Image
                style={styles.bodyAvatar}
                source={{ uri: maker.avatar_url }}
              />
              <Callout onPress={() => openMaker(maker)}>
                <View style={styles.bodyCallout}>
                  <Text style={styles.bodyMakerName}>{maker.name}</Text>
                  <Text style={styles.bodyMakerBio}>{maker.bio}</Text>
                  <Text style={styles.bodyMakerPrice}>{maker.price}</Text>
                </View>
              </Callout>
            </Marker>
          ))}
        </MapView>
      </View>
    </View>
  );
}
