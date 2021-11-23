import { Box, Divider } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Intro } from "../components/Sections/Intro";
import { GeneralOrientations } from "../components/Sections/GeneralOrientations";
import { RequisitesOrientations } from "../components/Sections/RequisitesOrientations";
import { StepByStepPrimer } from "../components/Sections/StepByStepPrimer";
import { Simulation } from "../components/Sections/Simulation";
import { ContatcUs } from "../components/Sections/ContactUs";

export default function Home() {
  return (
    <Box>
      <Header />
      <Intro />
      <Divider />
      <GeneralOrientations />
      <Divider />
      <RequisitesOrientations />
      <Divider />
      <StepByStepPrimer />
      <Divider />
      <ContatcUs />
    </Box>
  )
}
