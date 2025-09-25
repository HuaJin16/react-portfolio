import React from "react";

class Blog extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          id: 1,
          title:
            "Overcoming Design, Translation, and Workflow Challenges in FormulaMCP",
          date: "Sep 2025",
          summary:
            "FormulaMCP was my first attempt at building an LLM-driven pipeline. What seemed straightforward on paper quickly became a series of design, translation, and consistency challenges that made it clear AI workflows alone are insufficient without detailed, guided intervention.",
          full: [
            "Designing FormulaMCP was far from straightforward. While we successfully built an LLM-based pipeline with FORMULA 2.0 to lift and repair legacy C code, the real story lies in the obstacles we had to navigate along the way.",
            <>
              One of the hardest starting points was figuring out how to
              structure an AI-powered workflow itself. We leaned on existing
              frameworks for inspiration, especially the{" "}
              <a
                href="https://arxiv.org/pdf/2404.10362"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#0078ff",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                3DGen paper (arXiv:2404.10362)
              </a>
              , which outlined a modular, iterative design similar to what we
              envisioned. But borrowing a high-level research pipeline and
              translating it into an operational system was non-trivial.
              Concepts didn’t always map cleanly, and we had to constantly adapt
              the design to fit the reality of FORMULA’s symbolic execution
              model and LangGraph’s state machine semantics. It took multiple
              iterations, diagram rewrites, and prototype breakdowns before we
              had a working agent workflow that made sense both theoretically
              and in code.
            </>,
            "Translating C into FORMULA models proved even more daunting. FORMULA is a Microsoft Research DSL with limited public usage, which means LLMs are almost never trained on its syntax or semantics. Our first attempts failed repeatedly-the models hallucinated constructs or produced invalid code. To bridge this gap, we devised a two-step translation strategy: convert C into Prolog first (a language much better known to LLMs with logical/symbolic overlap), then map Prolog into FORMULA. This pivot language approach gave us traction, and interestingly, the reverse path (FORMULA -> Prolog -> C) also worked better for repair validation. Still, every translation raised the critical question: does the FORMULA model really preserve the semantics of the original C code? Wrestling with this ambiguity was one of the most intellectually difficult parts of the project, because the correctness guarantee had to come from both symbolic execution checks and careful human review.",
            "Even with a clear pipeline, the LLMs themselves (Yi-coder, Qwen2.5-coder, Llama3.2) presented a recurring challenge. Given the same prompt, context, and documentation, they would often generate wildly different translations. Some outputs were incomplete, others hallucinated functions or misapplied FORMULA’s rules. To counter this, we refined our prompting strategy: breaking down instructions into smaller 'dumbed down' steps, reiterating requirements in both system and human prompts, embedding concrete translantion examples, and pulling from the FORMULA manual. Over time, this iterative refinement loop drastically reduced inconsistencies and hallucinations. For the repair stage, in particular, we had to design prompts that taught the LLM FORMULA’s syntax on the fly, then guided it step-by-step through conflict resolution. The result was a more stable pipeline where each LLM understood its exact role, and errors could be systematically corrected.",
            "These struggles made FormulaMCP more than just a technical project. They forced us to blend research translation, symbolic reasoning, and hands-on guidance into a cohesive workflow. The final system not only automated C-to-FORMULA lifting and repair but also taught us how to wrestle with the limitations of LLMs in domains far outside their training data. It was frustrating, often messy, but ultimately rewarding to see a fragile idea harden into a robust pipeline.",
          ],
          expanded: false,
        },
        {
          id: 2,
          title: "Cyber-Physical Systems Trust Paper Submitted for Review",
          date: "Sep 2025",
          summary:
            "Our paper introduces a virtual laboratory for measuring human trust in cyber-physical systems (CPS) through remote video observation. In a user study with ~80 participants, we show how trust can be shaped by merely watching CPS like autonomous vehicles, power plants, and robotic assembly lines perform well or poorly. Results highlight how dispositional, situational, and learned trust evolve in collaborative online settings.",
          link: "https://arxiv.org/abs/2509.10749",
          full: [
            "It was truly an eye-opening experience stepping into the world of computer science research. From grounding myself in the academic foundations (studying how trust is defined and measured) to the very practical process of building a full-stack web application, every stage brought its own challenges and lessons.",
            "I learned new technologies such as Docker, AWS cloud deployment, and how a CI/CD pipeline works in practice, while also realizing the sheer patience required when debugging even the smallest snippet of code that could hold up hours of progress. Beyond the technical side, I discovered the human side of research: understanding the perspective of participants, ensuring that the interface and study flow were intuitive, and designing systems that let people succeed in sharing their honest reactions.",
            "Through it all, I am incredibly grateful to Dr. David Hyde for trusting me to bring his idea to life, and to my fellow researchers in the SOL Lab for their guidance and collaboration. This project not only deepened my technical skillset but also showed me the importance of empathy and persistence in advancing research at the intersection of human trust and Cyber-Physical Systems.",
          ],
          expanded: false,
        },
      ],
    };
  }

  toggleExpand = (id) => {
    this.setState((prevState) => ({
      posts: prevState.posts.map((post) =>
        post.id === id ? { ...post, expanded: !post.expanded } : post
      ),
    }));
  };

  render() {
    return (
      <section id="blog" className="blog-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div
                className="title-box text-center"
                style={{ marginBottom: "32px" }}
              >
                <h3 className="title-a">Blog</h3>
                <p className="subtitle-a">
                  Thoughts, research, and project updates.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            {this.state.posts.map((post) => (
              <div
                key={post.id}
                className="col-md-6"
                style={{ marginBottom: "20px" }}
              >
                <div
                  className="card"
                  style={{
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                    borderRadius: "8px",
                  }}
                >
                  <div>
                    <h5>{post.title}</h5>
                    <small
                      style={{
                        color: "#666",
                        display: "block",
                        marginBottom: "6px",
                      }}
                    >
                      {post.date}
                    </small>

                    {/* Show summary OR full paragraphs */}
                    {post.expanded ? (
                      <>
                        {post.full.map((para, i) => (
                          <p
                            key={i}
                            style={{
                              marginBottom: "12px",
                              whiteSpace: "pre-line",
                            }}
                          >
                            {para}
                          </p>
                        ))}

                        {/* Show link if available */}
                        {post.link && (
                          <a
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              color: "#0078ff",
                              fontWeight: "bold",
                              textDecoration: "none",
                            }}
                          >
                            View Full Paper →
                          </a>
                        )}
                      </>
                    ) : (
                      <p
                        className="summary"
                        style={{
                          marginTop: "10px",
                          marginBottom: "12px",
                        }}
                      >
                        {post.summary}
                      </p>
                    )}
                  </div>

                  {/* Toggle button */}
                  <button
                    onClick={() => this.toggleExpand(post.id)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#0078ff",
                      fontWeight: "bold",
                      cursor: "pointer",
                      padding: 0,
                      marginTop: "10px",
                      alignSelf: "flex-start",
                    }}
                  >
                    {post.expanded ? "Show Less ↑" : "Read More →"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Blog;
