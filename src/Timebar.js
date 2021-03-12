import {Card, CardContent, CardHeader } from '@material-ui/core'
import React, {useEffect, useState} from 'react'

export default function TimeBar() {

    const [rightNow, setRightNow] = useState(new Date())

    const totalYear = 365*24*60*60
    const theStorySoFar = ((rightNow.getSeconds()+(rightNow.getMinutes()*60)+(rightNow.getHours()*60*60)+((rightNow.getDate()-1)*24*60*60)+(rightNow.getMonth()*30*24*60*60))*100)/totalYear
    const width = String(theStorySoFar)+'%'

    useEffect(()=>{
        setTimeout(()=>{
            setRightNow(new Date())
        },100)
    })

    return (
        <Card style={{margin:5}}>
            <CardHeader title={' Time Bar '}/>
            <CardContent>
                <div style={{backgroundColor:'#08590070', height:'3.5vh',marginLeft:100, marginRight:100,color:'#333', borderRadius:20, width:'80%'}}>POYR - {String(100-theStorySoFar).substring(0,9)}%
                    <div style={{backgroundColor:'#fff', height:'5vh', marginTop:'-2.9vh', width:width, marginLeft:-1}}></div>
                </div>
            </CardContent>
        </Card>

    )
}
