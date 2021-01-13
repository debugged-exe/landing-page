import React, { Component } from 'react';
import {Modal,Button,Container,Jumbotron} from 'react-bootstrap'


const PrivacyPolicy = () => {
    return ( 
      <Container style={{paddingTop:150}}>
      <Jumbotron>
      <h1 className="text-center">Privacy Policy</h1>
      <p>
We collect information about the apps, browsers, and devices you use to access Google services, which helps us provide features like automatic product updates and dimming your screen if your battery runs low.

The information we collect includes unique identifiers, browser type and settings, device type and settings, operating system, mobile network information including carrier name and phone number, and application version number. We also collect information about the interaction of your apps, browsers, and devices with our services, including IP address, crash reports, system activity, and the date, time, and referrer URL of your request.

We collect this information when a Google service on your device contacts our servers — for example, when you install an app from the Play Store or when a service checks for automatic updates. If you’re using an Android device with Google apps, your device periodically contacts Google servers to provide information about your device and connection to our services. This information includes things like your device type, carrier name, crash reports, and which apps you've installed.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
    </Container>
          );
}
 
export default PrivacyPolicy;