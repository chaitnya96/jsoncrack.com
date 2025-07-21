import React from "react";
import { Menu, Flex } from "@mantine/core";
import toast from "react-hot-toast";
import { CgChevronDown } from "react-icons/cg";
import { FaRandom } from "react-icons/fa";
import { MdFilterListAlt } from "react-icons/md";
import { SiJsonwebtokens } from "react-icons/si";
import { VscSearchFuzzy, VscJson, VscGroupByRefType } from "react-icons/vsc";
import { useModal } from "../../../store/useModal";
import { StyledToolElement } from "./styles";

export const ToolsMenu = () => {
  const setVisible = useModal(state => state.setVisible);

  const randomizeData = async () => {
    toast.error("Mock data generation is not available");
  };

  return (
    <Menu shadow="md" withArrow>
      <Menu.Target>
        <StyledToolElement>
          <Flex align="center" gap={3}>
            Tools <CgChevronDown />
          </Flex>
        </StyledToolElement>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          fz={12}
          leftSection={<VscSearchFuzzy />}
          onClick={() => {
            setVisible("JQModal", true);
          }}
        >
          JSON Query (jq)
        </Menu.Item>
        <Menu.Item
          fz={12}
          leftSection={<VscJson />}
          onClick={() => {
            setVisible("SchemaModal", true);
          }}
        >
          JSON Schema
        </Menu.Item>
        <Menu.Item
          fz={12}
          leftSection={<MdFilterListAlt />}
          onClick={() => {
            setVisible("JPathModal", true);
          }}
        >
          JSON Path
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item
          fz={12}
          leftSection={<SiJsonwebtokens />}
          onClick={() => {
            setVisible("JWTModal", true);
          }}
        >
          Decode JWT
        </Menu.Item>
        <Menu.Item
          fz={12}
          leftSection={<VscGroupByRefType />}
          onClick={() => {
            setVisible("TypeModal", true);
          }}
        >
          Generate Type
        </Menu.Item>
        <Menu.Item fz={12} leftSection={<FaRandom />} onClick={randomizeData}>
          Randomize Data
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
