import case_1 from "./use_cases/case_1";
import case_2 from "./use_cases/case_2";
import case_3 from "./use_cases/case_3";
import solution from "./solution";
import { BenchmarkRunner } from "../../utils/BenchmarkRunner";

const cases = [case_1, case_2, case_3];

new BenchmarkRunner(solution).run(cases);