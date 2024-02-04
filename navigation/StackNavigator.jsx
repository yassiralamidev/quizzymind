import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {OnboardingScreen,HomeScreen, QuizScreen,ResultScreen} from '../screens'
import colors from '../style/colors';

const Stack = createNativeStackNavigator();

const StackNavigation = ({isAppFirstLaunched}) => {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown:false,
        headerStyle:{backgroundColor:colors.primary},
        headerTitleStyle:{
          fontWeight:'bold',
        },
        headerTitleAlign:'center',
        headerTintColor:colors.text,
        headerShadowVisible:false
      }}
    >
      {isAppFirstLaunched && <Stack.Screen name='Onboarding' component={OnboardingScreen}/>}
      <Stack.Screen name='Home' component={HomeScreen}/>
      <Stack.Screen 
        options={({ route }) => ({ title: route.params.category.name,headerShown:true })}
        name='Quiz'
        component={QuizScreen}
      />
      <Stack.Screen name='Result' component={ResultScreen}/>
    </Stack.Navigator>
  )
}

export default StackNavigation
