import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CircularProgress } from 'react-native-circular-progress';

import Icon1 from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const RideAlert = () => {
    const [rideDetails, setRideDetails] = useState(null);
    const [currentLocation, setCurrentLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [progress, setProgress] = useState(0);
    const [showRideDetails, setShowRideDetails] = useState(true);
  
    useEffect(() => {
      // Fetch ride details from the backend
      axios.get('http://192.168.0.96:3000/ride-alert')
        .then(response => {
          setRideDetails(response.data);
        })
        .catch(error => {
          console.error(error);
        });
  
      // Get live location updates
      getLocationUpdates();
    }, []);
  
    useEffect(() => {
      // Hide ride details after 10 seconds if it's not accepted
      const timer = setTimeout(() => {
        setShowRideDetails(false);
      }, 10000);
  
      return () => clearTimeout(timer);
    }, [rideDetails]);
  
    useEffect(() => {
      // Start the timer for the progress bar
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            return 100;
          } else {
            return prevProgress + 1;
          }
        });
      }, 100);
  
      return () => clearInterval(interval);
    }, []);
  
    const getLocationUpdates = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let subscription = await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.Balanced,
            timeInterval: 1000, // 1 second
            distanceInterval: 10, // 10 meters
          },
          (newLocation) => {
            setCurrentLocation(newLocation.coords);
          }
        );
  
        return () => {
          if (subscription) {
            subscription.remove();
          }
        };
      } catch (error) {
        console.error('Error getting location:', error);
      }
    };
  
    const handleAccept = () => {
      // Add logic to handle accepting the ride
      setShowRideDetails(false);
    };
  
    const handleSkip = () => {
      // Add logic to handle skipping the ride
      setShowRideDetails(false);
    };
  
    if (!rideDetails) {
      return null; // Render nothing if ride details are not available yet
    }
  
    const { pickup, drop, distance, time, passengerName, passengerImage } = rideDetails;
  
    return (
      <View style={styles.container}>
        {currentLocation && (
          <MapView
            style={StyleSheet.absoluteFillObject}
            initialRegion={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
            showsUserLocation={true}
            followsUserLocation={true}
            showsMyLocationButton={true}
            showsCompass={true}
            rotateEnabled={false}
            toolbarEnabled={false}
            zoomEnabled={true}
          >
            <Marker
              coordinate={{
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude,
              }}
              title="You are here"
              description="Your current live location"
              identifier="currentLocationMarker"
            />
          </MapView>
        )}
        {showRideDetails && (
          <View style={styles.alertContainer}>
            <View style={styles.header}>
              <View>
                <Image source={{ uri: passengerImage }} style={styles.profileImage} />
                <Text style={styles.passengerName}>{passengerName}</Text>
              </View>
              <View style={styles.passengerInfo}>
                <Icon1 name="location-outline" size={20} color="green"/><Text style={styles.address}>{pickup}</Text>
                <Icon1 name="location-outline" size={20} color="red"/><Text style={styles.address}>{drop}</Text>
              </View>
            </View>
            <View style={styles.details}>
              <View style={styles.detailItem}>
                <Icon name="map-marker" size={20} color="#4caf50" />
                <Text style={{paddingLeft: 10,}}>{distance}</Text>
              </View>
              <View style={styles.detailItem}>
                <Icon name="clock-o" size={20} color="#4caf50" />
                <Text style={{paddingLeft: 10,}}>{time}</Text>
              </View>
            </View>
            <View style={styles.actions}>
              <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
                <Text style={styles.buttonText}>Skip</Text>
              </TouchableOpacity>
              <CircularProgress
                size={60}
                width={5}
                fill={progress}
                tintColor="#3498db"
                backgroundColor="#fff"
                style={styles.progressBar}
              >
                {({ remainingTime, elapsedTime }) => (
                  <View style={styles.progressTextContainer}>
                    <Text style={styles.progressText}>{Math.ceil((100 - progress) / 100 * 10)}</Text>
                  </View>
                )}
              </CircularProgress>
              <TouchableOpacity style={styles.acceptButton} onPress={handleAccept}>
                <Text style={styles.buttonText}>Accept</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  alertContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: '#3f51b5',
    borderRadius: 10,
    margin: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    paddingRight: 10,
  },
  passengerInfo: {
    flex: 1,
  },
  passengerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  address: {
    color: '#fff',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  skipButton: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 5,
  },
  acceptButton: {
    backgroundColor: '#4caf50',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  progressBar: {
    marginLeft: 10,
  },
  progressTextContainer: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressText: {
    fontSize: 16,
    color: '#3498db',
  },

});

export default RideAlert;
