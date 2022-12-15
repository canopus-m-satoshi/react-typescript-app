import { Container, Paper, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
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
      </PpaperForm>
    </RootContainer>
  );
};
export default Facility;
