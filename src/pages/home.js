import { Col, Row, Image, Button, Card, Avatar, Divider, Switch } from "antd";
import React, { useEffect, useState } from "react";
import me from '../assets/me.jpg';
import vue from '../assets/vue-js.png';
import react from '../assets/react.png';
import reactlight from '../assets/reactlight.png';

import flutter from '../assets/flutter.png';
import strapi from '../assets/strapi.png';
import node from '../assets/node.png';
import Toolbox from '../assets/Toolbox.png';
import slitcorp from '../assets/slitcorp.png';
import actsfile from '../assets/actsfile.png';
import samtv from '../assets/samtv1.png';
import sun from '../assets/sun.png';
import moon from '../assets/moon2.png';
import lightwork from '../assets/lightwork.png';













import './pages.css';
import { GithubOutlined, FacebookFilled, CheckOutlined, CloseOutlined, TwitterOutlined, DatabaseOutlined, InstagramOutlined, MobileOutlined, DesktopOutlined, ToolOutlined, } from '@ant-design/icons'




const Home = () => {
    const light={
        leftCol:'ghostwhite',
        rightCol:'white',
        scIcons:'darkgrey',
        greetings:'black',
        sections:'black',
        sectionIcon:'black',
        description:'black',
        card:'ghostwhite',
        avatar:'grey',
        avatarText:'white',
        work:'white',
        frontendBanner:'mediumseagreen',
        frbackText:'white',
        backendBanner:'olive',


    };
    const dark={
        leftCol:'#000000',
        rightCol:'#1c1e21',
        scIcons:'darkgrey',
        greetings:'white',
        sections:'#ffffff60',
        sectionIcon:'lightgrey',
        card:'#ffffff08',
        work:'#323436',
        description:'grey',
        avatar:'#1c1e21',
        avatarText:'wheat',
        frontendBanner:'mediumseagreen',
        frbackText:'white',
        backendBanner:'olive',

    };
    const [lightmode,setLightmode]=useState(true)
    const [styles,setStyles]=useState(light)
    useEffect(()=>{
        if(lightmode){
            setStyles(light)
            console.log('Changed to light')

        }else{
            setStyles(dark)
            console.log('Changed to dark')
        }
    },[lightmode])
    const SkillCard = (params) => {
        return (
            <div style={{ height: 'auto', margin: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {
                    params.frontend ?
                        <>
                            <div style={{ backgroundColor: 'mediumseagreen', width: '100%', padding: 5, }}>
                                <h3 style={{ color: 'white' }}>FRONTEND</h3>
                            </div>
                            <div style={{ backgroundColor: styles.card, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, width: '100%', padding: 10, display: 'flex', flexDirection: 'column' }}>
                                <div>
                                    <Avatar icon={<DesktopOutlined style={{color:styles.avatarText}} />} style={{ marginBottom: 5,backgroundColor:styles.avatar }} />
                                    <div style={{ padding: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                        <Image width={lightmode?40:55} src={lightmode?react:reactlight} preview={false} />
                                        <Image width={40} src={vue} preview={false} />
    
                                    </div>
                                </div>
                                <Divider />
                                <div>
                                    <Avatar icon={<MobileOutlined style={{color:styles.avatarText}} />} style={{ marginBottom: 5 ,backgroundColor:styles.avatar}} />
                                    <div style={{ padding: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                        <Image width={lightmode?40:55}  src={lightmode?react:reactlight} preview={false} />
                                        <Image width={40} src={flutter} preview={false} />
    
                                    </div>
                                </div>
    
    
    
    
    
                            </div>
                        </>
                        :
                        <>
                            <div style={{ backgroundColor: 'olive', width: '100%', padding: 5, }}>
                                <h3 style={{ color: 'white' }}>BACKEND</h3>
                            </div>
                            <div style={{ backgroundColor: styles.card, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, width: '100%', padding: 10, display: 'flex', flexDirection: 'column' }}>
                                <div>
                                    <Avatar icon={<DatabaseOutlined style={{color:styles.avatarText}} />} style={{ marginBottom: 5 ,backgroundColor:styles.avatar}} />
                                    <div style={{ padding: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
    
    const WorkCard = (params) => {
        return (
    
            <Card onClick={() => {
                window.open(params.link);
            }} hoverable style={{ height: 100, display: 'flex',margin:5,border:lightmode?'1px solid gainsboro':'none', alignItems: 'center', flexDirection: 'column', justifyContent: 'space-evenly',backgroundColor:styles.work }} >
                <Image src={params.image} width={params.title === 'Actsfile' ? 70 : params.title === 'Sam TV Live App' ? 45:40} preview={false} alt={params.title} />
                <h4 style={{ color: 'gray' }}>{params.title}</h4>
            </Card>
    
        );
    }
    return (
        <div style={{ height: 'auto', minHeight: '100vh', width: '100vw' }}>
            <Row style={{ height: '100%', width: '100%' }}>
                <Col md={12} style={{ backgroundColor: styles.leftCol, height: '100vh', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <div style={{ padding: 50, height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'flex-start' }}>
                        <div className='me' style={{ height: 120, width: 120,marginBottom:10 }}>

                        </div>
                        <div >
                            <h1 style={{ textAlign: 'left', fontWeight: '800',color:styles.greetings }}>HELLO! I'M MUNIRU ISSAH</h1>
                            <p style={{ textAlign: 'left', fontSize: 16, fontWeight: '300',color:styles.description }}>A software engineer with a degree in Computer Science. I am a learning fullstack developer whose aim is to develop useful solutions for clients. </p>
                            <p style={{ textAlign: 'left', fontSize: 16, fontWeight: '300', color:styles.description }}>My style of programming is simple and minimalistic</p>

                        </div>

                    </div>
                    <div style={{ position: 'absolute', top: 10, right: 10 }}>
                        <Switch
                            
                            checkedChildren={<Image src={sun} width={22} preview={false}/>}
                            unCheckedChildren={<Image src={moon} width={22} preview={false}/>}
                            onChange={(checked)=>{setLightmode(checked)}}
                            defaultChecked
                        />
                    </div>
                    <div style={{ position: 'absolute', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', bottom: 0, height: 100, width: '100%' }}>
                        <GithubOutlined style={{ fontSize: 30, color: 'darkgray' }} onClick={() => { window.open('https://github.com/MuniruIssah') }} />
                        <FacebookFilled style={{ fontSize: 30, color: 'darkgray' }} onClick={() => { window.open('https://web.facebook.com/profile.php?id=100007943596320') }} />
                        <TwitterOutlined style={{ fontSize: 30, color: 'darkgray' }} onClick={() => { window.open('https://twitter.com/ningen_dewa_nai') }} />
                        <InstagramOutlined style={{ fontSize: 30, color: 'darkgray' }} onClick={() => { window.open('https://www.instagram.com/eeeeeeeee_sar/') }} />
                    </div>
                </Col>
                <Col md={12} style={{backgroundColor:styles.rightCol, display: 'flex', height: '100vh', overflowY: 'scroll' , padding: 20, width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <div style={{width:'100%'}}>
                        <ToolOutlined style={{ fontSize: 23 ,color:styles.sectionIcon }} />
                        <h1 style={{ textAlign: 'center', marginBottom: 15,color:styles.sections }}>SKILLS</h1>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', marginBottom: 40 }}>
                            <SkillCard frontend={true} />
                            <SkillCard frontend={false} />
                        </div>

                        <Image width={23} src={lightmode?Toolbox : lightwork} preview={false}  style={{color:styles.sectionIcon }}/>
                        <h1 style={{ textAlign: 'center', marginBottom: 15,color:styles.sections , }}>WORKS</h1>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))' }}>
                            <WorkCard title='Slitcorp' theme='#2e91fc' image={slitcorp} link='https://www.slitcorp.com' />
                            <WorkCard title='Sam TV Live App' theme="white" image={samtv} link='https://apps.apple.com/us/app/samtv-live/id1565552923' />
                            <WorkCard title='Actsfile' theme='#2a3eca' image={actsfile} link='https://actsfile.com' />

                        </div>

                    </div>




                </Col>
            </Row>
        </div>
    );
};
export default Home;