import {Card, CardContent, CardHeader } from '@material-ui/core'
import React from 'react'

export default function TimeIncrements() {


    return (
        <Card style={{margin:5}}>
            <CardHeader title={' Time Increments '}/>
            <CardContent >
              <div style={{display:'flex', width:'100%'}}>
                <div style={{display:'block', justifyContent:'left', textAlign:'left'}}>
                  <div>1 Year : 100%</div>
                  <div>1 Day : .28%</div>
                  <div>1 Hour : .0117%</div>
                  <div>1 Minute : .00019%</div>
                  <div>1 Second : .000032%</div>
                </div>
              </div>
            </CardContent>
        </Card>

    )
}