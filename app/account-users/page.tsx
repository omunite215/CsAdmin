import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const page = () => {
  return (

    <section className='container py-6'>
      <Card>
      <CardHeader>
        <CardTitle>Account Users</CardTitle>
        <CardDescription>Choose your preferred settings</CardDescription>
      </CardHeader>
      <CardContent>
        <Card>
          <CardHeader>
            <CardDescription></CardDescription>
          </CardHeader>
        </Card>
      </CardContent>
    </Card>
    </section>
  )
}

export default page