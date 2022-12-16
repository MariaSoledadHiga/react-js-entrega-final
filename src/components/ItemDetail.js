// import ItemCount from "./ItemCount";
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

const ItemDetail = ({ product }) => {
  return (
    <>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={product.imgUrl}
          alt={product.name}
        />

        <Stack>
          <CardBody>
            <Heading size="md">{product.name}</Heading>

            <Text py="2">{product.detail}</Text>
            <Text color="black" fontSize="2xl">
              ${product.price} x unidad
            </Text>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="pink">
              Agregar al carrito
            </Button>
          </CardFooter>
        </Stack>
      </Card>
      {/* <ItemCount stock={8} initial={1} /> */}
    </>
  );
};

export default ItemDetail;
