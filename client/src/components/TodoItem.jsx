import React from 'react';
import { Box, IconButton, Text, Flex, Img } from '@chakra-ui/react';
import { FaRegCircle, FaRegCheckCircle, FaRegTrashAlt } from 'react-icons/fa';
import { CiEdit } from "react-icons/ci";

const TodoItem = ({ todo, toggle, deleteTodo }) => {
    return (
        <Flex
            alignItems="center"
            px={2}
            py={4}
            gap={2}
            borderBottom="1px"
            borderColor="gray.200"
            cursor="pointer"
            _hover={{ bg: 'gray.100' }}
            onClick={() => toggle(todo.id)}
        >
            {todo.isComplete ? (
                <FaRegCheckCircle color="#00ADB5" size="1.25em" />
            ) : (
                <FaRegCircle color="#00ADB5" size="1.25em" />
            )}

            <Text flex="1" 
            textDecoration={todo.isComplete ? 'line-through' : 'none' }>
                {todo.text}
            </Text>

            <IconButton 
            icon={<CiEdit size="1.25em" />}
            color="#00ADB5" 
            variant="ghost"
            _hover={{ transform: 'scale(1.1)', transition: 'transform 0.2s' }}
            onClick={(e) => {
                e.stopPropagation();}}
            />

            <IconButton
                aria-label="Delete Todo"
                icon={<FaRegTrashAlt />}
                colorScheme="red"
                variant="ghost"
                size="1.25em"
                onClick={(e) => {
                    e.stopPropagation();
                    deleteTodo(todo.id);
                }}
                _hover={{ transform: 'scale(1.1)', transition: 'transform 0.2s' }}
            />
        </Flex>
    );
};

export default TodoItem;
