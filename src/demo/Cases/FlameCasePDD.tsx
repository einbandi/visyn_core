import React from 'react';

import CimeFlameTree from './CimeFlameTree';
import uniq from 'lodash/uniq';
import map from 'lodash/map';
import { ParameterColumn } from '../FlameTree/math';

const { ExampleDataPDD } = await import('./case_study_pdd');

// export default function FlameCase1() {
//   const columnKeys = React.useMemo(() => ['category', 'subcategory'], []);

//   const definitions = React.useMemo(() => {
//     return [
//       {
//         key: 'category',
//         domain: uniq(map(ExampleCase, 'category')),
//         type: 'categorical',
//       },
//       {
//         key: 'subcategory',
//         domain: uniq(map(ExampleCase, 'subcategory')),
//         type: 'categorical',
//       },
//       {
//         key: 'coolness',
//         domain: [0, 100],
//         type: 'numerical',
//       }
//     ] as ParameterColumn[];
//   }, [columnKeys]);

export default function FlameCase1() {
  const columnKeys = React.useMemo(() => [
    'AI_F',
    // 'AI_H',
    'MolWeight_(mean)',
    'VTR',
    // 'PICa1_SEPTTR_FPRIM_CT_(median)',
    // 'PICa2_SEPTTR_PRO_from_FPRIM_H2L_and_L2P_(median)',
    // 'PICa3_SEPTTR PRO_FGV1_FGV2_FCER1_and_FCSPEC_M_(median)',
    'Available',
    ], []);

  // "": 912,
  // "AI_H": -1,
  // "Compound_No": "BCS-DA51393",
  // "FPRIM_CT_L_SEPTTR_ED50_Median_NoPrefix": 6.0e-3,
  // "MolWeight_(mean)": 3.1976e2,
  // "PICa1_SEPTTR_FPRIM_CT_(median)": 99,
  // "PICa2_SEPTTR_PRO_from_FPRIM_H2L_and_L2P_(median)": 180,
  // "PICa3_SEPTTR PRO_FGV1_FGV2_FCER1_and_FCSPEC_M_(median)": 188,
  // "VTR": 79,
  // "DScore": 0.8886696016880077

  const definitions = React.useMemo(() => {
    return [
      {
        key: 'AI_F',
        domain: [
          Math.min.apply(null, map(ExampleDataPDD, 'AI_F')),
          Math.max.apply(null, map(ExampleDataPDD, 'AI_F'))
        ],
        type: 'numerical',
      },
      // {
      //   key: 'AI_H',
      //   domain: [
      //     Math.min.apply(null, map(ExampleDataPDD, 'AI_H')),
      //     Math.max.apply(null, map(ExampleDataPDD, 'AI_H'))
      //   ],
      //   type: 'numerical',
      // },
      {
        key: 'MolWeight_(mean)',
        domain: [
          Math.min.apply(null, map(ExampleDataPDD, 'MolWeight_(mean)')),
          Math.max.apply(null, map(ExampleDataPDD, 'MolWeight_(mean)'))
        ],
        type: 'numerical',
      },
      {
        key: 'VTR',
        domain: [
          Math.min.apply(null, map(ExampleDataPDD, 'VTR')),
          Math.max.apply(null, map(ExampleDataPDD, 'VTR'))],
        type: 'numerical',
      },
      // {
      //   key: 'PICa1_SEPTTR_FPRIM_CT_(median)',
      //   domain: [
      //     Math.min.apply(null, map(ExampleDataPDD, 'PICa1_SEPTTR_FPRIM_CT_(median)')),
      //     Math.max.apply(null, map(ExampleDataPDD, 'PICa1_SEPTTR_FPRIM_CT_(median)'))],
      //   type: 'numerical',
      // },
      // {
      //   key: 'PICa2_SEPTTR_PRO_from_FPRIM_H2L_and_L2P_(median)',
      //   domain: [
      //     Math.min.apply(null, map(ExampleDataPDD, 'PICa2_SEPTTR_PRO_from_FPRIM_H2L_and_L2P_(median)')),
      //     Math.max.apply(null, map(ExampleDataPDD, 'PICa2_SEPTTR_PRO_from_FPRIM_H2L_and_L2P_(median)'))],
      //   type: 'numerical',
      // },
      // {
      //   key: 'PICa3_SEPTTR PRO_FGV1_FGV2_FCER1_and_FCSPEC_M_(median)',
      //   domain: [
      //     Math.min.apply(null, map(ExampleDataPDD, 'PICa3_SEPTTR PRO_FGV1_FGV2_FCER1_and_FCSPEC_M_(median)')),
      //     Math.max.apply(null, map(ExampleDataPDD, 'PICa3_SEPTTR PRO_FGV1_FGV2_FCER1_and_FCSPEC_M_(median)'))],
      //   type: 'numerical',
      // },
      {
        key: 'Available',
        domain: ["Yes", "No"],
        type: 'categorical',
      }
    ] as ParameterColumn[];
  }, [columnKeys]);

  return <CimeFlameTree dataset={ExampleDataPDD} definitions={definitions} mode="experiment" />;
}
