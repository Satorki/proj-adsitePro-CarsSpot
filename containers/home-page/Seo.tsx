"use client";
import SeoBackground from "@/components/atoms/SeoBackground";
import SeoElement from "@/components/molecules/SeoElement";
import React, { useState } from "react";

const Seo = () => {
  return (
    <SeoBackground>
      <div className="mx-5 flex  sm:max-w-[600px] md:max-w-[700px] lg:max-w-[960px] xl:max-w-[var(--container-width)] sm:mx-auto gap-12">
        <SeoElement
          title="Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo."
          description="Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et lorem euismod, venenatis nunc quis, rhoncus ligula. Aenean consectetur, nunc sit amet."
        />
        <SeoElement
          title="Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo."
          description="Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et lorem euismod, venenatis nunc quis, rhoncus ligula. Aenean consectetur, nunc sit amet."
        />
      </div>
    </SeoBackground>
  );
};

export default Seo;
