import React from 'react';
import { Button, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './RightBar.css';
const RightBar = () => {
  return (
    <div className='rightbar'>
      <div className='rightbar__button__container'>
        <Button
          variant='contained'
          sx={{
            minWidth: '300px',
            maxWidth: '300px',
            maxHeight: '38px',
            color: 'white',
            backgroundColor: 'rgba(8,8,8,0.93)',
            textTransform: 'inherit',
            borderRadius: '99px',
            '&:hover': {
              backgroundColor: 'rgba(8,8,8,1)',
            },
          }}
        >
          Get unlimited access
        </Button>
      </div>
      <div className='rightbar__input'>
        <SearchIcon sx={{ color: 'rgba(0,0,0,0.3', fontSize: '1rem' }} />
        <input placeholder='Search' />
      </div>
      <div className='rightbar__avatar__container'>
        <img
          alt='Sudip Aryal'
          class='l ci gr ln lo gv'
          src='https://miro.medium.com/fit/c/176/176/1*E6XLhyh6CjoL6cdCu71Hfw.jpeg'
          width='88'
          height='88'
        />
      </div>
      <div className='rightbar__user__details'>
        <Typography
          variant='h2'
          sx={{
            fontSize: '1rem',
            fontWeight: '510',
            color: 'rgb(0,0,0)',
          }}
        >
          Sudip Aryal
        </Typography>
        <Typography
          variant='button'
          sx={{
            fontSize: '1rem',
            fontWeight: '400',
            textTransform: 'inherit',
            cursor: 'pointer',
            marginBottom: '16px',
            color: 'rgb(117, 117, 117)',
            '&:hover': {
              color: 'rgb(0,0,0)',
            },
          }}
        >
          12M Followers
        </Typography>
        <Typography
          variant='body1'
          sx={{
            fontSize: '0.875rem',
            fontWeight: '400',
            marginBottom: '16px',
            cursor: 'pointer',
            color: 'rgb(117, 117, 117)',
          }}
        >
          FullStack Software Engineer
        </Typography>
        <Typography
          variant='body1'
          sx={{
            fontSize: '0.875rem',
            fontWeight: '400',
            marginBottom: '16px',
            cursor: 'pointer',
            color: 'rgb(26, 137, 23)',
            '&:hover': {
              color: 'rgb(0,0,0)',
            },
          }}
        >
          Edit profile
        </Typography>
      </div>
      <div className='rightbar__reading__lists'>
        <Typography
          variant='h2'
          sx={{
            fontSize: '1rem',
            fontWeight: '510',
            color: 'rgb(0,0,0)',
            marginBottom: '8px',
          }}
        >
          Lists
        </Typography>
        <Typography
          variant='h2'
          sx={{ fontSize: '1rem', fontWeight: '510', color: 'rgb(0,0,0)' }}
        >
          Reading list
        </Typography>
        <Typography
          variant='body1'
          sx={{
            fontSize: '0.875rem',
            fontWeight: '400',
            color: 'rgb(117, 117, 117)',
            marginBottom: '16px',
          }}
        >
          4 stories
        </Typography>
        <Typography
          variant='button'
          sx={{
            fontSize: '0.875rem',
            fontWeight: '300',
            textTransform: 'inherit',
            cursor: 'pointer',
            marginBottom: '16px',
            color: 'rgb(117, 117, 117)',
            '&:hover': {
              color: 'rgb(0,0,0)',
            },
          }}
        >
          View All
        </Typography>
      </div>
      <div className='rightbar__footer'>
        <p className='rightbar__footer__text'>Help</p>
        <p className='rightbar__footer__text'>Status</p>
        <p className='rightbar__footer__text'>Blog</p>
        <p className='rightbar__footer__text'>Careers</p>
        <p className='rightbar__footer__text'>Privacy Terms</p>
        <p className='rightbar__footer__text'>About</p>
      </div>
    </div>
  );
};

export { RightBar };
