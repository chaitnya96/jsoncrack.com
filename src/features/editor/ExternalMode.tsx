import React from "react";
import { Code, Modal, Text } from "@mantine/core";

const ExternalMode = () => {
  const [isExternal, setExternal] = React.useState(false);

  React.useEffect(() => {
    if (import.meta.env.VITE_DISABLE_EXTERNAL_MODE === "true") {
      setExternal(false);
    }
  }, []);

  if (!isExternal) return null;

  return (
    <Modal
      title="Configuration"
      opened={isExternal}
      onClose={() => setExternal(false)}
      centered
      size="sm"
    >
      <Text size="sm">
        You can configure the editor by setting environment variables in your{" "}
        <Code>.env</Code> file:
      </Text>
      <br />
      <Text size="xs" c="dimmed">
        <Code>VITE_NODE_LIMIT</Code> - Maximum nodes to render (default: 8000)
        <br />
        <Code>VITE_DISABLE_EXTERNAL_MODE</Code> - Disable this dialog
      </Text>
    </Modal>
  );
};

export default ExternalMode;