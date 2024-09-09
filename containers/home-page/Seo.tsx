import CustomBackground from "@/components/atoms/CustomBackground";
import SeoElement from "@/components/molecules/SeoElement";
import React from "react";
const Seo = () => {
  return (
    <CustomBackground>
      <div className="max-w-[1200px] mx-auto flex gap-12">
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
    </CustomBackground>
  );
};

export default Seo;
