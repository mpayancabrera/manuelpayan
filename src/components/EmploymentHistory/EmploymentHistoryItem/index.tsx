'use client';
import {Badge, Card, CardBody, Heading, Image, Stack, Text} from '@chakra-ui/react';
import './index.css';

export const EmploymentHistoryItem = ({item}: any) => {
  return (
    <Card maxW="md">
      <CardBody>
        <Image src={item.image.src} alt={item.image.alt} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="lg">{item.company}</Heading>
          <Text w="full">{item.role}</Text>
          <Text w="full" color="blue.600">
            {item.description}
          </Text>
        </Stack>
        <Stack direction="row">
          {item.skills.map(({text, color}: any) => (
            <Badge key={text} colorScheme={color}>
              {text}
            </Badge>
          ))}
        </Stack>
      </CardBody>
      {/* <CardFooter>
        <ButtonGroup>
          <Button size="lg" variant="solid" colorScheme="blue">
            More Info
          </Button>
        </ButtonGroup>
      </CardFooter> */}
    </Card>
  );
};
