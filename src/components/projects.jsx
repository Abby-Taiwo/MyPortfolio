import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import clone2 from '../images/clone2.png'



function projects() {
    return (
        <div id='projects' className='mt-20'>
            <h1 className='text-center text-white text-6xl text-bold'>Projects</h1>
           
            <div className='w-full max-w-2xl mx-auto mt-10 '>

              {/* <Card sx={{ backgroundColor:deepPurple }}> */}
              <Card sx={{ backgroundColor:'#23252f', color:'#ffffff' }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={clone2}
                />
                <CardContent>
                  <Typography gutterBottom variant="header">
                   <h1 className='text-2xl text-center'>NETFLIX</h1>
                  </Typography>
                  <Typography variant="div">
                   <p className='text-lg text-center'>A Netflix clone app.</p>
                  </Typography>
                </CardContent>
                <CardActions className='flex items-center justify-center'>
                  <a href="https://github.com/ELIJAHJOHNNY/GROUP-A-PROJECT.git">
                    <Button size="large">
                      <FontAwesomeIcon icon={faGithub}/>
                    </Button>
                  </a>
                  
                  <a href="https://netflix-duplicate.netlify.app/" target='_blank' rel="noopener noreferrer">
                    <Button size="large">
                     <FontAwesomeIcon icon={faLink}/>
                    </Button>
                  </a>
                  
                </CardActions>
              </Card>
            </div>

        </div>
    )
}

export default projects
