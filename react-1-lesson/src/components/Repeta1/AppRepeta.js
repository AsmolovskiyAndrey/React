import paintings from "./paintings.json";
import PaintingList from "./PaintingList";
import Section from "./Section";

export default function AppRepeta() {
  return (
    <div>
      <Section title="Top Weak">
        <PaintingList items={paintings} />
      </Section>

      <Section title="The Best">
        <PaintingList items={paintings} />
      </Section>
    </div>
  );
}
