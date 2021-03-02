'use strict';

compute_pressure_test(async t => {
  const obs = await navigator.deviceCompute.query();
  await new Promise((resolve) => {
    obs.onupdate =
        (e) => {
          assert_greater_than_equal(
              e.cpuUtilization, 0,
              'CPU Utilization is greater or equal to zero');
          assert_greater_than_equal(
              e.cpuSpeedLimit, 0,
              'CPU Utilization is greater or equal to zero');
          resolve();
        }
  });
}, 'query(): returns cpu data');
