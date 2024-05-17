import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
  } from "@/components/ui/card"
  import {
    CalendarCheck2, Users, Building2,
    Presentation
  } from "lucide-react"
  
const CardSet = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <Card x-chunk="dashboard-01-chunk-1" className='shadow transition-all hover:shadow-lg'>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Account Users
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">
                Total Account Users Active
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2" className='shadow transition-all hover:shadow-lg'>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Companies</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">
                Total companies registered at ComSec360
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-3" className='shadow transition-all hover:shadow-lg'>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
              <Presentation className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">30</div>
              <p className="text-xs text-muted-foreground">
                Total Projects registered at ComSec360
              </p>
            </CardContent>
          </Card>
        </div>
  )
}

export default CardSet