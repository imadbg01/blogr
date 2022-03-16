<script setup></script>

<template>
  <main class="py-5 my-10">
    <section class="px-16 py-6 md:pl-16 md:pr-0">
      <h2
        class="text-2xl font-medium text-center font-ubuntu text-very-dark-gray-blue md:text-3xl lg:text-4xl"
      >
        Designed for for the further
      </h2>
      <div
        class="flex flex-col items-center gap-5 text-center md:flex-row md:text-left"
      >
        <div class="md:w-[40%]">
          <div class="md:hidden">
            <img src="../../assets/illustration-editor-mobile.svg" alt="" />
          </div>
          <article class="py-4">
            <h3
              class="py-4 text-xl font-medium font-ubuntu text-Very-dark-blue"
            >
              Introducing an extensible editor
            </h3>
            <p class="text-Very-dark-grayish-blue/75">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </article>
          <article class="py-4">
            <h3
              class="py-4 text-xl font-medium font-ubuntu text-Very-dark-blue"
            >
              Robust content management
            </h3>
            <p class="text-Very-dark-grayish-blue/75">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </article>
        </div>
        <div class="hidden mt-8 md:block">
          <img src="../../assets/illustration-editor-desktop.svg" alt />
        </div>
      </div>
    </section>
    <!-- state -->
    <div class="relative h-full py-16 mt-16">
      <div
        class="rounded-tr-[40%] bg-very-dark-desaturated-blue pb-16 rounded-bl-[40%] w-full absolute top-40 bottom-10 -z-10 md:bottom-40"
      ></div>
      <div
        class="z-20 px-8 md:px-16 md:flex md:gap-5 md:justify-center md:items-center"
      >
        <div class="z-20 -mt-20 md:flex-shrink-0">
          <img
            src="../../assets/illustration-phones.svg"
            alt=""
            class="block object-contain bg-[url('../../assets/bg-pattern-circles.svg')] bg-center"
          />
        </div>
        <section class="z-20 -mt-6 text-center text-White md:mt-0">
          <h2 class="py-4 text-2xl font-ubuntu md:text-3xl">
            State of the Art Infrastructure
          </h2>
          <p class="px-4 text-White/75">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </section>
      </div>
    </div>
    <!-- laptop -->
    <div class="px-16 py-6 md:pr-16 md:pl-0 md:flex md:items-center md:gap-5">
      <div class="md:flex-shrink-0">
        <img
          src="../../assets/illustration-laptop-mobile.svg"
          alt=""
          class="md:hidden"
        />
        <img
          src="../../assets/illustration-laptop-desktop.svg"
          alt=""
          class="hidden md:block"
        />
      </div>
      <div class="text-center md:text-left md:w-[40%]">
        <section class="p-4 px-2 mb-4">
          <h2 class="py-4 text-xl font-ubuntu">Free, open, simple</h2>
          <p class="text-Very-dark-grayish-blue">
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
        </section>
        <section class="px-2 py-4">
          <h2 class="mb-4 text-xl font-ubuntu">Powerful tooling</h2>
          <p class="text-Very-dark-grayish-blue">
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </section>
      </div>
    </div>
  </main>
</template>
