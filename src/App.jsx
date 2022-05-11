
import React , {Component}  from "react";
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from "components/Statistics/Statistics";
import Section from "components/Section/Section";
import Notification from "components/Notification/Notification";
import { Container } from "components/FeedbackOptions/FeedbackOptions.styled";


class App extends Component  {


state = {
good: 0 , 
neutral : 0 , 
bad: 0
} ;

countTotalFeedback = () => {
  const {good , neutral , bad} = this.state
  const  total = bad + good + neutral ; 
 return total ;


}

countPositiveFeedbackPercentage = () => {
const result = this.countTotalFeedback() ; 
const {good} = this.state ;
const percentage = (good * 100 ) / result ;
return Math.round(percentage) ;

}

onLeaveFeedback =(e) => {
  const name = e.target.name ;
this.setState((prevState) => ({
[name]: prevState[name] + 1 ,

}) )
}


    

render(){

  const total = this.countTotalFeedback() ;
  const positivePercentage = this.countPositiveFeedbackPercentage() ;
  const objKey = Object.keys(this.state);
  const objArr =   Object.entries(this.state);
  
  
   return (
   <>
<Container>
<Section title="Please leave feedback">
<FeedbackOptions 
options={objKey} 
onLeaveFeedback={this.onLeaveFeedback} 
/></Section>

 {total === 0 ? (<Notification message="No feedback given" />) : (
 <Section title="Statistics">
  <Statistics 
  total = {total } positivePercentage  = {positivePercentage}   arrays={objArr}/>
 </Section>)}
 </Container></>


 )} ;
}

export default App;

