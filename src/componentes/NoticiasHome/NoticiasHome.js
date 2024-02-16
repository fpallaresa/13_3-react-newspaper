import { Box, Heading, Text, HStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NoticiasHome = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="left"
      maxWidth="1200px"
      width="75%"
      margin="auto"
    >
      <Heading as="h1" size="xl" marginBottom="40px" textAlign="left">
        Por favor, elige una de las siguientes categorías
      </Heading>
      <HStack spacing="24px" textAlign="left" alignItems="flex-start">
        <Box w="33%">
          <Link to="/noticias/sport">
            <Button marginBottom="20px">Deportes</Button>
          </Link>
          <Text>
            Encuentra las últimas noticias sobre tus deportes favoritos, desde
            fútbol hasta tenis, baloncesto, golf y mucho más.
          </Text>
        </Box>
        <Box w="33%">
          <Link to="/noticias/tech">
            <Button marginBottom="20px">Tecnología</Button>
          </Link>
          <Text>
            Mantente al día con las últimas tendencias tecnológicas, desde
            dipositivos móviles hasta inteligencia artificial, robótica y mucho
            más.
          </Text>
        </Box>
        <Box w="33%">
          <Link to="/noticias/economics">
            <Button marginBottom="20px">Economía</Button>
          </Link>
          <Text>
            Descubre las útlimas noticias económicas, desde mercados financieros
            hasta empresas, negocios, política fiscal y mucho más.
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default NoticiasHome;
