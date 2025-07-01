import React, { useState } from 'react';
import { Text, ActionIcon, Image, Transition, Box, Flex, Card, Stack, Title, Divider, Group, useMantineTheme, alpha } from '@mantine/core';
import { useNuiEvent } from '../hooks/useNuiEvent';
import { useExitListener } from '../hooks/useExitListener';

import RHD from '../assets/RHD.png';
import { FaPlus, FaMinus } from 'react-icons/fa6';

const App: React.FC = () => {
    const theme = useMantineTheme()
    const [visible, setVisible] = useState(false);
    const [count, setCount] = useState(0);

    useNuiEvent('setVisible', (data: {visible: boolean}) => {
        setVisible(data.visible)
        setCount(0);
    })

    useExitListener(setVisible)

    return (
        <Transition
            mounted={visible}
            transition="fade"
            duration={400}
            timingFunction="ease"
        >
            {(transStyles) => (
                <Flex
                    pos="fixed"
                    w="100vw"
                    h="100vh"
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Card
                        p="md"
                        style={{
                            ...transStyles,
                            backgroundColor: alpha(theme.colors.dark[8], 0.9),
                            borderRadius: theme.radius.md,
                            maxWidth: '500px',
                            width: '100%',
                        }}
                    >
                        <Stack align="center" gap="xs">

                            <Group gap="xs">
                                <Box
                                    w={30}
                                    h={30}
                                    bg={alpha('#aeff00', 0.1)}
                                    className='items-center justify-center flex rounded-[5px]'
                                >
                                    <Image
                                        h={25}
                                        src={RHD}
                                        onClick={()=> {
                                            window.open('https://discord.gg/5bCeFBMc', '_blank')
                                        }}
                                    >
                                    </Image>
                                </Box>
                                <Title order={4} c="white">
                                    Welcome to RHD React Boilerplate
                                </Title>
                            </Group>
                            
                            <Divider w="100%" my="sm" color={theme.colors.dark[5]} />
                            
                            <Box
                                w={100}
                                h={100}
                                style={{
                                    fontSize:'100px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    userSelect: 'none'
                                }}
                            >
                                {count}
                            </Box>
                            
                            <Group gap={15} pt={15}>
                                <ActionIcon
                                    variant='light'
                                    color='red'
                                    onClick={() => {
                                        let newCount = count -1

                                        if (newCount < 1) {
                                            newCount = 0
                                        }

                                        setCount(newCount)
                                    }}
                                >
                                    <FaMinus/>
                                </ActionIcon>

                                <ActionIcon
                                    variant='light'
                                    onClick={() => {
                                        setCount(count+1)
                                    }}
                                >
                                    <FaPlus/>
                                </ActionIcon>
                            </Group>

                            
                            <Divider w="100%" my="sm" color={theme.colors.dark[5]} />
                            
                            <Text>Vite + React + Mantine + Tailwindcss</Text>
                        </Stack>
                    </Card>
                </Flex>
            )}
        </Transition>
    )
}

export default App