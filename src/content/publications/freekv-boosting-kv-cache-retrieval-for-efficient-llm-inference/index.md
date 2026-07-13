---
date: 2026-04-23
title: "FreeKV: Boosting KV Cache Retrieval for Efficient LLM Inference"
authors: "Guangda Liu, Chengwei Li, Zhenyu Ning, Jing Lin, Yiwu Yao, Danning Ke, Minyi Guo and Jieru Zhao*"
venue: "ICLR 2026, the 14th International Conference on Learning Representations"
topics:
  - "llm"
  - "kv-cache"
  - "retrieval"
  - "llm-inference"
links:
  - label: "Paper"
    href: "https://openreview.net/forum?id=wXAn7orB1H"
  - label: "Code"
    href: "https://github.com/sjtu-zhao-lab/FreeKV"
---

## Abstract

FreeKV is an algorithm-system co-optimization framework for efficient KV-cache retrieval in long-context LLM inference. It moves KV selection out of the critical path through speculative retrieval, applies fine-grained correction for accuracy, and uses hybrid CPU-GPU layouts with streamed recall to reduce latency.
