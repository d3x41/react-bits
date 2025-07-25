import { useState } from "react";
import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box } from "@chakra-ui/react";

import Customize from "../../components/common/Preview/Customize";
import CodeExample from "../../components/code/CodeExample";
import PreviewSlider from "../../components/common/Preview/PreviewSlider";
import PreviewSwitch from "../../components/common/Preview/PreviewSwitch";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/Preview/PropTable";
import Dependencies from '../../components/code/Dependencies';
import BackgroundContent from "../../components/common/Preview/BackgroundContent";

import Threads from "../../content/Backgrounds/Threads/Threads";
import { threads } from "../../constants/code/Backgrounds/threadsCode";

const ThreadsDemo = () => {
  const [amplitude, setAmplitude] = useState(1);
  const [distance, setDistance] = useState(0);
  const [enableMouseInteraction, setEnableMouseInteraction] = useState(true);

  const propData = [
    {
      name: "color",
      type: "[number, number, number]",
      default: "[1, 1, 1]",
      description: "Customizes the color of the lines (RGB)."
    },
    {
      name: "amplitude",
      type: "number",
      default: "1",
      description: "Adjusts the intensity of the wave effect on the lines."
    },
    {
      name: "distance",
      type: "number",
      default: "0",
      description: "Controls the spacing between the lines. A value of 0 means no offset."
    },
    {
      name: "enableMouseInteraction",
      type: "boolean",
      default: "false",
      description: "Enables smooth mouse hover effects that modulate the line's movement and amplitude."
    }
  ];


  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" h={600} overflow="hidden" p={0}>
          <Threads
            amplitude={amplitude}
            distance={distance}
            enableMouseInteraction={enableMouseInteraction}
          />

          {/* For Demo Purposes Only */}
          <BackgroundContent
            pillText="New Background"
            headline="Not to be confused with the Threads app by Meta!"
          />
        </Box>

        <Customize>
          <PreviewSlider
            title="Amplitude"
            min={0}
            max={5}
            step={0.1}
            value={amplitude}
            onChange={(val) => {
              setAmplitude(val);
            }}
          />

          <PreviewSlider
            title="Distance"
            min={0}
            max={2}
            step={0.1}
            value={distance}
            onChange={(val) => {
              setDistance(val);
            }}
          />

          <PreviewSwitch title="Enable Mouse Interaction" isChecked={enableMouseInteraction} onChange={(checked) => { setEnableMouseInteraction(checked); }} />
        </Customize>

        <PropTable data={propData} />
        <Dependencies dependencyList={['ogl']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={threads} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...threads} />
      </CliTab>
    </TabbedLayout>
  );
};

export default ThreadsDemo;