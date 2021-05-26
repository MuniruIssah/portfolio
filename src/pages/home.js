import { Col, Row ,Image, Button,Card, Avatar, Divider, Space} from "antd";
import React from "react";
import me from '../assets/me.jpg';
import vue from '../assets/vue-js.png';
import react from '../assets/react.png';
import flutter from '../assets/flutter.png';
import strapi from '../assets/strapi.png';
import node from '../assets/node.png';
import works from '../assets/works.png';
import slitcorp from '../assets/slitcorp.png';
import actsfile from '../assets/actsfile.png';
import samtv from '../assets/samtv.png';










import './pages.css';
import {GithubOutlined,FacebookFilled,TwitterOutlined,DatabaseOutlined,InstagramOutlined,MobileOutlined,DesktopOutlined,ToolOutlined} from '@ant-design/icons'


const SkillCard=(params)=>{
    return (
        <div style={{height:'auto',margin:10,display:'flex',flexDirection:'column',alignItems:'center'}}>
            {
                params.frontend?
                <>
                <div style={{backgroundColor:'mediumseagreen',width:'100%',padding:5,}}>
                <h3 style={{color:'white'}}>FRONTEND</h3>
            </div>
            <div style={{backgroundColor:'ghostwhite',borderBottomLeftRadius:10,borderBottomRightRadius:10,width:'100%',padding:10,display:'flex',flexDirection:'column'}}>
                <div>
                <Avatar  icon={<DesktopOutlined/>} style={{marginBottom:5}}/>
                <div style={{padding:5,display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
                    <Image width={40} src={react} preview={false} />
                    <Image width={40} src={vue} preview={false} />

                </div>
                </div>
                <Divider/>
                <div>
                <Avatar icon={<MobileOutlined/>} style={{marginBottom:5}}/>
                <div style={{padding:5,display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
                    <Image width={40} src={react} preview={false} />
                    <Image width={40} src={flutter} preview={false} />

                </div>
                </div>
                
               
               
                

            </div>
            </>
                :
                <>
                <div style={{backgroundColor:'olive',width:'100%',padding:5,}}>
                <h3 style={{color:'white'}}>BACKEND</h3>
            </div>
            <div style={{backgroundColor:'ghostwhite',borderBottomLeftRadius:10,borderBottomRightRadius:10,width:'100%',padding:10,display:'flex',flexDirection:'column'}}>
                <div>
                <Avatar  icon={<DatabaseOutlined/>} style={{marginBottom:5}}/>
                <div style={{padding:5,display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Image width={60} src={node} preview={false} />
                    <Image width={100} src={strapi} preview={false} />

                </div>
                </div>
            
                
                
               
               
                

            </div>


                </>

            }
      </div>
    );
}

const WorkCard=(params)=>{
    return(
      
        <Card onClick={()=>{
            window.open(params.link);
        }} hoverable style={{height:100,display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'space-evenly'}} >
            <Image src={params.image} width={params.title==='Actsfile'?70:40} preview={false} alt={params.title}/>
            <h4 style={{color:'gray'}}>{params.title}</h4>
        </Card>
      
    );
}

const Home = () => {
    return (
        <div style={{height:'auto' ,minHeight: '100vh', width: '100vw' }}>
            <Row style={{ height: '100%',width:'100%'}}>
                <Col md={12} style={{backgroundColor: 'whitesmoke',height:'100vh', position: 'relative' ,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start'}}>
                    <div style={{padding:50,height:'70vh',display:'flex',flexDirection:'column',justifyContent:'space-evenly',alignItems:'flex-start'}}>
                        <div className='me' style={{height:120,width:120,}}>
                          
                        </div>
                        <div >
                            <h1 style={{textAlign:'left',fontWeight:'800'}}>HELLO! I'M MUNIRU ISSAH</h1>
                            <p style={{textAlign:'left',fontSize:16,fontWeight:'300',}}>A software engineer with a degree in Computer Science. I am a learning fullstack developer whose aim is to develop useful solutions for clients. </p>
                            <p style={{textAlign:'left',fontSize:16,fontWeight:'300',}}>My style of programming is simple and minimalistic</p>

                        </div>

                    </div>
                    <div style={{ position: 'absolute',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly', bottom: 0, height: 100, width: '100%' }}>
                        <GithubOutlined style={{fontSize:30,color:'darkgray'}} onClick={()=>{window.open('https://github.com/MuniruIssah')}}/>
                        <FacebookFilled style={{fontSize:30,color:'darkgray'}} onClick={()=>{window.open('https://web.facebook.com/profile.php?id=100007943596320')}} />
                        <TwitterOutlined style={{fontSize:30,color:'darkgray'}} onClick={()=>{window.open('https://twitter.com/ningen_dewa_nai')}}/>
                        <InstagramOutlined style={{fontSize:30,color:'darkgray'}} onClick={()=>{window.open('https://www.instagram.com/eeeeeeeee_sar/')}}/>
                    </div>
                </Col>
                <Col md={12} style={{display:'flex',height:'100vh',padding:20,width:'100%',flexDirection:'column',alignItems:'center',justifyContent:'flex-start'}}>
                        <div style={{minHeight:'95vh',overflowY:'scroll'}}>
                        <ToolOutlined style={{fontSize:23}}/>
                        <h1 style={{textAlign:'center',marginBottom:15}}>SKILLS</h1>
                        <div style={{display:'grid',gridTemplateColumns:'repeat(2,minmax(250px,1fr))',marginBottom:40}}>
                        <SkillCard frontend={true}/>
                        <SkillCard frontend={false}/>
                        </div>
                        
                        <Image width={23} src={works} preview={false} />
                        <h1 style={{textAlign:'center',marginBottom:15}}>WORKS</h1>
                        <div style={{display:'grid',gridTemplateColumns:'repeat(2,minmax(250px,1fr))'}}>
                        <WorkCard title='Slitcorp' theme='#2e91fc' image={slitcorp} link='https://www.slitcorp.com'/>
                        <WorkCard title='Sam TV Live App' theme="white" image={samtv} link='https://apps.apple.com/us/app/samtv-live/id1565552923'/>
                        <WorkCard title='Actsfile' theme='#2a3eca' image={actsfile} link='https://actsfile.com'/>
                        
                        </div>
                       
                        </div>
                        

                

                </Col>
            </Row>
        </div>
    );
};
export default Home;