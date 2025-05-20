"use client";

import { Container } from "./styles";
import { Topbar } from "app/components/topbar/Topbar";
import ResultsTable from "@app/components/results-table/ResultsTable";

export default function Page() {
  return (
    <Container>
      <Topbar />
      <p>Inicio</p>
      <ResultsTable />
    </Container>
  );
}
