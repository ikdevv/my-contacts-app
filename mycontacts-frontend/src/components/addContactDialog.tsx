import { addContact } from "@/api/contact.api";
import type { Contact } from "@/types";
import {
  Button,
  CloseButton,
  Dialog,
  Field,
  HStack,
  Input,
  Portal,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { toaster } from "./ui/toaster";

const AddContactDialog = () => {
  const [contact, setContact] = useState<Contact>({
    _id: "",
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = async () => {
    try {
      const response = addContact(contact);
      console.log(response);
      toaster.create({
        title: "Contact Added",
        description: "Contacet created successfully",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <HStack wrap="wrap" gap="4">
      <Dialog.Root placement={"center"} motionPreset="slide-in-bottom">
        <Dialog.Trigger asChild>
          <Button>Add Contact</Button>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Add a contact</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <Stack gap="4">
                  <Field.Root>
                    <Field.Label>Name</Field.Label>
                    <Input
                      placeholder="John Doe"
                      value={contact.name}
                      onChange={(e) =>
                        setContact({ ...contact, name: e.target.value })
                      }
                    />
                  </Field.Root>
                  <Field.Root>
                    <Field.Label>Phone</Field.Label>
                    <Input
                      placeholder="077 77 77 770"
                      value={contact.phone}
                      onChange={(e) =>
                        setContact({ ...contact, phone: e.target.value })
                      }
                    />
                  </Field.Root>
                  <Field.Root>
                    <Field.Label>Email</Field.Label>
                    <Input
                      placeholder="me@example.com"
                      value={contact.email}
                      onChange={(e) =>
                        setContact({ ...contact, email: e.target.value })
                      }
                    />
                  </Field.Root>
                </Stack>
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </Dialog.ActionTrigger>
                <Button onClick={handleSubmit}>Add</Button>
              </Dialog.Footer>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </HStack>
  );
};

export default AddContactDialog;
