
import React, {useState} from "react";
import { Button, SimpleGrid } from "@mantine/core";
import { debugData } from "../utils/debugData";

const DebugButton: React.FC = () => {
    const [visible, setVisible] = useState(false);

    return <>
        <div className="fixed bottom-4 ml-5">
            <SimpleGrid verticalSpacing='xs'>
                <Button variant="filled" bg='dark' c='var(--mantine-color-dark-1)' onClick={() => {
                    const visibility = !visible
        
                    setVisible(visibility)
                    
                    debugData([
                        {
                            action: 'setVisible',
                            data: {
                                visible: visibility
                            }
                        }
                    ])
                }}>
                    Toggle Visible
                </Button>
            </SimpleGrid>
        </div>
    </>
}

export default DebugButton