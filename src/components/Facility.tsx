import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import {
  Avatar,
  Button,
  Chip,
  Container,
  Grid,
  InputLabel,
  Paper,
  TextField,
  Typography,
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

const CancelButton = styled(Button)(({ theme }) => ({
  color: theme.palette.error.main,
}));

const SaveButton = styled(Button)(() => ({
  textAlign: 'right',
}));

const AlignRight = styled(Typography)(() => ({
  textAlign: 'right',
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

        <Grid container>
          <Grid item xs={6}>
            <CancelButton startIcon={<ClearIcon />}>削除</CancelButton>
          </Grid>
          <Grid item xs={6}>
            <AlignRight>
              <SaveButton
                variant="contained"
                color="primary"
                startIcon={<CheckIcon />}
              >
                保存
              </SaveButton>
            </AlignRight>
          </Grid>
        </Grid>
      </PpaperForm>
    </RootContainer>
  );
};
export default Facility;
