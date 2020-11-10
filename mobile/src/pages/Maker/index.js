import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Linking, FlatList, Button } from "react-native";
//import Gallery from "react-native-gallery";
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import api from "../../services/api";
import styles from "./styles"
import CalendarStrip from 'react-native-calendar-strip';

export default function Maker(params) {

  const [maker, setMaker] = useState({ name: "" });
  const [action, setAction] = useState();
  const [screen, setScreen] = useState();

  const [date, setDate] = useState();

  useEffect(() => {
    setMaker(params.route.params.maker)
    //console.log("TELA MAKER ", paramMaker)
  }, []);
  /*
    async function loadMakerInformation() {
      await api.get('/maker', {
        params: {
          user: nome,
        }
      }).then(response => {
        setMaker(response.data)
      });
    }
  */


  function sendWhatsapp() {
    const message = `Hello ${maker.name}, I'd like see you are available about to meet you`;
    Linking.openURL(`whatsapp://send?phone=${maker.whatsapp}?t=${message}`);
  }


  function openInstagram() {
    Linking.openURL(`instagram://user?username=${maker.instagram}`)
  }

  function onDateSelected(date) {
    console.log("Selected Date", date)
}



  useEffect(() => {
    if (action === "Gallery") {
      setScreen(
        <FlatList
          horizontal
          data={maker.gallery}
          renderItem={({ item }) =>
            <Card>
              <Card.Cover source={{ uri: item.imageUrl }} />
              <Card.Content>
                <Title>{item.title}</Title>
              </Card.Content>
            </Card>
          }
          keyExtractor={(item, index) => index}
        />
      );
    } else if (action === "Services") {
      setScreen(
        <FlatList
          horizontal
          data={maker.services}
          renderItem={({ item }) =>

            <Card>
              <Card.Content>
                <Title>{item.title}</Title>
                <Paragraph>{item.price}</Paragraph>
                <Paragraph>{item.category}</Paragraph>
                <Paragraph>{item.description}</Paragraph>
              </Card.Content>
              <Card.Cover source={{ uri: item.imageUrl }} />
              <Button title="Apagar" onPress={() => eraseService(item.title)} />
            </Card>
          }
          keyExtractor={(item, index) => index}
        />
      );
    } else if (action === "Calendar") {
      setScreen(
        <CalendarStrip
          scrollable
          calendarAnimation={{ type: 'sequence', duration: 30 }}
          daySelectionAnimation={{ type: 'background', duration: 300, highlightColor: '#9265DC' }}
          style={{ height: 200, paddingTop: 20, paddingBottom: 10 }}
          calendarHeaderStyle={{ color: 'white' }}
          calendarColor={'#3343CE'}
          dateNumberStyle={{ color: 'white' }}
          dateNameStyle={{ color: 'white' }}
          iconContainer={{ flex: 0.1 }}
          /*customDatesStyles={this.state.customDatesStyles}
          markedDates={this.state.markedDates}
          datesBlacklist={this.datesBlacklistFunc}*/
          onDateSelected={onDateSelected}
          useIsoWeekday={false}
        >
          {/** criar uma lista de texto com os horarios agendados  */}
        </CalendarStrip>
      );
    } else if (action === "Contact") {

      setScreen(
        <View>
          <Button
            style={styles.logginButton}
            onPress={sendWhatsapp}
            title="Whatsapp" />
          <Button
            style={styles.logginButton}
            onPress={openInstagram}
            title="Instagram" />

        </View>
      );
    }
  }, [action]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.headerAvatar} source={{ uri: maker.avatarUrl }} />
        <Text style={styles.headerTitle}>{maker.name}</Text>
        <Text style={styles.headerDescription}>{maker.bio}</Text>
      </View>

      <View style={styles.actionBar}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setAction("Gallery")}
        >
          <Feather name="arrow-left" size={28} color="#E02041" />
          <Text style={styles.buttonText}>Gallery</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setAction("Services")}
        >
          <Feather name="arrow-left" size={28} color="#E02041" />
          <Text style={styles.buttonText}>Services</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setAction("Calendar")}
        >
          <Feather name="arrow-left" size={28} color="#E02041" />
          <Text style={styles.buttonText}>Calendar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setAction("Contact")}
        >
          <Feather name="arrow-left" size={28} color="#E02041" />
          <Text style={styles.buttonText}>Contact</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        {screen}
      </View>
    </View>
  );
}
