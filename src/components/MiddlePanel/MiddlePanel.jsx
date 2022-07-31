import React from 'react';
import './MiddlePanel.css';
import { Typography, IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Articles } from '../Articles';
import { articles } from '../../constants';
const MiddlePanel = () => {
  return (
    <div className='middlepanel'>
      <div className='middlepanel__header'>
        <span>
          <Typography
            variant='h1'
            sx={{ fontWeight: '700', fontSize: '42px', color: 'black' }}
          >
            Sudip Aryal
          </Typography>
        </span>
        <span>
          <IconButton>
            <MoreHorizIcon
              sx={{
                '&:hover': {
                  color: 'rgb(0,0,0)',
                },
              }}
            />
          </IconButton>
        </span>
      </div>
      <div className='middlepanel__page__header'>
        <div className='middlepanel__page__header__text__container'>
          <p className='middlepanel__page__header__title'>Home</p>
          <p className='middlepanel__page__header__title'>Lists</p>
          <p className='middlepanel__page__header__title'>About</p>
        </div>
      </div>
      <div className='middlepanel__page__articles'>
        {articles.map((item) => (
          <Articles key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export { MiddlePanel };
