import React ,{useCallback, useState} from 'react';
import {Alert, Pressable, StyleSheet, Text,TextInput, View} from 'react-native';

function SignIn(){
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    
    const onChangeEmail=useCallback((text)=>{
        setEmail(text);
    },[]);
    const onChangePassword=useCallback((text)=>{
        setPassword(text);
    },[]);

    const onSubmit=useCallback(()=>{
        Alert.alert("alert", 'hello~');
    },[])

    const canGoNext=email && password;
    return <View>
        <View style={styles.inputWrapper}>
            <Text style={styles.label}>이메일</Text>
            <TextInput style={styles.textInput} placeholder='이메일을 입력해주세요' onChangeText={onChangeEmail}/>
            </View>
        <View style={styles.inputWrapper}>
            <Text>비밀번호</Text>
            <TextInput style={styles.textInput} placeholder='비밀번호를 입력해주세요'onChangeText={onChangePassword}/>
        </View>
        <View style={styles.buttonZone}>
            <Pressable 
            onPress={onSubmit} 
            style={!canGoNext ? styles.loginButton : [styles.loginButton, styles.loginButtonActive]} 
            disabled={!canGoNext}>
                <Text style={styles.loginButtonText}>로그인</Text>
            </Pressable>
            <Pressable>
                <Text>회원가입하기</Text>
            </Pressable>
        </View>
    </View>
}

const styles = StyleSheet.create({
    label:{
        fontWeight:'bold',
        fontSize:16,
        marginBottom:20,
    },
    textInput:{
        padding:5,
        borderBottomWidth:StyleSheet.hairlineWidth,
    },
    inputWrapper:{
        padding:20,
    },
    loginButton:{
        backgroundColor:'gray',
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:50,
        marginBottom:10,
    },
    loginButtonActive:{
        backgroundColor:'blue',
    },
    loginButtonText:{
        color:'white',
        fontSize:16,
    },
    buttonZone:{
        // backgroundColor:'yellow',
        alignItems:'center',
    },
})
export default SignIn;