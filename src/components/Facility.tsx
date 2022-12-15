import {
  Avatar,
  Chip,
  Container,
  InputLabel,
  Paper,
  TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import dayjs from 'dayjs';
import React from 'react';

const RootContainer = styled(Container)(({ theme }) => ({
  '& .MuiTextField-root': {
    margin: theme.spacing(1),
  },
}));

const PpaperForm = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
}));

const Facility: React.FC = () => {
  return (
    <RootContainer maxWidth="sm">
      <PpaperForm>
        <TextField label="設備名" fullWidth />
        <TextField label="詳細" fullWidth multiline />
        <InputLabel shrink>登録者</InputLabel>
        <p>
          <Chip
            label="登録者"
            avatar={
              <Avatar src="https://avatars.githubusercontent.com/u/58695418?v=4" />
            }
          />
          {dayjs(new Date()).format('YYYY-MM-DD HH:mm')}
        </p>
        <p>
          <Chip
            label="更新者"
            avatar={
              <Avatar src="https://avatars.githubusercontent.com/u/58695418?v=4" />
            }
          />
          {dayjs(new Date()).format('YYYY-MM-DD HH:mm')}
        </p>
      </PpaperForm>
    </RootContainer>
  );
};
export default Facility;
