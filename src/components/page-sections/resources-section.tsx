import { ResourceShelf } from "@/components/content-sections";

export function ResourcesSection() {
  return (
    <div className="resources-page-content" id="section-resources">
      <section className="inner-hero section-pad">
        <p className="eyebrow">02 / RESOURCES</p>
        <h1>
          Practice<br />
          <em>with intent.</em>
        </h1>
        <p className="inner-lede">
          Curated problems, field notes, and a starting point for students who have never done competitive programming.
        </p>
      </section>
      <ResourceShelf />
    </div>
  );
}

export default ResourcesSection;
