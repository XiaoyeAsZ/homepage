---
date: 2025-06-22
title: "ClusterKV: Manipulating LLM KV Cache in Semantic Space for Recallable Compression"
authors: "Guangda Liu, Chengwei Li, Jieru Zhao*, Chenqi Zhang and Minyi Guo"
venue: "DAC 2025, the 62nd IEEE/ACM Design Automation Conference"
topics:
  - level: "algorithm"
    name: "LLM"
  - level: "algorithm"
    name: "KV Cache"
  - level: "system"
    name: "LLM Inference"
  - level: "system"
    name: "Memory Compression"
links:
  - label: "Paper"
    href: "https://dl.acm.org/doi/10.1109/DAC63849.2025.11132479"
  - label: "Code"
    href: "https://github.com/sjtu-zhao-lab/ClusterKV"
---

## Abstract

ClusterKV compresses long-context LLM KV caches by organizing tokens into semantic clusters that can be recalled later. This recallable compression strategy reduces memory and attention latency while preserving model quality better than approaches that permanently evict tokens or recall only by fixed positional pages.
