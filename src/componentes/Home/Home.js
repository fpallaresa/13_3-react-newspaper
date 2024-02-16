import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  Link,
  Flex,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      maxWidth="1200px"
      width="75%"
      margin="auto"
    >
      <Heading as="h1" size="2xl" marginBottom="40px">
        Bienvenido al periódico digital
      </Heading>
      <Image
        src="https://img.freepik.com/foto-gratis/concepto-medios-negocios-espacio-trabajo_53876-139674.jpg"
        alt="Imagen de nuestro periódico"
        marginBottom="40px"
      ></Image>
      <Text marginBottom="40px">
        Nuestra misión es proporcionarte noticias objetivas y precisas de todo
        el mundo. Fundado en 2023 por Fulanito y Menganito, nuestro equipo está
        dedicado a brindarte las últimas noticias de política, negocios,
        tecnología, deportes y más.
      </Text>
      <Divider marginBottom="40px" />
      <Text marginBottom="20px">Conecta con nosotros</Text>
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        height="110px"
        justifyContent="space-between"
      >
        <Link href="mailto:elcorreoquequieres@correo.com" isExternal>
          <Image
            src="https://img.freepik.com/foto-gratis/vista-superior-viejos-periodicos-franceses_23-2149318857.jpg"
            alt="Imagen de contacto"
            borderRadius="50%"
            width="50px"
            height="50px"
            display="inline-block"
            marginRight="10px"
            verticalAlign="middle"
          ></Image>
          @periodico_digital.com
        </Link>
        <Link href="mailto:elcorreoquequieres@correo.com" isExternal>
          <Image
            src="https://img.freepik.com/foto-gratis/vista-superior-viejos-periodicos-franceses_23-2149318857.jpg"
            alt="Imagen de contacto"
            borderRadius="50%"
            width="50px"
            height="50px"
            display="inline-block"
            marginRight="10px"
            verticalAlign="middle"
          ></Image>
          Periodico Digital
        </Link>
      </Flex>
    </Box>
  );
};

export default Home;
