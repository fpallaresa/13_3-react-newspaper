import { Container, Heading, Text } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Container
      display="flex"
      flexDirection="column"
      alignItems="center"
      maxWidth="1200px"
      width="75%"
      margin="auto"
    >
      <Heading as="h1" size="lg" marginBottom="40px" textAlign="left">
        404 - Página no encontrada
      </Heading>
      <Text>
        No existe la ruta actual, por favor utiliza los enlaces del menú para
        navegar.
      </Text>
    </Container>
  );
};

export default NotFound;
