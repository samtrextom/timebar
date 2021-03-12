import {Card, CardContent, CardHeader, Button } from '@material-ui/core'
import React, {useState} from 'react'
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {getPOYR} from './math'

export default function DateToPercent() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [converted, setConverted] = useState(null)

  const handleDateChange = (date) => {
    setSelectedDate(date)
  };  

  const handleConversion=()=>{
    setConverted(getPOYR(selectedDate))
  }

    return (
        <Card style={{margin:5}}>
            <CardHeader title={' Date Time To Percent Convertor '}/>
            <CardContent >
              <div style={{display:'flex', width:'100%'}}>
                <div style={{display:'block'}}>
                  <div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />
                      <KeyboardTimePicker
                        margin="normal"
                        id="time-picker"
                        label="Time picker"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          'aria-label': 'change time',
                        }}
                      />
                    </MuiPickersUtilsProvider>
                  </div>
                  <div style={{display:'flex'}}>
                    <Button onClick={handleConversion} variant="contained">Convert</Button>
                    {converted && <div style={{fontSize:30, marginLeft:20}}>POYR: {String(100-converted).substring(0,9)}</div>}
                  </div>
                </div>
              </div>
            </CardContent>
        </Card>

    )
}
