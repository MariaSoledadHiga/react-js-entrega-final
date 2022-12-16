import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
const Item = ({ product }) => {
  return (
    <Card maxW="sm">
      <Link to={`/item/${product.id}`}>
        <CardBody>
          <Image src={product.imgUrl} alt={product.name} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{product.name}</Heading>
            <Text color="black" fontSize="2xl">
              ${product.price} x unidad
            </Text>
          </Stack>
        </CardBody>
      </Link>
      <CardFooter>
        <Button variant="solid" colorScheme="pink">
          Agregar al carrito
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Item;
