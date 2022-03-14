import { HStack, Text, VStack } from '@chakra-ui/react';
import { AppShell, Navbar, Header, Checkbox, Select } from '@mantine/core';
import { Card } from './Card';

export function Demo() {
    return (
        <AppShell
            padding="lg"
            navbar={<Navbar width={{ base: 300 }} height={500} p="xs">

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
                <Text fontSize={"18px"} fontWeight={"bold"}>ParacatuRentail</Text>
            </Header>}
            styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
        >
          <HStack>
          <Card/>
           <Card/>
           <Card/>
          </HStack>
        </AppShell>
    );
}
