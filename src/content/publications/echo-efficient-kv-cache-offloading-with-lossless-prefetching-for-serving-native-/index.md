---
date: 2026-07-13
title: "ECHO: Efficient KV Cache Offloading with Lossless Prefetching for Serving Native Sparse Attention LLMs"
authors: "Guangda Liu, Wenhao Chen, Chengwei Li, Zhenyu Ning, Jing Lin, Yiwu Yao, Quan Chen, Shixuan Sun, Jieru Zhao* and Minyi Guo"
venue: "OSDI 2026, the 20th USENIX Symposium on Operating Systems Design and Implementation"
topics:
  - "llm"
  - "sparse-attention"
  - "kv-cache"
  - "offloading"
  - "llm-inference"
links:
  - label: "Paper"
    href: "https://www.usenix.org/conference/osdi26/presentation/liu-guangda"
  - label: "Code"
    href: "https://github.com/sjtu-zhao-lab/ECHO"
---

## Abstract

ECHO is a KV-cache offloading system for serving LLMs with native sparse attention. It uses lossless prefetching to move required KV data between memory tiers before attention computation needs it, reducing GPU memory pressure without changing model outputs.
