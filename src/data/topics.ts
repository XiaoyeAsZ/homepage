export type TopicLevel = "algorithm" | "system" | "compiler" | "arch";

export type ResearchAreaId =
  | "llm-inference"
  | "compiler-optimization"
  | "sparse-attention"
  | "multimodal-video-ai"
  | "kv-cache"
  | "diffusion-models"
  | "data-systems"
  | "hardware-design-automation"
  | "accelerator-architecture"
  | "graphics-vision-systems"
  | "robotics-autonomy";

export type TopicId = keyof typeof topicCatalog;

type ResearchArea = {
  id: ResearchAreaId;
  name: string;
  type: TopicLevel;
  topics: string[];
};

type Topic = {
  name: string;
  level: TopicLevel;
  area: ResearchAreaId;
};

export const researchAreaCatalog = [
  {
    id: "llm-inference",
    name: "Efficient LLM inference",
    type: "system",
    topics: ["llm", "llm-inference", "streaming-inference", "distributed-inference"],
  },
  {
    id: "compiler-optimization",
    name: "Compiler optimization for accelerators",
    type: "compiler",
    topics: [
      "mlir",
      "dataflow-compilation",
      "compiler-automation",
      "operator-optimization",
      "performance-modeling",
      "mapping",
      "compiler-plugin",
    ],
  },
  {
    id: "sparse-attention",
    name: "Sparse attention acceleration",
    type: "arch",
    topics: ["sparse-attention", "asic", "accelerator", "hardware-software-co-design"],
  },
  {
    id: "multimodal-video-ai",
    name: "Multimodal and video AI",
    type: "algorithm",
    topics: ["vlm", "video-understanding", "vision"],
  },
  {
    id: "kv-cache",
    name: "KV cache systems",
    type: "system",
    topics: ["kv-cache", "retrieval", "offloading", "memory-compression"],
  },
  {
    id: "diffusion-models",
    name: "Diffusion model acceleration",
    type: "system",
    topics: ["dit", "diffusion-model", "parallelization", "redundancy-reduction"],
  },
  {
    id: "data-systems",
    name: "Disaggregated data analytics",
    type: "system",
    topics: ["disaggregated-systems", "olap", "heterogeneous-computing", "memory"],
  },
  {
    id: "hardware-design-automation",
    name: "Hardware design automation",
    type: "compiler",
    topics: [
      "verilog-generation",
      "code-generation",
      "hardware-design",
      "hls",
      "qor-prediction",
      "power-modeling",
      "ml-modeling",
      "gnn",
      "cad",
      "placement",
    ],
  },
  {
    id: "accelerator-architecture",
    name: "Accelerator architecture and mapping",
    type: "arch",
    topics: ["fpga", "multi-accelerator", "npu", "npu-optimization", "dnn", "sparse-ir", "sparse-matrix"],
  },
  {
    id: "graphics-vision-systems",
    name: "3D vision and Gaussian splatting systems",
    type: "algorithm",
    topics: ["gaussian-splatting", "slam", "streaming-system"],
  },
  {
    id: "robotics-autonomy",
    name: "Robotics and autonomous systems",
    type: "algorithm",
    topics: ["robotics", "action-learning", "latent-policy", "autonomous-driving", "path-planning"],
  },
] as const satisfies readonly ResearchArea[];

export const topicCatalog = {
  accelerator: { name: "Accelerator", level: "arch", area: "accelerator-architecture" },
  "action-learning": { name: "Action Learning", level: "algorithm", area: "robotics-autonomy" },
  asic: { name: "ASIC", level: "arch", area: "sparse-attention" },
  "autonomous-driving": { name: "Autonomous Driving", level: "algorithm", area: "robotics-autonomy" },
  cad: { name: "CAD", level: "arch", area: "hardware-design-automation" },
  "code-generation": { name: "Code Generation", level: "compiler", area: "hardware-design-automation" },
  "compiler-automation": { name: "Compiler Automation", level: "compiler", area: "compiler-optimization" },
  "compiler-plugin": { name: "Compiler Plugin", level: "compiler", area: "compiler-optimization" },
  "dataflow-compilation": { name: "Dataflow Compilation", level: "compiler", area: "compiler-optimization" },
  dit: { name: "DiT", level: "algorithm", area: "diffusion-models" },
  "diffusion-model": { name: "Diffusion Model", level: "algorithm", area: "diffusion-models" },
  "disaggregated-systems": { name: "Disaggregated Systems", level: "system", area: "data-systems" },
  "distributed-inference": { name: "Distributed Inference", level: "system", area: "llm-inference" },
  dnn: { name: "DNN", level: "algorithm", area: "accelerator-architecture" },
  fpga: { name: "FPGA", level: "arch", area: "accelerator-architecture" },
  "gaussian-splatting": { name: "Gaussian Splatting", level: "algorithm", area: "graphics-vision-systems" },
  gnn: { name: "GNN", level: "algorithm", area: "hardware-design-automation" },
  "hardware-design": { name: "Hardware Design", level: "arch", area: "hardware-design-automation" },
  "hardware-software-co-design": { name: "Hardware-Software Co-Design", level: "system", area: "sparse-attention" },
  "heterogeneous-computing": { name: "Heterogeneous Computing", level: "arch", area: "data-systems" },
  hls: { name: "HLS", level: "compiler", area: "hardware-design-automation" },
  "kv-cache": { name: "KV Cache", level: "algorithm", area: "kv-cache" },
  "latent-policy": { name: "Latent Policy", level: "algorithm", area: "robotics-autonomy" },
  llm: { name: "LLM", level: "algorithm", area: "llm-inference" },
  "llm-inference": { name: "LLM Inference", level: "system", area: "llm-inference" },
  "memory-compression": { name: "Memory Compression", level: "system", area: "kv-cache" },
  memory: { name: "Memory", level: "arch", area: "data-systems" },
  "ml-modeling": { name: "ML Modeling", level: "algorithm", area: "hardware-design-automation" },
  mlir: { name: "MLIR", level: "compiler", area: "compiler-optimization" },
  mapping: { name: "Mapping", level: "compiler", area: "compiler-optimization" },
  "multi-accelerator": { name: "Multi-Accelerator", level: "arch", area: "accelerator-architecture" },
  npu: { name: "NPU", level: "arch", area: "accelerator-architecture" },
  "npu-optimization": { name: "NPU Optimization", level: "system", area: "accelerator-architecture" },
  offloading: { name: "Offloading", level: "system", area: "kv-cache" },
  olap: { name: "OLAP", level: "system", area: "data-systems" },
  "operator-optimization": { name: "Operator Optimization", level: "compiler", area: "compiler-optimization" },
  parallelization: { name: "Parallelization", level: "system", area: "diffusion-models" },
  "path-planning": { name: "Path Planning", level: "algorithm", area: "robotics-autonomy" },
  "performance-modeling": { name: "Performance Modeling", level: "compiler", area: "compiler-optimization" },
  placement: { name: "Placement", level: "arch", area: "hardware-design-automation" },
  "power-modeling": { name: "Power Modeling", level: "compiler", area: "hardware-design-automation" },
  "qor-prediction": { name: "QoR Prediction", level: "compiler", area: "hardware-design-automation" },
  "redundancy-reduction": { name: "Redundancy Reduction", level: "system", area: "diffusion-models" },
  retrieval: { name: "Retrieval", level: "algorithm", area: "kv-cache" },
  robotics: { name: "Robotics", level: "algorithm", area: "robotics-autonomy" },
  slam: { name: "SLAM", level: "algorithm", area: "graphics-vision-systems" },
  "sparse-attention": { name: "Sparse Attention", level: "algorithm", area: "sparse-attention" },
  "sparse-ir": { name: "Sparse IR", level: "compiler", area: "accelerator-architecture" },
  "sparse-matrix": { name: "Sparse Matrix", level: "compiler", area: "accelerator-architecture" },
  "streaming-inference": { name: "Streaming Inference", level: "system", area: "llm-inference" },
  "streaming-system": { name: "Streaming System", level: "system", area: "graphics-vision-systems" },
  "verilog-generation": { name: "Verilog Generation", level: "compiler", area: "hardware-design-automation" },
  "video-understanding": { name: "Video Understanding", level: "algorithm", area: "multimodal-video-ai" },
  vision: { name: "Vision", level: "algorithm", area: "multimodal-video-ai" },
  vlm: { name: "VLM", level: "algorithm", area: "multimodal-video-ai" },
} as const satisfies Record<string, Topic>;

export const researchAreas = researchAreaCatalog.map((area) => ({
  name: area.name,
  type: area.type,
}));

export const resolvePublicationTopics = (topicIds: string[]) =>
  topicIds.map((id) => {
    const topic = topicCatalog[id as TopicId];

    if (!topic) {
      throw new Error(`Unknown publication topic: ${id}`);
    }

    return {
      id,
      ...topic,
    };
  });
