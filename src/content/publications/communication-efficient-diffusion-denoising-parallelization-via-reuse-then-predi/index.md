---
date: 2025-12-02
title: "Communication-Efficient Diffusion Denoising Parallelization via Reuse-then-Predict Mechanism"
authors: "Kunyun Wang, Bohan Li, Kai Yu, Minyi Guo, Jieru Zhao*"
venue: "NeurIPS 2025, the 39th Annual Conference on Neural Information Processing Systems"
topics:
  - level: "algorithm"
    name: "Diffusion Model"
  - level: "system"
    name: "Distributed Inference"
  - level: "system"
    name: "Parallelization"
links:
  - label: "Paper"
    href: "https://openreview.net/forum?id=ODCHMTXKHO"
  - label: "Code"
    href: "https://github.com/sjtu-zhao-lab/ParaStep"
---

## Abstract

ParaStep accelerates diffusion-model inference through a reuse-then-predict parallelization strategy. By exploiting similarity between adjacent denoising steps and using lightweight step-wise communication, it reduces synchronization overhead while maintaining generation quality across image, video, and audio diffusion workloads.
