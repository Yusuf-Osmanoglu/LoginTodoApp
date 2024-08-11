import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Flex, Heading, Input, IconButton, Stack, Spacer, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { FaClipboardList, FaPlus } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import { IoLogOutOutline } from "react-icons/io5";
import TodoItem from './TodoItem';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const data = useRef();

    useEffect(() => {
        // Kullanıcı ID'sini localStorage'dan al
        const userId = localStorage.getItem("userId");

        // Eğer userId varsa, kullanıcının todos'larını localStorage'dan al
        if (userId) {
            const savedTodos = JSON.parse(localStorage.getItem(`todos_${userId}`)) || [];
            setTodos(savedTodos);
        }
    }, []);

    const addTodos = () => {
        const inputText = data.current.value.trim();
        const userId = localStorage.getItem("userId");

        if (inputText === "" || !userId) {
            return null;
        }

        const newTodo = {
            id: Date.now(), // Benzersiz bir id oluşturmak için Date.now() kullanıyoruz
            text: inputText,
            isComplete: false,
        };

        const updatedTodos = [...todos, newTodo];
        setTodos(updatedTodos);

        // Kullanıcının todos'larını localStorage'da güncelle
        localStorage.setItem(`todos_${userId}`, JSON.stringify(updatedTodos));

        data.current.value = "";
    };

    const toggle = (id) => {
        setTodos((prevTodos) => {
            const updatedTodos = prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isComplete: !todo.isComplete,
                    };
                }
                return todo;
            });

            // Kullanıcının todos'larını localStorage'da güncelle
            const userId = localStorage.getItem("userId");
            if (userId) {
                localStorage.setItem(`todos_${userId}`, JSON.stringify(updatedTodos));
            }

            return updatedTodos;
        });
    };

    const deleteTodo = (id) => {
        setTodos((prevTodos) => {
            const updatedTodos = prevTodos.filter((todo) => todo.id !== id);

            // Kullanıcının todos'larını localStorage'da güncelle
            const userId = localStorage.getItem("userId");
            if (userId) {
                localStorage.setItem(`todos_${userId}`, JSON.stringify(updatedTodos));
            }

            return updatedTodos;
        });
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        window.location.reload();
    }

    return (
        <Flex
            align="center"
            justify="center"
            h="100vh"
            p={4}
            bg="gray.50"
        >
            <Box
                maxW="450px"
                h="600px"
                p={12}
                bg="white"
                borderRadius="lg"
                boxShadow="md"
                display="flex"
                flexDirection="column"
                gap={8}
                w="100%"
            >
                <Heading as="h1" size="lg" d="flex" alignItems="center" gap={2} style={{ display: "flex" }}>
                    <Box display="flex" alignItems="center" gap={2}>
                        <FaClipboardList />
                        Todo App
                    </Box>
                    <Spacer />
                    <Menu style={{ cursor : "pointer" }}>
                        <MenuButton style={{ border: "none" }}
                            as={IconButton}
                            aria-label='Options'
                            icon={<CgProfile  style={{ fontSize: "30px"}}/>}
                            variant='outline'
                        />
                        <MenuList>
                            <MenuItem icon={<IoLogOutOutline />} onClick={logout}>
                                <p style={{ fontSize: "20px"}}>
                                    Çıkış Yap
                                </p>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Heading>

                <Flex alignItems="center" bg="gray.100" borderRadius="full">
                    <Input
                        ref={data}
                        placeholder="Yeni bir görev gir."
                        border="none"
                        bg="transparent"
                        p={3.5}
                        _placeholder={{ color: 'gray.400' }}
                        _focus={{ borderColor: 'transparent', boxShadow: 'none' }}
                    />
                    <IconButton
                        aria-label="Add Todo"
                        icon={<FaPlus />}
                        colorScheme="teal"
                        borderRadius="full"
                        onClick={addTodos}
                    />
                </Flex>

                <Stack spacing={4} mt={5}>
                    {todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            toggle={toggle}
                            deleteTodo={deleteTodo}
                        />
                    ))}
                </Stack>
            </Box>
        </Flex>
    );
};

export default Todo;
