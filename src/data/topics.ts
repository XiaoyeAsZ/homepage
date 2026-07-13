export type TopicType = "algorithm" | "system" | "compiler" | "arch";

type Topic = {
  id: string;
  name: string;
  type: TopicType;
};

export const topics = [
  { id: "accelerator", name: "Accelerator", type: "arch" },
  { id: "action-learning", name: "Action Learning", type: "algorithm" },
  { id: "asic", name: "ASIC", type: "arch" },
  { id: "autonomous-driving", name: "Autonomous Driving", type: "algorithm" },
  { id: "cad", name: "CAD", type: "arch" },
  { id: "code-generation", name: "Code Generation", type: "compiler" },
  { id: "compiler-automation", name: "Compiler Automation", type: "compiler" },
  { id: "compiler-plugin", name: "Compiler Plugin", type: "compiler" },
  { id: "dataflow-compilation", name: "Dataflow Compilation", type: "compiler" },
  { id: "dit", name: "DiT", type: "algorithm" },
  { id: "diffusion-model", name: "Diffusion Model", type: "algorithm" },
  { id: "disaggregated-systems", name: "Disaggregated Systems", type: "system" },
  { id: "distributed-inference", name: "Distributed Inference", type: "system" },
  { id: "dnn", name: "DNN", type: "algorithm" },
  { id: "fpga", name: "FPGA", type: "arch" },
  { id: "gaussian-splatting", name: "Gaussian Splatting", type: "algorithm" },
  { id: "gnn", name: "GNN", type: "algorithm" },
  { id: "hardware-design", name: "Hardware Design", type: "arch" },
  { id: "hardware-software-co-design", name: "Hardware-Software Co-Design", type: "system" },
  { id: "heterogeneous-computing", name: "Heterogeneous Computing", type: "arch" },
  { id: "hls", name: "HLS", type: "compiler" },
  { id: "kv-cache", name: "KV Cache", type: "algorithm" },
  { id: "latent-policy", name: "Latent Policy", type: "algorithm" },
  { id: "llm", name: "LLM", type: "algorithm" },
  { id: "llm-inference", name: "LLM Inference", type: "system" },
  { id: "memory", name: "Memory", type: "arch" },
  { id: "memory-compression", name: "Memory Compression", type: "system" },
  { id: "ml-modeling", name: "ML Modeling", type: "algorithm" },
  { id: "mlir", name: "MLIR", type: "compiler" },
  { id: "mapping", name: "Mapping", type: "compiler" },
  { id: "multi-accelerator", name: "Multi-Accelerator", type: "arch" },
  { id: "npu", name: "NPU", type: "arch" },
  { id: "npu-optimization", name: "NPU Optimization", type: "system" },
  { id: "offloading", name: "Offloading", type: "system" },
  { id: "olap", name: "OLAP", type: "system" },
  { id: "operator-optimization", name: "Operator Optimization", type: "compiler" },
  { id: "parallelization", name: "Parallelization", type: "system" },
  { id: "path-planning", name: "Path Planning", type: "algorithm" },
  { id: "performance-modeling", name: "Performance Modeling", type: "compiler" },
  { id: "placement", name: "Placement", type: "arch" },
  { id: "power-modeling", name: "Power Modeling", type: "compiler" },
  { id: "qor-prediction", name: "QoR Prediction", type: "compiler" },
  { id: "redundancy-reduction", name: "Redundancy Reduction", type: "system" },
  { id: "retrieval", name: "Retrieval", type: "algorithm" },
  { id: "robotics", name: "Robotics", type: "algorithm" },
  { id: "slam", name: "SLAM", type: "algorithm" },
  { id: "sparse-attention", name: "Sparse Attention", type: "algorithm" },
  { id: "sparse-ir", name: "Sparse IR", type: "compiler" },
  { id: "sparse-matrix", name: "Sparse Matrix", type: "compiler" },
  { id: "streaming-inference", name: "Streaming Inference", type: "system" },
  { id: "streaming-system", name: "Streaming System", type: "system" },
  { id: "verilog-generation", name: "Verilog Generation", type: "compiler" },
  { id: "video-understanding", name: "Video Understanding", type: "algorithm" },
  { id: "vision", name: "Vision", type: "algorithm" },
  { id: "vlm", name: "VLM", type: "algorithm" },
] as const satisfies readonly Topic[];

export type TopicId = (typeof topics)[number]["id"];

export const topicCatalog = Object.fromEntries(
  topics.map((topic) => [topic.id, topic]),
) as Record<TopicId, (typeof topics)[number]>;

export const researchAreas = topics.map((topic) => ({
  name: topic.name,
  type: topic.type,
}));

export const resolvePublicationTopics = (topicIds: string[]) =>
  topicIds.map((id) => {
    const topic = topicCatalog[id as TopicId];

    if (!topic) {
      throw new Error(`Unknown publication topic: ${id}`);
    }

    return topic;
  });
