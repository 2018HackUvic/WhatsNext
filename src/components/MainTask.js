import CurrentTask from '../components/currentTask.js'
import { StackNavigator } from 'react-navigation';
import TimePicker from "../components/timepicker";

const MainTask = () => {
      return (
            <View style= { styles.container } >
              <Timepicker />
            </View >
              )
    }
export default MainTask
    
    const styles = StyleSheet.create({
 container: {
 flex: 1,
           backgroundColor: '#fff',
           alignItems: 'center',
           justifyContent: 'center',
         },
         });