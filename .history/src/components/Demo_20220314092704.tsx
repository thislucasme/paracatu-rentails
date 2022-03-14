import { HStack, VStack, SimpleGrid, Flex, Spacer } from '@chakra-ui/react';
import { AppShell, Button, Checkbox, ColorScheme, ColorSchemeProvider, Header, MantineProvider, Navbar, Select, Text, Title } from '@mantine/core';
import { Card } from './Card';
import '../style/style.css';
import { useState } from 'react';
import { MdAddCircleOutline } from 'react-icons/md'
export function Demo() {

    const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{ colorScheme }}>
                <AppShell
                    padding="lg"
                    navbar={<Navbar width={{ base: 300 }} height={"500"} p="xs">

                        <Checkbox my={2} size="md" label={"Casa"} />
                        <Checkbox my={2} size="md" label={"Apartamento"} />
                        <Checkbox my={2} size="md" label={"Chacara / Sitio"} />

                        <VStack mt={5} alignItems={"start"}>
                            <Text>Cidade</Text>
                            <HStack w={"100%"} >

                                <Select
                                    style={{ width: "100%" }}
                                    placeholder="Selecione"
                                    data={['React', 'Angular', 'Svelte', 'Vue']}
                                />
                            </HStack>

                            <Text>Estado</Text>
                            <HStack w={"100%"} >

                                <Select
                                    style={{ width: "100%" }}
                                    placeholder="Selecione"
                                    data={['React', 'Angular', 'Svelte', 'Vue']}
                                />
                            </HStack>

                            <Text>Quartos</Text>
                            <HStack >

                                <Select
                                    placeholder="Min"
                                    data={['React', 'Angular', 'Svelte', 'Vue']}
                                />
                                <Select
                                    placeholder="Max"
                                    data={['React', 'Angular', 'Svelte', 'Vue']}
                                />
                            </HStack>

                            <Text>Banheiro</Text>
                            <HStack w={"100%"} >

                                <Select
                                    style={{ width: "100%" }}
                                    placeholder="Selecione"
                                    data={['React', 'Angular', 'Svelte', 'Vue']}
                                />
                            </HStack>

                            <Text>Garagem</Text>
                            <HStack w={"100%"} >

                                <Select
                                    style={{ width: "100%" }}
                                    placeholder="Selecione"
                                    data={['React', 'Angular', 'Svelte', 'Vue']}
                                />
                            </HStack>
                        </VStack>

                    </Navbar>}
                    header={<Header height={60} p="xs">
                        <Flex>

                            <Title order={3}>
                                <Text
                                    component="span"
                                    align="center"
                                    variant="gradient"
                                    gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
                                    size="xl"
                                    weight={700}
                                    style={{ fontFamily: 'Greycliff CF, sans-serif' }}
                                >
                                    Paracatu
                                </Text>
                                <Text
                                    component="span"
                                    align="center"
                                    variant="gradient"
                                    gradient={{ from: 'red', to: 'red', deg: 45 }}
                                    size="xl"
                                    weight={700}
                                    style={{ fontFamily: 'Roboto, sans-serif' }}
                                >
                                    Rentail
                                </Text>
                            </Title>
                            <Spacer />
                            <HStack>
                                <Button leftIcon={<MdAddCircleOutline size={18} />}>
                                    Anunciar
                                </Button>
                            </HStack>
                        </Flex>
                    </Header>}
                    styles={(theme) => ({
                        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
                    })}
                >
                    <SimpleGrid columns={3} spacing={10}>
                        <Card />
                        <Card />
                        <Card />
                    </SimpleGrid>

                </AppShell>
            </MantineProvider>
        </ColorSchemeProvider>
    );
}
