---
date: 2026-07-26
title: "LiveVLM: Efficient Online Video Understanding via Streaming-Oriented KV Cache and Retrieval"
authors: "Zhenyu Ning, Guangda Liu, Qihao Jin, Chengwei Li, Wenchao Ding, Minyi Guo and Jieru Zhao*"
venue: "DAC 2026, the 63rd IEEE/ACM Design Automation Conference"
topics:
  - level: "algorithm"
    name: "VLM"
  - level: "algorithm"
    name: "Video Understanding"
  - level: "algorithm"
    name: "KV Cache"
  - level: "system"
    name: "Streaming Inference"
  - level: "system"
    name: "LLM Inference"
links:
  - label: "Paper"
    href: "https://arxiv.org/abs/2505.15269"
  - label: "Code"
    href: "https://github.com/sjtu-zhao-lab/LiveVLM"
---

## Abstract

LiveVLM enables efficient online video understanding for video-language models. It builds a streaming-oriented KV cache that incrementally stores and compresses visual context, then retrieves short-term and long-term video information when questions arrive to support responsive interaction over long video streams.
