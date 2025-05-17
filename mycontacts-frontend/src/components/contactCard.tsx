import React from "react";
import type { Contact } from "../types";
import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";

interface ContactCardProps {
  contact: Contact;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  return (
    <Box
      p={3}
      bg="pink.400"
      borderRadius="lg"
      boxShadow="md"
      _hover={{ boxShadow: "lg" }}
      transition="box-shadow 0.2s"
      key={contact._id}
      marginBottom={2}
    >
      <Flex alignItems={"center"}>
        <Avatar.Root shape="full" size="xl">
          <Avatar.Fallback name="Random User" />
          <Avatar.Image src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04" />
        </Avatar.Root>

        <Flex direction="column" ml={2}>
          <Heading as="h2" size="md" color="gray.800">
            {contact.name}
          </Heading>
          <Text>
            {contact.email} - {contact.phone}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ContactCard;
