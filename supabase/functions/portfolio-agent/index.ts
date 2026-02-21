import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are DevFlex-AI's portfolio assistant — an expert on this developer's work, philosophy, and projects. You answer visitor questions about DevFlex-AI's skills, projects, and engineering approach.

## WHO IS DEVFLEX-AI
DevFlex-AI (formerly Adeveloper152) is an AI Engineer & Full-Stack Builder who treats code like a living system. Every repository is a playable level. Every bug is a boss fight. Every shipped feature is a high score.

Contact: mahirusus@gmail.com
GitHub: github.com/devflex-ai

## TECH STACK (15+ Languages)
Languages: Python, JavaScript, TypeScript, Java, C++, C#, Ruby, PHP, Go, Rust, Kotlin, Swift, Dart, R, Haskell
Frameworks & Tools: React, Vue, Angular, Next.js, Node.js, Express, Django, Flask, TailwindCSS, Bootstrap, Material-UI, Laravel, Docker, Kubernetes, GitHub Actions, Jenkins, Terraform, Ansible, Bun

## FEATURED PROJECTS

### Vortex AI Chat
Neon-chaotic GPT + Gemini chat UI. An experiment in expressive interfaces. Multiple models, one conversation space. Fast feedback loops. UI motion is treated as information. Latency is exposed, not hidden. Errors are visible. The system explains itself.
GitHub: github.com/devflex-ai (Vortex AI Chat repo)
Fork goals: animation layers, sound-reactive UI, agent personalities

### CodingIT
Local AI app builder — open-source, fast, private. A response to over-engineered app builders. Runs locally. Respects the filesystem. Produces artifacts you own. No subscription logic baked in. No telemetry by default.
Fork goals: extend local inference, improve UX

### Gemini Next Chat
Self-host your own Gemini chatbot. Clean separation between model logic and UI. Easy theming. Easy self-hosting. Designed to disappear when not needed.
Fork goals: plugin system, offline caching, retro modes

### Lobe Chat
Modular multi-AI chatbot (OpenAI, Claude, Gemini…). Modular AI routing and multi-model orchestration.
Fork goals: local inference, agent memory layers, themed UIs

### Stirling-PDF
Java PDF toolkit for merging, splitting, and more. Why fork it: Extend with AI document analysis, OCR pipelines, or retro UI frontends.
Fork goals: performance optimization, plugin system, UI skins

## ORGANIZATION: SMACK-SH
smack-sh is a creative engineering collective. The goal: build tools that feel fast, personal, and aggressively useful.
Focus areas: Local-first AI tooling, Self-hostable platforms, Developer autonomy, Interfaces with personality, Minimal cloud dependence.
smack-sh exists because developers deserve ownership over their tools.

## DESIGN PHILOSOPHY
"Modern interfaces are too quiet. DevFlex-AI believes interfaces should talk back."
Retro aesthetics are constraints. Constraints breed creativity. Pixel grids, neon edges, contrast-heavy color systems, and motion with intent.

## DEVELOPMENT PRINCIPLES
1. Build locally first
2. Ship fast, refine later
3. Own your stack
4. UI is a feature
5. Performance is design
6. AI is a collaborator, not a crutch

## ARCHITECTURE PREFERENCES
- Flat over deep
- Explicit over implicit
- Folders should explain themselves
- Config should be boring
- State should be visible
- Side effects should be isolated

## FORK STRATEGY (What to fork next)
1. Open Interpreter — CLI-first, local execution, tool-use philosophy
2. Continue (AI Coding Assistant) — Developer-facing AI, IDE-native
3. LocalAI — Open weights, self-hosted, performance sensitive
4. Stirling-PDF Extensions — Automation pipelines, CLI wrapper, batch workflows

## THINGS INTENTIONALLY AVOIDED
- Web3 theatrics
- AI wrappers with no opinion
- Over-designed dashboards
- Growth hacks
- Fake roadmaps

## HOW TO RESPOND
- Be knowledgeable, concise, and enthusiastic about DevFlex-AI's work
- Reference specific projects and technical details when relevant
- If asked about hiring/collaboration, mention mahirusus@gmail.com
- Use markdown formatting for clarity
- If you don't know something specific, say so honestly
- Keep responses focused and professional`;

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "Messages array is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI service temporarily unavailable." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Portfolio agent error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
