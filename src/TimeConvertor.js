import {Card, CardContent, CardHeader, TextField, Button } from '@material-ui/core'
import React, {useRef,useState} from 'react'
import {increments} from './math'

export default function TimeIncrements() {

  const dayRef = useRef()
  const hourRef = useRef()
  const minRef = useRef()
  const secRef = useRef()
  const [converted, setConverted] = useState(null)

  const handleConvert=()=>{
    console.log(dayRef)
    var total = (dayRef.current.value*increments.day) + (hourRef.current.value*increments.hour) + (minRef.current.value*increments.min) + (secRef.current.value*increments.sec)
    console.log(total)
      setConverted(total)
  }

    return (
        <Card style={{margin:5}}>
            <CardHeader title={' Time Increments '}/>
            <CardContent >
              <div style={{display:'flex', width:'100%'}}>
                <div style={{display:'block', justifyContent:'left', textAlign:'left'}}>
                  <div><TextField type="number" label="Days" inputRef={dayRef}/></div>
                  <div><TextField type="number" label="Hours" inputRef={hourRef}/></div>
                  <div><TextField type="number" label="Minutes" inputRef={minRef}/></div>
                  <div><TextField type="number" label="Seconds" inputRef={secRef}/></div>
                  <div style={{marginTop:7, display:'flex'}}>
                    <Button type="number" variant="contained" onClick={handleConvert}>Convert</Button>
                    {converted && <div style={{fontSize:30, marginLeft:20}}>POY: {String(converted).substring(0,9)}</div>}
                  </div>
                </div>
              </div>
            </CardContent>
        </Card>

    )
}