import './App.css';
import TimeBar from './Timebar';
import DateToPercent from './DateToPercent';
import DateTimeToPercent from './DateTimeToPercent'
import TimeIncrements from './TimeIncrements';
import TimeConvertor from './TimeConvertor'

function App() {
  return (
    <div className="App" style={{display:'flex', width:'100%', justifyContent:'center',backgroundColor:'#e3e3e3'}}>
      <div style={{display:'block'}}>
        <h1>Percent of Year Remaining (POYR)</h1>
        <TimeBar/>
        <TimeIncrements/>
        <DateToPercent/>
        <DateTimeToPercent/>
        <TimeConvertor/>
      </div>
    </div>
  );
}

export default App;
