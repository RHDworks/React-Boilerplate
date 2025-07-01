import React from "react";
import { isEnvBrowser } from "./utils/misc";
import { MantineProvider } from "@mantine/core";

import DefaultApp from "./App/DefaultApp";
import DebugButton from "./dev/buttons";

import { theme } from "./theme";

const App: React.FC = () => {
    return <>
        <MantineProvider theme={theme} defaultColorScheme="dark">
            <div className='w-screen h-screen'>
                <DefaultApp />

                {isEnvBrowser() && (
                    <DebugButton />
                )}
            </div>
        </MantineProvider>
    </>
}

export default App