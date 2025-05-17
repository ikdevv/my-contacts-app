import { Route, Routes } from "react-router";
import { Toaster } from "@/components/ui/toaster";
import { Box, Container, Flex } from "@chakra-ui/react";
import AllContacts from "./pages/allContacts";
import Navbar from "./components/navbar";
import AllImages from "./pages/allImages";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <Container>
      <Box>
        <Navbar />
        <Flex>
          {/* sidebar */}
          <Box flexBasis="25%" paddingRight={2}>
            <Sidebar />
          </Box>
          {/* feed */}
          <Box flexBasis="50%" marginInline={2}>
            <Routes>
              <Route path="/" element={<AllContacts />} />
              <Route path="/images" element={<AllImages />} />
            </Routes>
          </Box>
          {/* rightbar */}
          <Box flexBasis="25%" paddingLeft={2}>
            Rightbar
          </Box>
        </Flex>
      </Box>
      <Toaster />
    </Container>
  );
}

export default App;
