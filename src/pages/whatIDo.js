import { Avatar, Button } from "antd";
import React from "react";
import me from '../assets/me.jpg';


const WhatIDo=()=>{
   return (
   <div style={{display:'flex',backgroundColor:'ghostwhite',height:'100vh',width:'100vw',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <div style={{width:'70%'}}>
        <Avatar size={150}  style={{backgroundColor:'red'}}  src={me}  />
        <div>
        <h2>About Me</h2>
        <p>Aliqua eu nisi dolore magna nisi ad ea eu enim officia voluptate laborum. Voluptate dolor ullamco aliqua magna excepteur voluptate dolore mollit id qui qui elit excepteur. Dolor voluptate consequat in sit enim consectetur elit sunt.</p>
        </div>
        <div>
        <Button size='large'>Facebook</Button>
        <Button size='large'>Github</Button>
        <Button size='large'>Twitter</Button>

        </div>
        </div>
   </div>);
}

export default WhatIDo;