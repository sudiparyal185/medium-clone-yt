import React from 'react';
import './Articles.css';
import { Typography, Button, IconButton } from '@mui/material';
import { StyledTooltip } from '../LeftBar/LeftBar';
const Articles = ({ item }) => {
  const {
    isPublised,
    publicationStart,
    publication,
    isPinned,
    articleHeader,
    articleBody,
    tag,
    readStat,
  } = item;
  return (
    <div className='articles'>
      <div className='articles__header'>
        {isPublised && (
          <>
            <Typography variant='body2' sx={{ marginRight: '8px' }}>
              {publicationStart}
            </Typography>
            <strong style={{ marginRight: '8px', fontSize: '0.875rem' }}>
              {publication}
            </strong>
          </>
        )}
        {isPinned && (
          <Typography
            variant='body2'
            sx={{
              color: 'rgba(117, 117, 117, 1)',
              fontSize: '0.875rem',
              fontWeight: '400',
            }}
          >
            Pinned
          </Typography>
        )}
      </div>
      <div className='articles__body'>
        <Typography
          variant='body1'
          sx={{
            fontSize: '1.5rem',
            color: 'rgba(41,41, 41, 1)',
            fontWeight: '800',
          }}
        >
          {articleHeader}
        </Typography>
        <Typography
          variant='body1'
          sx={{
            fontSize: '1rem',
            color: 'rgba(41,41, 41, 1)',
            fontWeight: '400',
            margin: '12px 0px',
          }}
        >
          {articleBody}
        </Typography>
      </div>
      <div className='articles__footer'>
        <div className='articles__footer__leftpanel'>
          <Button
            variant='outlined'
            sx={{
              color: 'rgba(41, 41, 41, 1)',
              textTransform: 'inherit',
              fontSize: '0.875rem',
              backgroundColor: 'rgba(242, 242, 242, 1)',
              borderRadius: '999px',
              marginRight: '8px',
              border: 'none',
              '&:hover': {
                border: 'none',
                backgroundColor: 'rgba(230, 230, 230, 1)',
              },
            }}
          >
            {tag}
          </Button>
          <Typography
            variant='caption'
            sx={{
              fontSize: '0.875rem',
              color: 'rgb(117,117, 117)',
              fontWeight: '300',
              margin: '12px 0px',
            }}
          >
            {readStat}
          </Typography>
        </div>
        <div className='articles__footer__rightpanel'>
          <StyledTooltip title='Save' placement='top'>
            <IconButton>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                class='oe'
              >
                <path
                  d='M7.5 3.75a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-14a2 2 0 0 0-2-2h-9z'
                  fill='#000'
                ></path>
              </svg>
            </IconButton>
          </StyledTooltip>
          <StyledTooltip title='More' placement='top'>
            <IconButton>
              <svg class='bk ia ky' width='25' height='25'>
                <path
                  d='M5 12.5c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41A1.93 1.93 0 0 0 7 10.5c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41zm5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59-.39.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59.56 0 1.03-.2 1.42-.59.39-.39.58-.86.58-1.41 0-.55-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59-.39.39-.58.86-.58 1.41z'
                  fill-rule='evenodd'
                ></path>
              </svg>
            </IconButton>
          </StyledTooltip>
        </div>
      </div>
    </div>
  );
};

export { Articles };
