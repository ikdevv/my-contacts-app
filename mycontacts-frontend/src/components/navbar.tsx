import { Box, Flex, Heading, Input, InputGroup, Kbd } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import DarkModeToggle from "./darkModeToggle";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between my-3">
      <Heading>MyContacts</Heading>
      <Box padding={5}>
        <Flex>
          <InputGroup
            flex="1"
            startElement={<LuSearch />}
            endElement={<Kbd>⌘K</Kbd>}
          >
            <Input placeholder="Search contacts" />
          </InputGroup>
        </Flex>
      </Box>
      <Box>
        <DarkModeToggle />
      </Box>
    </div>
  );
};

export default Navbar;
