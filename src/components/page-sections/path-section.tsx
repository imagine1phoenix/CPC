import { Roadmap } from "@/components/roadmap";
import { PathProgressHeader } from "@/components/path-progress-header";

export function PathSection() {
  return (
    <div className="path-page-content" id="section-path">
      <section className="inner-hero path-hero section-pad">
        <div>
          <p className="eyebrow">02 / THE PATH</p>
          <h1>
            No more<br />
            <em>guessing.</em>
          </h1>
          <p className="inner-lede">
            A practical progression from first loops to the patterns that make competitive programming click.
          </p>
        </div>
        <PathProgressHeader />
      </section>
      <Roadmap />
    </div>
  );
}

export default PathSection;
