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
            <Heading size="lg" className="capitalize" px="2" height="20">
              {product.name}
            </Heading>
            <Text color="black" fontSize="2xl" px="2">
              ${product.price} x unidad
            </Text>
          </Stack>
        </CardBody>
      </Link>
      <CardFooter px="10">
        <Button variant="solid" colorScheme="pink">
          Agregar al carrito
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Item;
