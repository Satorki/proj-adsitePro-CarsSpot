import SeoBackground from "@/components/atoms/SeoBackground";
import SeoElement from "@/components/molecules/SeoElement";
import React from "react";
const Seo = () => {
  return (
    <SeoBackground>
      <div className="md:max-w-[700px] lg:max-w-[960px] xl:max-w-[var(--container-width)] mx-auto flex gap-12">
        <SeoElement
          title="Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo."
          description="Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et  [...]"
          expand={false}
        />
        <SeoElement
          title="Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo."
          description="Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et  [...]"
          expand={false}
        />
      </div>
    </SeoBackground>
  );
};

export default Seo;
