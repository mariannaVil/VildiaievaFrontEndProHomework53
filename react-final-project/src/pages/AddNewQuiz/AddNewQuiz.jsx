import React from 'react';
import {
  Button, FormControl, FormGroup,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { quizRules } from '../../constants/rules';
import InputText from '../../components/FormElements/InputText';
import { FormControllWrapper } from './styled';
import creativeCard from '../../api/services/creativeCard';

const AddNewQuiz = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = async (values) => {
    const addNewQuiz = await creativeCard.create(values);
    console.log(addNewQuiz);
    alert('Your quiz has been accepted. It will be added in the near future.');
  };

  return (
    <FormControllWrapper>
      <FormControl>
        <FormGroup>
          <InputText control={control} name='title' rules={quizRules.title} label='Tytle' />
          <InputText control={control} name='description' rules={quizRules.description} label='description' />
          <InputText control={control} name='image' rules={quizRules.image} label='image' />
        </FormGroup>
        <Button onClick={handleSubmit(onSubmit)}>Create New Quiz</Button>
      </FormControl>
    </FormControllWrapper>
  );
};

export default AddNewQuiz;
