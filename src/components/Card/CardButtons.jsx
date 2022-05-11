import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function CardButtons() {
  return (
    <div>
      <Checkbox {...label} icon={<ThumbUpOffAltIcon />} checkedIcon={<ThumbUpAltIcon />}/>
      <Checkbox {...label} icon={<ThumbDownOffAltIcon />} checkedIcon={<ThumbDownAltIcon />} />
    </div>
  );
}
