import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(null);

  const handleChange = (key, value) => {
    setProfile({ ...profile, [key]: value });
  };

  const handleSave = async () => {
    try {
      const response = await axios.put('http://192.168.0.96:4000/driver-profile/3', profile);
      console.log('Profile saved:', response.data);
      setIsEditing(false); // Toggle back to non-editing mode after save
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  const handleEditImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!pickerResult.cancelled) {
      setProfile({ ...profile, imageUri: pickerResult.uri });
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://192.168.0.96:4000/driver-profile/3');
        const data = response.data;
        if (data) {
          setProfile(data); // Adjusted to handle single profile object
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
        alert('Error fetching profile. Please check if the profile exists and try again.');
      }
    };

    fetchProfile();
  }, []);
  
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleEditImage}>
            <Image
              style={styles.profileImage}
              source={{ uri: profile?.imageUri }}
            />
          </TouchableOpacity>
          {isEditing ? (
            <TextInput
              style={styles.nameInput}
              value={profile?.name}
              onChangeText={(text) => handleChange('name', text)}
            />
          ) : (
            <>
              <Text style={styles.name}>{profile?.name}</Text>
              <TouchableOpacity onPress={() => setIsEditing(true)}>
              </TouchableOpacity>
            </>
          )}
        </View>
        <View style={styles.body}>
          <ProfileItem
            label="Phone"
            value={profile?.phone}
            isEditing={isEditing}
            onChange={(text) => handleChange('phone', text)}
            IconComponent={FontAwesome}
            iconName="phone"
          />
          <ProfileItem
            label="Email"
            value={profile?.email}
            isEditing={isEditing}
            onChange={(text) => handleChange('email', text)}
            IconComponent={FontAwesome}
            iconName="envelope"
          />
          <ProfileItem
            label="D O B"
            value={profile?.dob}
            isEditing={isEditing}
            onChange={(text) => handleChange('dob', text)}
            IconComponent={FontAwesome}
            iconName="calendar"
          />
          <ProfileItem
            label="Blood group"
            value={profile?.blood_group}
            isEditing={isEditing}
            onChange={(text) => handleChange('blood_group', text)}
            IconComponent={FontAwesome}
            iconName="tint"
          />
          <ProfileItem
            label="Documents"
            value={profile?.documents}
            isEditing={isEditing}
            onChange={(newDocuments) => handleChange('documents', newDocuments)}
            IconComponent={FontAwesome}
            iconName="file"
          />
          <ProfileItem
            label="Bank details"
            value={profile?.bank_details}
            isEditing={isEditing}
            onChange={(newBankDetails) => handleChange('bank_details', newBankDetails)}
            IconComponent={FontAwesome}
            iconName="bank"
          />
          {isEditing ? (
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.editButton} onPress={() => setIsEditing(true)}>
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const ProfileItem = ({ label, value, isEditing, onChange, IconComponent, iconName }) => (
  <View style={styles.profileItem}>
    {IconComponent && <IconComponent name={iconName} size={20} color="black" style={styles.icon} />}
    <Text style={styles.label}>{label}:</Text>
    {isEditing ? (
      typeof value === 'object' && value !== null ? (
        Object.entries(value).map(([key, val]) => (
          <View key={key} style={styles.nestedItem}>
            <Text style={styles.nestedLabel}>{key}:</Text>
            <TextInput
              style={styles.input}
              value={String(val)}
              onChangeText={(text) => onChange({ ...value, [key]: text })}
            />
          </View>
        ))
      ) : (
        <TextInput
          style={styles.input}
          value={String(value)}
          onChangeText={onChange}
        />
      )
    ) : (
      typeof value === 'object' && value !== null ? (
        Object.entries(value).map(([key, val]) => (
          <Text key={key} style={styles.value}>
            {key}: {val}
          </Text>
        ))
      ) : (
        <Text style={styles.value}>{String(value)}</Text>
      )
    )}
  </View>
);

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  nameInput: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  editButton: {
    backgroundColor: '#f44336',
    borderRadius: 5,
    height: 40,
    width: 120,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    height: 40,
    width: 120,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  profileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: 'rgba(217,217,217,0.3)',
    height: 40,
    padding: 10,
    borderRadius: 10,
  },
  label: {
    marginRight: 10,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
  input: {
    flex: 2.5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 16,
  },
  icon: {
    marginRight: 10,
  },
  nestedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  nestedLabel: {
    marginRight: 5,
    fontWeight: 'bold',
  },
});

export default ProfilePage;
