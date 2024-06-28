import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../assets/Colors'
import { Feather } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function CategoryList({categoryList}) {
    const navigation = useNavigation();
    const onCategoryClick=(category)=>{
            navigation.navigate('Detail',{category});
    }
  return (
    <View style={{marginTop:20,color:Colors.WHITE}}>
      <Text style={{color:Colors.WHITE, fontWeight:'bold',fontSize:20}}>List</Text>
        <View>
            {categoryList&&categoryList.map((category,index)=>(
                <TouchableOpacity key={index} style={styles.container} onPress={()=>onCategoryClick(category)}>
                    <View style={styles.iconContainer}>
                        <Text style={[styles.iconText,{backgroundColor:category?.color}]}>{category.icon}</Text>
                        </View>
                        <View style={styles.subContainer}>
                            <Text style={{color:Colors.WHITE,fontWeight:"bold",fontSize:21}}>{category.name}</Text>
                            <Text style={{color:Colors.WHITE,fontSize:21}}>₹{category.budget}</Text>
                            </View>
                </TouchableOpacity>
            ))}
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    iconText:{
        fontSize:20,
        padding:14,
        borderRadius:15
    },
    iconContainer:{
        justifyContent:'center',
        alignItems:'baseline',
    },
    container:{
        marginBottom:10,
        display:'flex',
        flexDirection:'row',
        gap:10,
        alignItems:'center',

    },
    subContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'79%'

    }
})