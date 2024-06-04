import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';

const RideDetailsScreen = () => {
    return (
        <ScrollView style={styles.container}>
            

            <View style={styles.locationContainer}>
                <View style={styles.location}>
                    <MaterialIcons name="my-location" size={20} color="green" />
                    <Text style={styles.locationText}>Plot no :497, 100 Feet Rd, Ayyappa....</Text>
                </View>
                <View style={styles.location}>
                    <FontAwesome name="map-marker" size={24} color="red"  style={{paddingLeft: 4}}/>
                    <Text style={styles.locationText}>Plot no, Ayyappasocity main road..</Text>
                </View>
            </View>

            <View style={styles.earningsContainer}>
                <Text style={styles.earningsHeader}>Your Earnings</Text>
                <Text style={styles.earningsAmount}>₹: 430</Text>
                <View style={styles.earningsDetails}>
                    <View style={styles.earningsDetail}>
                        <Text style={styles.detailLabel}>Total Distance</Text>
                        <Text style={styles.detailValue}>5.6 Km</Text>
                    </View>
                    <View style={styles.earningsDetail}>
                        <Text style={styles.detailLabel}>Duration</Text>
                        <Text style={styles.detailValue}>14:23 Seconds</Text>
                    </View>
                </View>
                <Text style={styles.detail}>Booked Date : 24/04/2024</Text>
                <Text style={styles.detail}>Booked Time : 12:30 PM</Text>
                <Text style={styles.detail}>Payment Type : By Cash</Text>
            </View>

            <View style={styles.billingContainer}>
                <Text style={styles.sectionHeader}>Billing</Text>
                <View style={styles.billingDetail}>
                    <Text style={styles.detailLabel}>Base Fare</Text>
                    <Text style={styles.detailValue}>₹: 200.56</Text>
                </View>
                <View style={styles.billingDetail}>
                    <Text style={styles.detailLabel}>App Charges</Text>
                    <Text style={styles.detailValue}>₹: 10.56</Text>
                </View>
                <View style={styles.billingDetail}>
                    <Text style={styles.detailLabel}>Tax</Text>
                    <Text style={styles.detailValue}>₹: 13.56</Text>
                </View>
                <View style={styles.billingTotal}>
                    <Text style={styles.detailLabel}>Total</Text>
                    <Text style={styles.detailValue}>₹: 225</Text>
                </View>
            </View>

            <View style={styles.ratingsContainer}>
                <Text style={styles.sectionHeader}>Ratings</Text>
                <View style={styles.ratingStars}>
                    <FontAwesome name="star" size={24} color="gold" />
                    <FontAwesome name="star" size={24} color="gold" />
                    <FontAwesome name="star" size={24} color="gold" />
                    <FontAwesome name="star" size={24} color="gold" />
                    <FontAwesome name="star-o" size={24} color="gold" />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        paddingTop: 20,
        paddingBottom: 20,
    },
    
    locationContainer: {
        backgroundColor: '#f0f0f0',
        padding: 15,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    locationText: {
        marginLeft: 10,
        fontSize: 16,
    },
    earningsContainer: {
        backgroundColor: 'white',
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 10,
        marginVertical: 10,
    },
    earningsHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#888',
        textAlign: 'center',
    },
    earningsAmount: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'green',
        textAlign: 'center',
        marginVertical: 10,
    },
    earningsDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    earningsDetail: {
        alignItems: 'center',
    },
    detailLabel: {
        fontSize: 14,
        color: '#888',
    },
    detailValue: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    detail: {
        fontSize: 16,
        marginVertical: 2,
    },
    billingContainer: {
        backgroundColor: 'white',
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 10,
        marginVertical: 10,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    billingDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    billingTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        borderTopWidth: 1,
        borderColor: '#ddd',
        paddingTop: 10,
    },
    ratingsContainer: {
        backgroundColor: 'white',
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        marginBottom: 50,
    },
    ratingStars: {
        flexDirection: 'row',
        marginTop: 10,
    },
});

export default RideDetailsScreen;
