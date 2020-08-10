import React,{useState, useEffect} from 'react'
import {View, Image,Text, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {RectButton} from 'react-native-gesture-handler'



import styles from './styles'
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import landingImg from '../../assets/images/landing.png';
import api from '../../services/api'


function Landing(){
    const {navigate} =useNavigation();
    const[totalConnections,setTotalConnections]=useState(0);
    useEffect(()=>{
        api.get('connections').then(response=>{
            const {total}=response.data.total;
            setTotalConnections(total);
        })
    },[]);

    function handleNavigationToGiveClassesPage(){
        navigate('giveClasses');

    }
    function handleNavigateToStudyPages(){
        navigate('Study');

    }
    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner}/>
            <Text style={styles.title}>
                Seja bem-vindo ,{'\n'}
                <Text style={styles.titleBold}> O  que deseja fazer?</Text>

            
            </Text>
            <View style={styles.buttonsContainer}>
                <RectButton onPress={handleNavigateToStudyPages} style={[styles.button,styles.buttonPrimary]}>
                    <Image source={studyIcon}></Image>
                    <Text>Estudar</Text>
                </RectButton>
                <RectButton onPress={handleNavigationToGiveClassesPage} style={[styles.button,styles.buttonSecondary]}>
                    <Image source={giveClassesIcon}></Image>
                    <Text>Dar aulas</Text>
                </RectButton>

            </View>
            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexões já realizadas{' '}
                <Image source={heartIcon}/>
            </Text>


        </View>
    )
}
export default Landing