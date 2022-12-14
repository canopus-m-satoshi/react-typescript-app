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
} from '@mui/material';
import { styled } from '@mui/material/styles';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { IFacility } from '../models/IFacility';

const initFacility: IFacility = {
  id: '',
  name: 'name の初期値',
  note: 'note の初期値',
  system: {
    createDate: new Date(),
    createUser: {
      displayName: 'ebihara kenji',
      email: '',
      face: 'https://bit.ly/3pM3urc',
    },
    lastUpdateUser: {
      displayName: 'ebihara kenji',
      email: '',
      face: 'https://bit.ly/3pM3urc',
    },
    lastUpdate: new Date(),
  },
};

const Facility: React.FC = () => {
  const [facility, setFacility] = useState(initFacility);
  const { system } = initFacility;
  const {
    control,
    formState: { errors },
  } = useForm({
    defaultValues: initFacility,
    mode: 'onBlur',
  });

  return (
    <RootContainer maxWidth="sm">
      <PpaperForm>
        <Controller
          control={control}
          name="name"
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              label="設備名"
              fullWidth
              error={errors.name !== undefined}
              helperText={errors ? '必須です' : ''}
            />
          )}
        />
        <Controller
          control={control}
          name="note"
          render={({ field }) => (
            <TextField {...field} label="詳細" fullWidth multiline />
          )}
        />
        <InputLabel shrink>登録者</InputLabel>
        <p>
          <Chip
            label={system.createUser.displayName}
            avatar={<Avatar src={system.createUser.face} />}
          />
          {dayjs(system.createDate).format('YYYY-MM-DD HH:mm')}
        </p>
        <p>
          <Chip
            label={system.lastUpdateUser.displayName}
            avatar={<Avatar src={system.lastUpdateUser.face} />}
          />
          {dayjs(system.lastUpdate).format('YYYY-MM-DD HH:mm')}
        </p>

        <Grid container>
          <Grid item xs={6}>
            <CancelButton startIcon={<ClearIcon />}>削除</CancelButton>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'right' }}>
            <SaveButton
              variant="contained"
              color="primary"
              startIcon={<CheckIcon />}
            >
              保存
            </SaveButton>
          </Grid>
        </Grid>
      </PpaperForm>
    </RootContainer>
  );
};
export default Facility;

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
