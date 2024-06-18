import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useState } from 'react';
import {Ionicons} from '@expo/vector-icons';
import { client } from '../KindeConfig';
export default function Header() {
    const [user, setUser] = useState();

    useEffect(() => {
        getUserData();
    }, [])
    const getUserData = async () => {
        const user = await client.getUserDetails();
        setUser(user);
    }



    return (
        <View style={{
            display:'flex',
            flexDirection:'row',
            gap:8,
            alignItems:'center'
        }}>
            <Image source={{ uri: user?.picture }}
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: 99
                }}
            />
            <View style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                width:'85%'
            }}>
                <Text style={{
                    color: '#FFFFFF',
                    fontSize: 16
                }}>
                    Welcome
                    </Text>
                <Text style={{
                    color: '#FFFFFF',
                    fontSize: 16
                }}>
                    {user?.given_name}
                    </Text>
                    <Ionicons name="notifications" size={24} color='#FFFFFF' />
            </View>
        </View>

    )
}
