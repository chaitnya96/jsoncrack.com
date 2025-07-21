import { useEffect } from "react";
import { useMantineColorScheme } from "@mantine/core";
import styled, { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Allotment } from "allotment";
import { Toaster } from "react-hot-toast";
import GlobalStyle from "./constants/globalStyle";
import { darkTheme, lightTheme } from "./constants/theme";
import { BottomBar } from "./features/editor/BottomBar";
import { FullscreenDropzone } from "./features/editor/FullscreenDropzone";
import { Toolbar } from "./features/editor/Toolbar";
import useGraph from "./features/editor/views/GraphView/stores/useGraph";
import useConfig from "./store/useConfig";
import useFile from "./store/useFile";
import ModalController from "./features/modals/ModalController";
import ExternalMode from "./features/editor/ExternalMode";
import TextEditor from "./features/editor/TextEditor";
import LiveEditor from "./features/editor/LiveEditor";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export const StyledPageWrapper = styled.div`
  height: 100vh;
  width: 100%;

  @media only screen and (max-width: 320px) {
    height: 100vh;
  }
`;

export const StyledEditorWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const StyledEditor = styled(Allotment)`
  position: relative !important;
  display: flex;
  background: ${({ theme }) => theme.BACKGROUND_SECONDARY};
  height: calc(100vh - 40px);

  @media only screen and (max-width: 320px) {
    height: 100vh;
  }
`;

const StyledTextEditor = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const App = () => {
  const { setColorScheme } = useMantineColorScheme();
  const checkEditorSession = useFile(state => state.checkEditorSession);
  const darkmodeEnabled = useConfig(state => state.darkmodeEnabled);
  const fullscreen = useGraph(state => state.fullscreen);

  useEffect(() => {
    checkEditorSession(undefined);
  }, [checkEditorSession]);

  useEffect(() => {
    setColorScheme(darkmodeEnabled ? "dark" : "light");
  }, [darkmodeEnabled, setColorScheme]);

  return (
    <ThemeProvider theme={darkmodeEnabled ? darkTheme : lightTheme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <ExternalMode />
        <ModalController />
        <StyledEditorWrapper>
          <StyledPageWrapper>
            <Toolbar />
            <StyledEditorWrapper>
              <StyledEditor proportionalLayout={false}>
                <Allotment.Pane
                  preferredSize={450}
                  minSize={fullscreen ? 0 : 300}
                  maxSize={800}
                  visible={!fullscreen}
                >
                  <StyledTextEditor>
                    <TextEditor />
                    <BottomBar />
                  </StyledTextEditor>
                </Allotment.Pane>
                <Allotment.Pane minSize={0}>
                  <LiveEditor />
                </Allotment.Pane>
              </StyledEditor>
              <FullscreenDropzone />
            </StyledEditorWrapper>
          </StyledPageWrapper>
        </StyledEditorWrapper>
        <Toaster position="bottom-right" />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;