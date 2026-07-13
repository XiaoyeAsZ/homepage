---
date: 2024-03-25
title: "Hierarchical Source-to-Post-Route QoR Prediction in High-Level Synthesis with GNNs"
authors: "Mingzhe Gao, Jieru Zhao*, Zhe Lin, Minyi Guo"
venue: "DATE 2024, Design, Automation and Test in Europe Conference"
topics:
  - "gnn"
  - "hls"
  - "qor-prediction"
  - "fpga"
  - "cad"
links:
  - label: "Paper"
    href: "https://ieeexplore.ieee.org/document/10546555/"
  - label: "Code"
    href: "https://github.com/sjtu-zhao-lab/hierarchical-gnn-for-hls"
---

## Abstract

This paper predicts post-route HLS quality-of-result metrics directly from source programs using hierarchical graph neural networks. By modeling control/data-flow structure, HLS pragmas, and loop hierarchy, it estimates latency and resource usage early enough to guide design-space exploration without repeatedly running full implementation flows.
