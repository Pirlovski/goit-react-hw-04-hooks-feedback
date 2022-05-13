
import React , {useState}  from "react";
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from "components/Statistics/Statistics";
import Section from "components/Section/Section";
import Notification from "components/Notification/Notification";
import { Container } from "components/FeedbackOptions/FeedbackOptions.styled";


export default function App() {
  const [good , setGood] = useState(0) ;
  const [neutral , setNeutral] = useState(0) ;
  const [bad , setBad] = useState(0) ;

  const onLeaveFeedback =(e) => {
    // const name = e.target.name ;
 switch(e.currentTarget.textContent.toLowerCase()) {
  case 'good':
    setGood(good + 1);
    break;

  case 'neutral':
    setNeutral(neutral + 1);
    break;

  case 'bad':
    setBad(bad + 1);
    break;

  default:
    return;

 }
  }
  const  countTotalFeedback = () => {
    
    const  total = bad + good + neutral ; 
   return total ;
  
  
  }
  
 const  countPositiveFeedbackPercentage = () => {
  const result = countTotalFeedback() ; 
  const percentage = (good * 100 ) / result ;
  return Math.round(percentage) ;
  
  }
  

  const total = countTotalFeedback() ;
  const positivePercentage = countPositiveFeedbackPercentage() ;
  return (
    <>
 <Container>
 <Section title="Please leave feedback">
 <FeedbackOptions 
 options={['Good' , 'Neutral' , 'Bad']} 
 onLeaveFeedback={onLeaveFeedback} 
 /></Section>
 
  {total === 0 ? (<Notification message="No feedback given" />) : (
  <Section title="Statistics">
   <Statistics 
   total = {total } positivePercentage  = {positivePercentage} good={good} bad={bad} neutral= {neutral}/>
  </Section>)}
  </Container></>
 
 
  )

}

