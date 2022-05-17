import React from 'react'
import { Box, Typography, Paper, Button, Accordion, AccordionSummary, AccordionDetails, Rating, Avatar, Card
} from '@mui/material'
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Marquee from "react-fast-marquee";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Services.css'

const Services = () => {
  return (
      <Box>

        {/* Services */}
          <Typography variant="h4" color="#1c6484" >Dental Disease & Treatment</Typography>
          {/* <Carousel  autoPlay> */}
          <Marquee
            pauseOnHover
            pauseOnClick
            speed={20}
            gradient={false}
            // gradientColor={[220, 226, 227]} gradientWidth={150}
          >
            <Box sx={{display: "flex", justifyContent: "space-between"}}>
              <Box sx={{m:5}}> 
                <img src="/images/1.png" width="90rem" alt="services" /> <Typography align="center">RTC</Typography>
              </Box>
              <Box sx={{m:5}}> 
                <img src="/images/2.png" width="90rem" alt="services" /> <Typography align="center">RTC</Typography>
              </Box>
              <Box sx={{m:5}}> 
                <img src="/images/3.png" width="90rem" alt="services" /> <Typography align="center">RTC</Typography>
              </Box>
              <Box sx={{m:5}}> 
                <img src="/images/4.png" width="90rem" alt="services" /> <Typography align="center">RTC</Typography>
              </Box>
              <Box sx={{m:5}}> 
                <img src="/images/5.png" width="90rem" alt="services" /> <Typography align="center">RTC</Typography>
              </Box>
              <Box sx={{m:5}}> 
                <img src="/images/6.jpg" width="90rem" alt="services" /> <Typography align="center">RTC</Typography>
              </Box>
              <Box sx={{m:5}}> 
                <img src="/images/7.png" width="90rem" alt="services" /> <Typography align="center">RTC</Typography>
              </Box>
              <Box sx={{m:5}}> 
                <img src="/images/8.png" width="90rem" alt="services" /> <Typography align="center">RTC</Typography>
              </Box>
              <Box sx={{m:5}}> 
                <img src="/images/3.png" width="90rem" alt="services" /> <Typography align="center">RTC</Typography>
              </Box>
              <Box  sx={{mt:5, mb:5}}> 
                <img src="/images/2.png" width="90rem" alt="services" /> <Typography align="center">RTC</Typography>
              </Box>
            </Box>
          {/* </Carousel> */}
          </Marquee>

           {/* Dental Specialties*/}
           <Typography sx={{m:3}} variant="h4" color="#1c6484" >Dental Specialties</Typography>
           
           <Box className="dental" sx={{display:"flex", m:3, justifyContent:"space-around"}}>
            
             <Box className='box' sx={{width:"14rem", height:"7rem", borderRadius: "5px", boxShadow: "0px 30px 40px -20px #2e80a3", borderTop: "3px solid #206cdc", p:3,}}>
               <Typography className='title' variant="h6" color="#2e80a3" sx={{p:4}}>Pedodontist</Typography>
               <Typography fontSize={13} className="hidden">
                    Contrary to popular belief, Lorem Ipsum is2000 years old. Richard McClintock,  in Virginia, looked up one  classical literature, discovered the undoubtable source.
               </Typography>

             </Box>
             <Box className='box' sx={{width:"14rem", height:"7rem", position: "relative", top: '100px', borderRadius: "5px", boxShadow: "0px 30px 40px -20px #2e80a3", borderTop: "3px solid #206cdc", p:3,}}>
               <Typography className='title' variant="h6" color="#2e80a3" sx={{p:3}} >Oral & Maxillofacial Surgeon</Typography>
               <Typography fontSize={13} className="hidden">
                    Contrary to popular belief, Lorem Ipsum is2000 years old. Richard McClintock,  in Virginia, looked up one  classical literature, discovered the undoubtable source.
               </Typography>

             </Box>

             <Box className='box' sx={{width:"14rem", height:"7rem", borderRadius: "5px", boxShadow: "0px 30px 40px -20px #2e80a3", borderTop: "3px solid #206cdc", p:3,}}>
               <Typography className='title' variant="h6" color="#2e80a3" sx={{p:4}}>Periodontist</Typography>
               <Typography fontSize={13} className="hidden">
                    Contrary to popular belief, Lorem Ipsum is2000 years old. Richard McClintock,  in Virginia, looked up one  classical literature, discovered the undoubtable source.
               </Typography>

             </Box>
             <Box className='box' sx={{width:"14rem", height:"7rem", position: "relative", top: '100px', borderRadius: "5px", boxShadow: "0px 30px 40px -20px #2e80a3", borderTop: "3px solid #206cdc", p:3,}}>
               <Typography className='title' variant="h6" color="#2e80a3" sx={{p:4}}>Orthodontist</Typography>
              <Typography fontSize={13} className="hidden">
                    Contrary to popular belief, Lorem Ipsum is2000 years old. Richard McClintock,  in Virginia, looked up one  classical literature, discovered the undoubtable source.
               </Typography>

             </Box>
           </Box>


            {/* Meet our Specialties*/}
            <Typography sx={{m:3, mt:20}} variant="h4" color="#1c6484" >Meet Our Specialties</Typography>
            
            <Box sx={{display:"flex", direction:"rows",justifyContent:"space-evenly", m: 2, p:1}}>
              <Box sx={{m:2, top:"100px"}}>
                <Avatar src="/images/img1.jpeg" alt="img" sx={{height:"8rem", width:"8rem"}} />
                <Typography>Dr Jayant Yadav<br/>BDS MDS<br/>General Dentist</Typography>
              </Box>
              <Box sx={{m:2}}>
                <Avatar src="/images/img2.jpg" alt="img" sx={{height:"8rem", width:"8rem"}} />
                <Typography>Dr Deepti Maskara<br/>General Dentist</Typography>
              </Box>
              <Box sx={{m:2, top:"100px"}}>
                <Avatar src="/images/img3.jpg" alt="img" sx={{height:"8rem", width:"8rem"}} />
                <Typography>Dr. Neelu Arora<br/>BDS MDS<br/>Prosthodontics</Typography>
              </Box>
              <Box sx={{m:2}}>
                <Avatar src="/images/img4.jpeg" alt="img" sx={{height:"8rem", width:"8rem"}} />
                <Typography>Dr. Sukhwant Yadav<br/>BDS MDS<br/>Endodontist</Typography>
              </Box>
            </Box>

            {/* Why Us */}
            <Typography sx={{m:3}} variant="h4" color="#1c6484" >Why Us</Typography>
            <Box sx={{display:"flex", m:3, justifyContent:"space-between"}} >
              <Box sx={{mt:"9rem"}}><Typography  variant="h6">We bring the health ecosystem together and make sure the patient receives the best.</Typography></Box>
              <Box  sx={{mt:2, display:"flex", flexDirection:"column"}}>
                <Card sx={{p:6, m:3}} className="text1" variant="outlined"><Typography fontWeight="bold" color="blue">An initiative by AIIMS Alumni</Typography></Card>
                <Card sx={{p:6, m:3}} className="text2" variant="outlined"><Typography fontWeight="bold" color="red" >Science-Backed Blogs to enhance your knowledge</Typography></Card>

              </Box>
              <Box sx={{mt:-2,mr:2, display:"flex", flexDirection:"column"}}>
                <Card sx={{p:6, m:3}} className="text1" variant="outlined"><Typography fontWeight="bold" color="green">Dentists are chosen after a rigorous Selection Process</Typography></Card>
                <Card sx={{p:6, m:3}} className="text2" variant="outlined"><Typography fontWeight="bold" color="brown">All Dental Specialists on a single platform</Typography></Card>

              </Box>

            </Box>


          {/* Incubators */}
          <Typography sx={{m:3}} variant="h4" color="#1c6484" >Our Incubators</Typography>
          <Box sx={{display: "flex",mb:4, justifyContent:"space-around"}}>
            <img className='incubator' src="/images/incubator1.png" width="300" alt="incubator" />
            <img className='incubator' src="/images/incubator2.png" width="300" alt="incubator" />
            <img className='incubator' src="/images/incubator3.png" width="300" alt="incubator" />
          </Box>
          
          {/* Our Users Reactions */}
          <Box sx={{p:4}} >
            <Typography sx={{m:3}} variant="h4" color="#1c6484"  >Our Users Reactions</Typography>
            <Box sx={{display:"flex", justifyContent:"space-around", }} >
              
              <Box className="feedback" sx={{width:"20rem", p:2, border:"3px solid #3c92d8", borderRadius:"0.3rem"}} >
                  <Rating size="small" value="4" readOnly />
                  <Typography color="#3c92d8"  variant="h6">John Doe</Typography>
                  <Typography >Very good app. Well thought out about booking/canceling an appointment. Also, Doctor's feedback mechanism is good and describes all the basics in a good way</Typography>
              </Box>
              <Box className="feedback" sx={{width:"20rem",p:2, border:"3px solid #3c92d8", borderRadius:"0.3rem"}} >
                  <Rating size="small" value="5" readOnly />
                  <Typography color="#3c92d8"  variant="h6">Nancy Drew</Typography>
                  <Typography >This app is really flawless. Good for elderly people. Best part of the app is home</Typography>
              </Box>
              <Box className="feedback" sx={{width:"20rem", p:2,border:"3px solid #3c92d8", borderRadius:"0.3rem"}} >
                  <Rating size="small" value="4" readOnly />
                  <Typography color="#3c92d8" variant="h6">John Doe</Typography>
                  <Typography>Very good app. Well thought out about booking/canceling an appointment. Also, Doctor's feedback mechanism is good and describes all the basics in a good way</Typography>
              </Box>
             
            </Box>
          </Box>

          {/* Frequently Asked Questions */}
          <Typography sx={{m:2}} variant="h4" color="#1c6484" >Frequently Asked Questions</Typography>
          <Box sx={{p:6}}>
             <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h5" className="typo">How do I know which dental procedures I require?</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{textAlign:"left"}}>
                  <Typography>
                  Your general dentist or physician will refer you for any types of dentistry they're
                  not qualified to provide. It's critical to visit your general dentist at least twice a year, 
                  not just for teeth cleaning, but also for an oral health examination. Getting a professional 
                  evaluation will assist you in addressing any potential issues before they become serious. If you 
                  have any pain in your mouth, see your general dentist right away.
                  </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h5" className="typo">Are the dentists listed trustworthy and hold the expertise as mentioned in their bio?</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{textAlign:"left"}} >
                  <Typography>
                  Absolutely, yes. The dentists listed with us goes through rigorous approval stages and background checks.
                  </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h5" className="typo">Can I select a dentist of my choice ?</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{textAlign:"left"}}>
                  <Typography>
                  Of course, you can. All the dentists listed are highly experienced. We recommend nearby dentists on the basis of your location.
                  </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h5" className="typo">How can I leave a review of a dentist?</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{textAlign:"left"}}>
                  <Typography>
                  After your appointment, you will receive a link where you can write a review as well as give the dentist points on multiple parameters- charges, clinic, behaviour, expertise, professionalism and more.
                  </Typography>
                </AccordionDetails>
            </Accordion>
          </Box>
          

      </Box>
  )
}

export default Services