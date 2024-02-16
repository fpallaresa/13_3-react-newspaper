import React from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Button,
  Flex,
  Box,
  Text,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

const Noticias = () => {
  const { topics } = useParams();
  const [news, setNews] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [searchText, setSearchText] = React.useState("");

  const topicsTranslations = {
    sport: "Deportes",
    economics: "Economía",
    tech: "Tecnología",
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://raw.githubusercontent.com/The-Valley-School/react-w5-newspaper/main/api/${topics}/${page}.json`
        );
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [topics, page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Container
      display="flex"
      flexDirection="column"
      alignItems="left"
      maxWidth="1200px"
      width="75%"
      margin="auto"
    >
      <Heading as="h1" size="lg" marginBottom="40px" textAlign="left">
        {topicsTranslations[topics]}
      </Heading>

      <InputGroup marginBottom="20px">
        <Input
          placeholder="Filtrar noticias por título"
          value={searchText}
          onChange={handleSearchChange}
        />
        <InputRightElement>
          {searchText === "" ? (
            ""
          ) : (
            <Text onClick={() => setSearchText("")}>&times;</Text>
          )}
        </InputRightElement>
      </InputGroup>

      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        textAlign="left"
        marginBottom="40px"
      >
        {filteredNews.map((item) => (
          <Box
            key={item?._id}
            width="calc(50% - 10px)"
            borderWidth="1px"
            borderRadius="lg"
            p="4"
            my="2"
          >
            <Image src={item?.media} width="100%" marginBottom="10px"></Image>
            <Heading as="h2" size="md" marginBottom="10px">
              {item?.title}
            </Heading>
            <Text marginBottom="25px" fontStyle="oblique">
              {item?.excerpt}
            </Text>
            <Text fontSize="sm" marginBottom="25px">
              {new Date(item?.published_date).toLocaleDateString("es-ES")} - {item?.topic}
            </Text>
            <a href={item?.link} target="_blank" rel="noreferrer">
              <Button>Leer noticia completa</Button>
            </a>
          </Box>
        ))}
      </Flex>

      <Flex
        justify="space-between"
        marginBottom="40px"
        alignItems="center"
        mt="4"
      >
        <Button
          onClick={() => handlePageChange(page - 1)}
          isDisabled={page === 1}
        >
          Anterior
        </Button>
        <Text>{`Página ${page} de 5`}</Text>
        <Button
          onClick={() => handlePageChange(page + 1)}
          isDisabled={page === 5}
        >
          Siguiente
        </Button>
      </Flex>
    </Container>
  );
};

export default Noticias;
