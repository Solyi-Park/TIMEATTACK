import React from 'react';
import { useMutation } from 'react-query';
import { addTodo, removeTodo, switchTodo } from '../api/todos';

export const useTodosQuery = () => {
  const addMutation = useMutation(addTodo);
  const deleteMutation = useMutation(removeTodo);
  const switchMutation = useMutation(switchTodo);

  return { addMutation, deleteMutation, switchMutation };
};
